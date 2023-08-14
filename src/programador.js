const cron = require('node-cron');
const { enviarMensaje } = require('./mensaje.js');

const CONTACTO = 'TUNUMEROCELULAR@c.us'
const MSG_SALUDOS = [
    'Buenos días, ¿cómo amaneció?',
    'Buenos días, ¿cómo está?',
    'Buenos días, ¿cómo le va?',
]

function programador_tareas(cliente) {
    const tiempo = '0 58 18 * * *';
    if (cron.validate(tiempo)) {
        console.log('Cron inicializado');
        cron.schedule(tiempo, async () => {
            try {
                const saludo = MSG_SALUDOS[Math.floor(Math.random() * MSG_SALUDOS.length)];
                await enviarMensaje(cliente, CONTACTO, saludo);
                console.log('Mensaje enviado');
            } catch (error) {
                console.log('Error en cron', error);
            }
        });
    }
}

module.exports = {
    programador_tareas,
};