import React, { useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

function App() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    nombreEmpresa: '',
    sectorEmpresa: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('webinar_registrations')
        .insert([
          {
            nombre_completo: formData.nombreCompleto,
            email: formData.email,
            telefono: formData.telefono,
            nombre_empresa: formData.nombreEmpresa || null,
            sector_empresa: formData.sectorEmpresa
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Duplicate email
          setSubmitMessage('Este email ya está registrado para el webinar.');
        } else {
          setSubmitMessage('Error al registrarse. Por favor, inténtalo de nuevo.');
        }
        console.error('Error:', error);
      } else {
        setSubmitMessage('¡Registro exitoso! Te esperamos en el webinar.');
        setFormData({
          nombreCompleto: '',
          email: '',
          telefono: '',
          nombreEmpresa: '',
          sectorEmpresa: ''
        });
      }
    } catch (error) {
      setSubmitMessage('Error de conexión. Por favor, inténtalo de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="App">
      {/* Main Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="webinar-badge">
              🚀 Webinar Exclusivo ⚡
            </div>
            
            <h1 className="hero-title">
              Genera Más Leads (Prospectos)<br />
              Aumenta tus Ventas con IA
            </h1>
            
            <p className="hero-subtitle">
              Descubre el sistema completo de generación automática de leads (prospectos), 
              emails personalizados y seguimiento inteligente para convertir más prospectos en ventas
            </p>
            
            <div className="features-icons">
              <div className="feature-icon">
                <div className="icon">🚀</div>
                <span>Más Leads (Prospectos)</span>
              </div>
              <div className="feature-icon">
                <div className="icon">📈</div>
                <span>Más Ventas</span>
              </div>
              <div className="feature-icon">
                <div className="icon">24/7</div>
                <span>Automatización</span>
              </div>
            </div>
          </div>
          
          {/* Registration Form */}
          <div className="registration-form-card">
            <div className="form-header">
              <span className="form-icon">🎯</span>
              <h3>Reserva tu Plaza GRATIS</h3>
              <p>Únete a los empresarios que ya están multiplicando sus ventas</p>
            </div>
            
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Completo *</label>
                <input 
                  type="text" 
                  name="nombreCompleto"
                  placeholder="Tu nombre completo" 
                  className="form-input" 
                  value={formData.nombreCompleto}
                  onChange={handleInputChange}
                  required 
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Email Empresarial *</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="tu.email@empresa.com" 
                  className="form-input" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Teléfono / WhatsApp *</label>
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="+56 9 1234 5678" 
                  className="form-input" 
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required 
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Nombre de tu Empresa</label>
                <input 
                  type="text" 
                  name="nombreEmpresa"
                  placeholder="Nombre de tu empresa" 
                  className="form-input" 
                  value={formData.nombreEmpresa}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label>Sector de tu Empresa *</label>
                <select 
                  className="form-select" 
                  name="sectorEmpresa"
                  value={formData.sectorEmpresa}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona tu sector</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="marketing">Marketing</option>
                  <option value="ventas">Ventas</option>
                  <option value="servicios">Servicios</option>
                  <option value="comercio">Comercio</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              
              {submitMessage && (
                <div className={`form-message ${submitMessage.includes('exitoso') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
              
              <button type="submit" className="register-btn" disabled={isSubmitting}>
                {isSubmitting ? '⏳ REGISTRANDO...' : '🚀 RESERVAR MI PLAZA GRATIS'}
              </button>
            </form>
          </div>
          
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-text">Más información abajo</div>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* Irresistible Offer - Virtual Raffle */}
      <section className="raffle-section">
        <div className="container">
          <div className="raffle-card">
            <div className="raffle-header">
              <span className="raffle-badge">🎁 SORTEO EXCLUSIVO</span>
            </div>
            <div className="raffle-content">
              <h4 className="raffle-subtitle">
                Sortearemos 2 IMPLEMENTACIONES COMPLETAS
              </h4>
              <p className="raffle-description">
                Al final del webinar realizaremos un <strong>sorteo virtual</strong> entre todos los asistentes. 
                Los 2 ganadores recibirán:
              </p>
              <div className="raffle-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🚀</span>
                  <span>Implementación completa del sistema de generación de leads</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">👨‍💼</span>
                  <span>Acompañamiento personalizado durante 15 días</span>
                </div>
              </div>
              <div className="raffle-cta">
                <p className="raffle-note">
                  <strong>¡Solo debes asistir al webinar completo para participar!</strong>
                </p>
                <span className="raffle-urgency">⚡ Regístrate ahora - Cupos limitados</span>
              </div>
              
              <div className="raffle-disclaimer">
                <p className="disclaimer-text">
                  <strong>Nota importante:</strong> Garantizamos la generación de leads (prospectos) calificados. 
                  Las ventas finales dependen de tu estrategia comercial y seguimiento, no podemos garantizar ventas específicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Details */}
      <section className="webinar-details">
        <div className="container">
          <div className="details-card">
            <h3>📅 Detalles del Webinar</h3>
            <div className="details-list">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <span>Fecha: Jueves 10 de Julio, 2025</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🕐</span>
                <span>Hora: 19:00 - 21:00 hrs (Chile)</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💻</span>
                <span>Modalidad: 100% Online (Zoom)</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎁</span>
                <span>Bonus: Templates de emails + Guía de seguimiento</span>
              </div>
            </div>
          </div>
          
          <div className="countdown-section">
            <h4>⏰ El webinar comienza en:</h4>
            <div className="countdown">
              <div className="countdown-item">
                <span className="number">09</span>
                <span className="label">Días</span>
              </div>
              <div className="countdown-item">
                <span className="number">07</span>
                <span className="label">Horas</span>
              </div>
              <div className="countdown-item">
                <span className="number">55</span>
                <span className="label">Min</span>
              </div>
              <div className="countdown-item">
                <span className="number">36</span>
                <span className="label">Seg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">🎯</div>
              <h4>Generador de Leads (Prospectos) Pro</h4>
              <p>Encuentra emails empresariales verificados y genera leads (prospectos) de alta calidad usando Machine Learning y técnicas avanzadas de prospección.</p>
              <ul>
                <li>Búsqueda automática de emails</li>
                <li>Verificación de contactos</li>
                <li>Exportación a CSV</li>
                <li>Automación de leads (prospectos)</li>
              </ul>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">📧</div>
              <h4>Automatizador de Email</h4>
              <p>Automatiza campañas de email marketing con personalización y segmentación avanzada para maximizar conversiones.</p>
              <ul>
                <li>Campañas automatizadas</li>
                <li>Personalización masiva</li>
                <li>A/B Testing avanzado</li>
                <li>Analíticas en tiempo real</li>
              </ul>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">📊</div>
              <h4>Seguimiento de Leads (Prospectos)</h4>
              <p>Sistema unificado para gestionar todos tus prospectos desde inicial interés hasta conversión de clientes con automatización.</p>
              <ul>
                <li>Vista unificada de prospectos</li>
                <li>Filtros avanzados</li>
                <li>Gestión de estados</li>
                <li>Exportación completa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Quality Commitment */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-card">
            <h3>Compromiso de Calidad</h3>
            <p>Te compartiremos estrategias prácticas y herramientas reales que puedes implementar inmediatamente para mejorar tu proceso de generación de leads y automatización de ventas.</p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="learning-section">
        <div className="container">
          <h3 className="section-title">🎯 Lo que aprenderás:</h3>
          <div className="learning-grid">
            <div className="learning-item">
              <span className="check">✅</span>
              <span>Cómo generar leads (prospectos) automáticamente</span>
            </div>
            <div className="learning-item">
              <span className="check">✅</span>
              <span>Estrategias de cold email que convierten</span>
            </div>
            <div className="learning-item">
              <span className="check">✅</span>
              <span>Seguimiento que transforma leads (prospectos) en ventas</span>
            </div>
            <div className="learning-item">
              <span className="check">✅</span>
              <span>Configuración de prospección 24/7</span>
            </div>
            <div className="learning-item">
              <span className="check">✅</span>
              <span>Medición de leads (prospectos) que generan ventas</span>
            </div>
            <div className="learning-item">
              <span className="check">✅</span>
              <span>Casos reales de crecimiento en ventas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 