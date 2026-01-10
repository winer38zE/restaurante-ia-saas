-- Tablas para el SaaS de Restaurante IA

-- 1. Restaurantes
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  plan_tipo TEXT DEFAULT 'basico', -- 'basico', 'premium', 'hibrido'
  billing_data JSONB DEFAULT '{"base_price": 59000, "per_order_price": 0}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ... (Categorías y Items se mantienen igual)

-- 4. Pedidos
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  table_number TEXT,
  status TEXT DEFAULT 'pending', 
  total_amount DECIMAL(10,2),
  fee_plataforma DECIMAL(10,2) DEFAULT 0, -- Cargo por el plan híbrido
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lógica para calcular el fee_plataforma en inserción
CREATE OR REPLACE FUNCTION calculate_order_fee()
RETURNS TRIGGER AS $$
DECLARE
  v_plan_tipo TEXT;
BEGIN
  SELECT plan_tipo INTO v_plan_tipo FROM restaurants WHERE id = NEW.restaurant_id;
  
  IF v_plan_tipo = 'hibrido' THEN
    NEW.fee_plataforma := 100; -- $100 COP por pedido
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trer_calculate_fee
BEFORE INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION calculate_order_fee();

-- 5. Items del Pedido
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id UUID REFERENCES menu_items(id),
  quantity INTEGER DEFAULT 1,
  notes TEXT
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Políticas (Simplificadas)
CREATE POLICY "Owners can manage their restaurants" ON restaurants
  FOR ALL USING (auth.uid() = owner_id);

-- Para el menú público
CREATE POLICY "Public can view menus" ON menu_items
  FOR SELECT USING (TRUE);
