function enviarMensaje(cliente, contacto, mensaje) {
    return cliente.sendMessage(contacto, mensaje);
}

module.exports = {
    enviarMensaje,
};