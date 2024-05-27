import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Toaster, toast } from 'sonner'

function Form() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    // Función para validar el formato del correo electrónico
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario

        console.log("ACAAAAAAAAAAAAA"); // Verificar si handleSubmit se llama

        // Validar el correo electrónico
        if (!validateEmail(email)) {
            setEmailError('Por favor ingrese un correo electrónico válido');
            return;
        } else {
            setEmailError('');
        }

        if (message.trim() === '') {
            // Mostrar un mensaje de error al usuario
            setMessageError('Por favor ingrese su mensaje');
            return; // Salir de la función si el campo de mensaje está vacío
        } else {
            setMessageError('');
        }

        // Enviar correo electrónico usando EmailJS
        try {
            await emailjs.send(
                'service_vsaeinm', // Reemplaza 'YOUR_SERVICE_ID' con tu Service ID de EmailJS
                'template_xac4bkn', // Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID de EmailJS
                {
                    from_name: nombre,
                    to_email: 'vero_90_26@hotmail.com', // Cambia esto por la dirección de correo electrónico a la que deseas enviar el mensaje
                    nombre: nombre,
                    message: message,
                    email: email,
                },
                'bvRdcuQXciTU5FSB1' // Reemplaza 'YOUR_USER_ID' con tu User ID (que ahora sería public_key) de EmailJS
            );
            console.log('Correo electrónico enviado con éxito');
            // Puedes mostrar un mensaje de éxito aquí
            toast.success('Enviado con éxito, a la brevedad nos estaremos comunicando contigo.')
            setEmail('')
            setMessage('')
            setNombre('')
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
            // Puedes mostrar un mensaje de error aquí
            toast.error('Hubo un error, intente nuevamente en unos minutos o contactenos al 2214085498')
        }
    };

    return (
        <div className='py-1 px-0 md:px-2 h-72 bg-contrast rounded-lg  w-full mx-auto md:w-3/5 hover:opacity-90 hover:shadow-2xl shadow-black opacity-85'>
            <form className='p-4 mx-auto w-11/12 h-80 flex flex-col justify-evenly' onSubmit={handleSubmit}>
                <input
                    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='nombre'
                    type='text'
                    value={nombre}
                    onChange={handleNombreChange}
                    placeholder='Nombre'
                />

                <textarea
                    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='message'
                    value={message}
                    onChange={handleMessageChange}
                    placeholder='Envía tu consulta aquí, o solicita tu turno...'
                />
                {messageError && <p className='text-primaryLight text-sm'>{messageError}</p>}
                <input
                    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Correo electrónico'
                />
                {emailError && <p className='text-primaryLight text-sm'>{emailError}</p>}
                <button
                    type='submit'
                    className='group relative inline-flex mb-4 h-10 items-center justify-center overflow-hidden rounded-md bg-primary font-medium text-background transition hover:bg-primaryDark hover:scale-110'
                >
                    <span className='relative'>Enviar</span>
                </button>
                <Toaster richColors position="top-center" />
            </form>
        </div>
    );
}

export default Form;
