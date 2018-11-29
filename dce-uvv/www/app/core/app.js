angular.module('app', ['ionic', 'ngCordova', 'ngStorage'])

	.run(function ($ionicPlatform, $rootScope, $state, $localStorage, $http) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			if (window.cordova && window.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if (window.StatusBar) {
				StatusBar.backgroundColorByHexString('#2D398E');
			}
		});

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

		});
	})

	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/app');
		$stateProvider
			.state('app', {
				url: '/app',
				templateUrl: 'app/core/menu.html',
				controller: 'AppController',
				controllerAs: 'vm'
			})			
			.state('app.produtos', {
				url: '/produtos',
				templateUrl: 'app/produtos/produtos.html',
				controller: 'ProdutosController',
				controllerAs: 'vm'
			})
			.state('app.parcerias', {
				url: '/parcerias',
				templateUrl: 'app/parcerias/parcerias.html',
				controller: 'ParceriasController',
				controllerAs: 'vm'
			});
	});
