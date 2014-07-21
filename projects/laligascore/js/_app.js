(function ($) {
    'use strict';

    var parseAppUI = {
        widgetModal: $('#widgetModal'),
        showModal: function () {
            parseAppUI.widgetModal.modal({
                keyboard: false,
                backdrop: 'static'
            });
        },
        hideModal: function () {
            parseAppUI.widgetModal.modal('hide');
        }
    };

    var parseApp = parseApp || {};
  
    parseApp = (function()
    {
        var module =
        {
            Torneo: null,
            Edicion: null,
            Equipo: null,
            Partido: null,
            callbacks: {
                success: function(object) {
                    parseAppUI.hideModal();
                    console.log('Saved');
                    console.log(object);
                },
                error: function(model, error) {
                    parseAppUI.hideModal();
                    console.error(error);
                }
            },
            saveTorneo: function (torneoJson)
            {
                console.log(torneoJson);
                var objTorneo = new parseApp.Torneo();
                // objTorneo.save(torneoJson, parseApp.callbacks);
                objTorneo.save(torneoJson).then(function(object) {
                    parseAppUI.hideModal();
                    console.log('Saved');
                    console.log(object);
                }, function(error) {
                    parseAppUI.hideModal();
                    console.error(error);
                });
            },
            init: function ()
            {
                Parse.initialize('sdk', 'js');
                parseApp.Torneo = Parse.Object.extend('Torneo');
                parseApp.Edicion = Parse.Object.extend('Edicion');
                parseApp.Equipo = Parse.Object.extend('Equipo');
                parseApp.Partido = Parse.Object.extend('Partido');
            }
        }

        return module;
    })();

    parseApp.init();

    $('#btnSaveTorneo').on('click', function(e){
        e.preventDefault();
        parseAppUI.showModal();
        if ( $('#torneoPais').val() !== '-' )
        {
            parseApp.saveTorneo({
                nombre: $('#torneoNombre').val(),
                pais: $('#torneoPais').val(),
            });
        }
        else
        {
            parseAppUI.hideModal();
        }
    });

    
    $('#showModal').on('click', function(e){
        e.preventDefault();
        parseAppUI.showModal();
    });


})(jQuery);