LigaScore.CountriesController = Ember.Controller.extend({
    actions: {
        handlerSubmit: function (country) {
            if ( this.get('countryName').length > 0 )
            {
                this.store.createRecord('country', {
                  name: this.get('countryName'),
                  id: 'null'
                });
                this.set('countryName','');
            }
            
            // var route = this;
            // return country.save().then(function(){
            //     route.set('countryName','');
            // });
        }
    }
});