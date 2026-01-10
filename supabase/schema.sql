-- Tablas para el SaaS de Restaurante IA

-- 1. Restaurantes
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  tarifa_activa TEXT DEFAULT 'basico', -- 'basico', 'premium', 'hibrido'
  billing_data JSONB DEFAULT '{"base_price": 59000, "per_order_price": 0}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Categorías de Menú
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Items del Menú
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  ai_optimized BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Pedidos (Simple para V1)
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  table_number TEXT,
  status TEXT DEFAULT 'pending', -- pending, preparing, ready, completed, cancelled
  total_amount DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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
