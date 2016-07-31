app.controller('CtrlMenu', function($scope){
	$scope.onglets = [
		{
			nom : "Accueil",
			lien : "#/Accueil",
		},
		{
			nom : "Article",
			lien : "#/Article",
		},
		{
			nom : "Histoire",
			lien : "#",
		}

	];
})

app.controller('CtrlFooter', function($scope){
	$scope.images = [
		{
			nom : "Twiter",
			url : "image/twiter.jpg",
			lien : "http://www.twitter.com",
		},
		{
			nom : "Facebook",
			url : "image/fb.jpg",
			lien : "http://www.facebook.com",
		},
		{
			nom : "Instagram",
			url : "image/instagram.jpg",
			lien : "http://www.instagram.com",
		}
	]
})

app.controller( 'CtrlCarousel',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];

/*  $('.carousel').carousel({
                interval: 5000,
                pause: "hover",
                wrap: true
            })
            .on('click', '.carousel-control', handle_nav);

  var handle_nav = function(e) {
        e.preventDefault();
        var nav = $(this);
        nav.parents('.carousel').carousel(nav.data('slide');
        }*/
})

app.controller('CtrlArticle', function($scope){
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