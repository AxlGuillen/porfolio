<template>
    

    <form @submit.prevent="sendEmail" class="w-full mx-auto">
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

        <button type="submit" class="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800">Enviar</button>

    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { useI18n } from "vue-i18n";
    import emailjs from '@emailjs/browser';

    // Inicializa EmailJS con tu Public Key
    emailjs.init('OaiN3mSDbR8mvzrZE');

    const { t } = useI18n();

    const name = ref('');
    const email = ref('');
    const message = ref('');

    const sendEmail = () => {
    const serviceID = 'service_vh78oep';
    const templateID = 'template_2fd1ryv';

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
    };
</script>