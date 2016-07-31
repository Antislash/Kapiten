app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : "partial/accueil.html",
			controller : "CtrlCarousel"})

		.when('/Accueil', { 
			templateUrl : "partial/accueil.html",
			controller : "CtrlCarousel"})

		.when('/Article', { 
			templateUrl : "partial/article.html",
		  	controller : "CtrlArticle"})

		.otherwise({redirectTo : '/'})

})