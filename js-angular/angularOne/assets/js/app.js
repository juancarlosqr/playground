// https://www.iconfinder.com/icons/49804/ruby_icon
(function()
{
	var app = angular.module('store', []);

	app.controller('StoreController', function ()
	{
		this.products = gems;	
	});

	app.controller('TabController', function()
	{
		this.tab = 1;

		this.setTab = function(thetab)
		{
		    this.tab = thetab;
		};

		this.isSet = function(thetab)
		{
		    if (this.tab === thetab)
		    return true;
		};
	});

	var gems = [
		{
			name: 'Emerald',
			price: 102.95,
			description: 'The best gem product',
			shine: 8,
	        rarity: 7,
	        color: '#CCC',
	        faces: 14,
			canPurchase: false,
			soldOut: false,
			images: [
			{
				full:'assets/images/Emerald.png',
				thumb:'assets/images/Emerald_thumb.png'
			}],
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Amethyst',
			price: 92,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Amethyst is one of those gems.',
			shine: 9,
	        rarity: 6,
	        color: '#EEE',
	        faces: 12,
			canPurchase: true,
			soldOut: false,
			images: [
			{
				full:'assets/images/Amethyst.png',
				thumb:'assets/images/Amethyst_thumb.png'
			}],
			reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837
			}, {
				stars: 4,
				body: "Any gem with 12 faces is for me!",
				author: "gemsRock@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Ruby',
			price: 85.90,
			description: 'God\'s Stone',
			shine: 70,
	        rarity: 2,
	        color: '#000',
	        faces: 6,
			canPurchase: true,
			soldOut: false,
			images: [
			{
				full:'assets/images/Ruby.png',
				thumb:'assets/images/Ruby_thumb.png'
			}],
			reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Zircon',
			price: 132.90,
			description: 'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
			shine: 70,
	        rarity: 2,
	        color: '#000',
	        faces: 6,
	        canPurchase: false,
			soldOut: false,
			images: [
			{
				full:'assets/images/Zircon.png',
				thumb:'assets/images/Zircon_thumb.png'
			}],
			reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837
			}, {
				stars: 4,
				body: "Any gem with 12 faces is for me!",
				author: "gemsRock@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Peridot',
			price: 195,
			description: 'Origin of the Peridot is unknown, hence its high value. It has a very high shine and 12 sides, however.',
			shine: 7,
	        rarity: 2,
	        color: '#EEE',
	        faces: 12,
	        canPurchase: true,
			soldOut: false,
			images: [
			{
				full:'assets/images/Peridot.png',
				thumb:'assets/images/Peridot_thumb.png'
			}],
			reviews: [{
				stars: 1,
				body: "This gem is WAY too expensive for its rarity value.",
				author: "turtleguyy@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "BBW: High Shine != High Quality.",
				author: "LouisW407@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "Don't waste your rubles!",
				author: "nat@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Quartz crystal',
			price: 175.90,
			description: 'God\'s Stone',
			shine: 15,
	        rarity: 1,
	        color: '#FFF',
	        faces: 7,
			canPurchase: true,
			soldOut: false,
			images: [
			{
				full:'assets/images/Quartz_crystal.png',
				thumb:'assets/images/Quartz_crystal_thumb.png'
			}],
			reviews: [{
				stars: 1,
				body: "BBW: High Shine != High Quality.",
				author: "LouisW407@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "Don't waste your rubles!",
				author: "nat@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name: 'Citrine',
			price: 12.90,
			description: 'Citrine Stone',
			shine: 40,
	        rarity: 4,
	        color: '#000',
	        faces: 10,
			canPurchase: true,
			soldOut: false,
			images: [
			{
				full:'assets/images/Citrine.png',
				thumb:'assets/images/Citrine_thumb.png'
			}],
			reviews: [{
				stars: 1,
				body: "This gem is WAY too expensive for its rarity value.",
				author: "turtleguyy@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "Don't waste your rubles!",
				author: "nat@example.org",
				createdOn: 1397490980837
			}]
		}
	];

})();