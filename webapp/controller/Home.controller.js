sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("com.lab2dev.firstapp.controller.Home", {
        onInit: function () {
            console.log('Hello world!')
        },
        onPress: function (oEvent) {
            // Origem do evento
            const item = oEvent.getSource();

            // Titulo do item
            const title = item.getTitle();

            // Mensagem a ser exibida
            const message = `O item: "${title}" foi clicado!`

            // Exibe uma mensagem na tela
            MessageToast.show(message);
        }
    });
});
