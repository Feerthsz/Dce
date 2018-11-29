'use strict';
(function () {

	function AppController($ionicPlatform, $state, $rootScope, $scope) {
		//Inicialização de variáveis
		var vm = this;
		vm.parcerias = [
            {
                Nome: 'Akmos',
                CaminhoLogo: 'img/akmos.png',
                Tipo: 'fas fa-shopping-bag',
                Descricao: ''
            },
            {
                Nome: 'Subway',
                CaminhoLogo: 'img/subway.png',
                Tipo: 'fas fa-utensils',
                Descricao: ''
            },
            {
                Nome: 'Le-Chocolatier',
                CaminhoLogo: 'img/chocolatier.jpg',
                Tipo: 'fas fa-utensils',
                Descricao: ''
            }
        ]
		vm.hideReloadPage = $state.current.hideReloadPage;

		//Registrando funções no escopo
		vm.sair = sair;
		vm.recarregarPagina = recarregarPagina;

		//Funções executadas ao iniciar o controlador
		$rootScope.$on('$stateChangeStart', function (toState) {
			vm.hideReloadPage = toState.hideReloadPage;
		});

		function recarregarPagina() {
			$state.go($state.current, {}, { reload: true });
		}

		// Declaração de funções
		function sair() {
			navigator.app.exitApp();
		};
	};

	angular.module('app').controller('AppController', AppController);
})();
