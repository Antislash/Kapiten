app.controller('CtrlMenu', function($scope){
	$scope.onglets = [
		{
			nom : "Accueil",
			lien : "#/Accueil",
		},
		{
			nom : "News",
			lien : "#/Article",
		},
		{
			nom : "Histoire",
			lien : "#",
		},
		{

			nom : "Contact",
			lien : "#",
		},
		{

			nom : "Shop",
			lien : "#",
		}

	];
})

app.controller('CtrlFooter', function($scope){
	$scope.images = [
		{
			nom : "Twiter",
			url : "image/instagram.png",
			lien : "http://www.twitter.com",
		},
		{
			nom : "Facebook",
			url : "image/fb.jpg",
			lien : "http://www.facebook.com",
		},
		{
			nom : "Instagram",
			url : "image/instagram.png",
			lien : "https://www.instagram.com/kapiten5/",
		}
	]
})

app.controller( 'CtrlCarousel',function($scope, $resource){
	$scope.instagram = {};
/*	va},
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];r headers = {
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	};

	$http({
		method: "POST",
		headers: headers,
		url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1523801840.a434dd0.34350157e8a14b709d04b1772816a074&count=3'})
 	.then(function(response) {
    	console.log('success', response);
	});
*/ 	$scope.instagram = $resource("https://api.instagram.com/v1/users/self/media/recent/?access_token=1523801840.a434dd0.34350157e8a14b709d04b1772816a074&count=20",
	{q : 'angularjs', callback : 'JSON_CALLBACK'},
	{get:{method:'JSONP'}})
	$scope.instagram.get(function(response) {
		$scope.instagram = response.data;
/*	console.log('success', $scope.instagram);*/
	    
	});
/*	$scope.search = function(){
		$scope.instaResearch = $scope.instagram.get({q:$scope.searTerm});
		console.log(instaResearch);
	}*/
})

app.controller('CtrlArticle', function($scope, $http){

	var req = {
	 method: 'POST',
	 url: '/someUrl',
	 headers: {
	   'Content-Type': undefined
	 },
	 data: { test: 'test' }
	}

	$http(req).
	then(
		function(response){
			console.log('ok', response);
		}, 
		function(){console.log('not ok');});

	$scope.articles = [
		{
			titre : "Le navire prend le large",
			url : "image/article/article1.jpg",
			paragraphe : "Bravo à Olivier Kmr qui a fini 5ème au classement général du Makinito Contest 2016 Le navire est en forme ! ⛵ #‎EveryDayIsAnAdventure‬"
		},

		{
			titre : "C'est les soldes chez Kapiten",
			url : "image/article/article2.jpg",
			paragraphe : "Bravo à Olivier Kmr qui a fini 5ème au classement général du Makinito Contest 2016 Le navire est en forme ! ⛵ #‎EveryDayIsAnAdventure‬"
		}
	]
})