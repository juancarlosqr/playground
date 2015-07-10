(function(){
	var app = angular.module('futbol', []);

	app.controller('MainController', function(){
		this.players = players;
	});

	var players = [{
		name: 'Isco',
		picture: 'http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/i/isc/100/18679.jpg',
		position: 'middle',
		price: 8,
		canPurchase: true,
		genre: 'Pop'
	},{
		name: 'Iniesta',
		picture: 'http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/i/ini/100/6852.jpg',
		position: 'middle',
		price: 9,
		canPurchase: true,
		genre: 'Rock'
	},{
		name: 'Benzema',
		picture: 'http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/b/ben/100/15784.jpg',
		position: 'attacker',
		price: 11,
		canPurchase: true,
		genre: 'Indie'
	}];

})();