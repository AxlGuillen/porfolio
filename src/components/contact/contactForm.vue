<template>
    <form @submit.prevent="sendEmail" class="w-full mx-auto p-5 card">
        <div class="relative z-0 w-full mb-5 group">
            <input v-model="name" type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-neutral-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ t('contact.labelName') }}</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input v-model="email" type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-neutral-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="email" class="peer-focus:font-medium absolute text-sm text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ t('contact.labelEmail') }}</label>
        </div>

        <div class="mb-5">
            <label for="message" class="block mb-2 text-sm font-medium text-neutral-400">{{ t('contact.titleMessage') }}</label>
            <textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg borde focus:border-blue-600 bg-neutral-900 border-neutral-600 placeholder-neutral-400 text-white " :placeholder="t('contact.labelMessage')" required></textarea>
        </div>

        <button type="submit" class="w-full button">Enviar</button>

    </form>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useI18n } from "vue-i18n";
    import emailjs from '@emailjs/browser';
    import axios from 'axios';

    const apiKey = import.meta.env.VITE_ABSTRACT_API_KEY;
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Inicializa EmailJS con tu Public Key
    emailjs.init(publicKey);

    const { t } = useI18n();

    const name = ref('');
    const email = ref('');
    const message = ref('');

    const sendEmail = async () => {
        try {
            
            const response = await axios.get(
                `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email.value}`
            );

            const { is_valid_format, deliverability } = response.data;

            if (!is_valid_format.value || deliverability !== 'DELIVERABLE') {
                alert('El correo no es válido o no existe.');
                return;
            }

            const templateParams = {
                name: name.value,
                email: email.value,
                message: message.value,
            };

            emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                alert('¡Correo enviado exitosamente!');
            }, (err) => {
                alert('Error al enviar el correo:\n' + JSON.stringify(err));
            });

        } catch (error) {
            console.error('Error durante la validación o el envío del correo:', error);
            alert('Ocurrió un error durante la validación del correo.');
        }
    };
</script>

<style scoped>
    button {
    color: #1c64f2;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid #1c64f2;
    background: #000000;
    box-shadow: 3px 3px #1c64f2;
    cursor: pointer;
    }

    button:active {
    box-shadow: none;
    transform: translate(3px, 3px);
    }

    .card {
    border-radius: 30px;
    box-shadow: 10px 10px 15px  #1c63f244,
                -10px -10px 15px #1c63f244;
    }

</style>