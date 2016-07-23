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
			nom : "Facebook",
			url : "image/fb.jpg",
			lien : "http://www.facebook.com",
		},
		{
			nom : "Twiter",
			url : "image/twiter.jpg",
			lien : "http://www.twitter.com",
		},
		{
			nom : "Instagram",
			url : "image/instagram.jpg",
			lien : "http://www.instagram.com",
		}
	]
})