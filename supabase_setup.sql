-- Crear tabla para registros del webinar
CREATE TABLE webinar_registrations (
  id BIGSERIAL PRIMARY KEY,
  nombre_completo VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  telefono VARCHAR(50) NOT NULL,
  nombre_empresa VARCHAR(255),
  sector_empresa VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_webinar_registrations_email ON webinar_registrations(email);
CREATE INDEX idx_webinar_registrations_created_at ON webinar_registrations(created_at);
CREATE INDEX idx_webinar_registrations_sector ON webinar_registrations(sector_empresa);

-- Habilitar Row Level Security (RLS)
ALTER TABLE webinar_registrations ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir insertar registros (público puede registrarse)
CREATE POLICY "Allow public insert" ON webinar_registrations
FOR INSERT TO public
WITH CHECK (true);

-- Crear política para permitir lectura solo a usuarios autenticados (opcional)
CREATE POLICY "Allow authenticated read" ON webinar_registrations
FOR SELECT TO authenticated
USING (true);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at automáticamente
CREATE TRIGGER update_webinar_registrations_updated_at
    BEFORE UPDATE ON webinar_registrations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comentarios para documentar la tabla
COMMENT ON TABLE webinar_registrations IS 'Tabla para almacenar registros del webinar de IA para generación de leads';
COMMENT ON COLUMN webinar_registrations.nombre_completo IS 'Nombre completo del registrado';
COMMENT ON COLUMN webinar_registrations.email IS 'Email empresarial del registrado (único)';
COMMENT ON COLUMN webinar_registrations.telefono IS 'Teléfono/WhatsApp del registrado';
COMMENT ON COLUMN webinar_registrations.nombre_empresa IS 'Nombre de la empresa (opcional)';
COMMENT ON COLUMN webinar_registrations.sector_empresa IS 'Sector de la empresa del registrado'; 