app.config(function($routeProvider){
	$routeProvider
		.when('/', 
		{templateUrl : "partial/accueil.html"})

		.when('/Accueil',
		{ templateUrl : "partial/accueil.html"})

		.when('/Article',
		{ templateUrl : "partial/article.html"})

		.otherwise({redirectTo : '/'})

})