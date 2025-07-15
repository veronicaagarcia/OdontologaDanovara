import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        message: '',
        servicio: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Nombre validation
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        } else if (formData.nombre.trim().length < 2) {
            newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Por favor ingrese un email válido';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_vsaeinm',
                'template_xac4bkn',
                {
                    from_name: formData.nombre,
                    to_email: 'vero_90_26@hotmail.com',
                    nombre: formData.nombre,
                    message: formData.message,
                    email: formData.email,
                    telefono: formData.telefono,
                    servicio: formData.servicio
                },
                'bvRdcuQXciTU5FSB1'
            );
            
            toast.success('¡Mensaje enviado con éxito! Nos comunicaremos contigo a la brevedad.');
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                message: '',
                servicio: ''
            });
            setErrors({});
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            toast.error('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos al 221 408-5498');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="card p-8 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Header */}
                    <div className="text-center space-y-2 pb-6 border-b border-neutral-100">
                        <h3 className="text-2xl font-bold text-neutral-900 font-serif">
                            Solicita tu Consulta
                        </h3>
                        <p className="text-neutral-600">
                            Completa el formulario y nos contactaremos contigo
                        </p>
                    </div>

                    {/* Nombre */}
                    <div className="space-y-2">
                        <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700">
                            Nombre completo *
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                                errors.nombre 
                                    ? 'border-red-300 bg-red-50' 
                                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                            }`}
                            placeholder="Tu nombre completo"
                        />
                        {errors.nombre && (
                            <p className="text-sm text-red-600 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.nombre}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                                errors.email 
                                    ? 'border-red-300 bg-red-50' 
                                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                            }`}
                            placeholder="tu.email@ejemplo.com"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Teléfono (opcional) */}
                    <div className="space-y-2">
                        <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="221 123-4567 (opcional)"
                        />
                    </div>

                    {/* Servicio de interés */}
                    <div className="space-y-2">
                        <label htmlFor="servicio" className="block text-sm font-medium text-neutral-700">
                            Servicio de interés
                        </label>
                        <select
                            id="servicio"
                            name="servicio"
                            value={formData.servicio}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="">Seleccionar servicio (opcional)</option>
                            <option value="consulta-general">Consulta General</option>
                            <option value="brackets">Brackets</option>
                            <option value="alineadores">Alineadores Invisibles</option>
                            <option value="blanqueamiento">Blanqueamiento Dental</option>
                            <option value="piercing">Piercing Dental</option>
                            <option value="ortopedia">Ortopedia Maxilar</option>
                            <option value="limpieza">Limpieza Dental</option>
                        </select>
                    </div>

                    {/* Mensaje */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                            Mensaje *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                                errors.message 
                                    ? 'border-red-300 bg-red-50' 
                                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                            }`}
                            placeholder="Cuéntanos sobre tu consulta, disponibilidad horaria, o cualquier pregunta que tengas..."
                        />
                        {errors.message && (
                            <p className="text-sm text-red-600 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 transform ${
                            isSubmitting
                                ? 'bg-neutral-400 cursor-not-allowed'
                                : 'btn-primary hover:scale-105 active:scale-95'
                        }`}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Enviando...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Enviar Mensaje
                            </div>
                        )}
                    </button>

                    {/* Footer note */}
                    <p className="text-xs text-neutral-500 text-center pt-4">
                        * Campos obligatorios. Nos comprometemos a responder dentro de las 24 horas.
                    </p>
                </form>
            </div>

            <Toaster 
                position="top-center" 
                richColors 
                closeButton
                duration={5000}
            />
        </div>
    );
}

export default Form;