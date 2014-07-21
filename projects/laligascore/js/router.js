(function () {
    'use strict';
    
    LigaScore.Router.map(function() {
        this.resource('torneo' , {path : 'torneo'});
        this.resource('equipo' , {path : 'equipo'});
    });
})();