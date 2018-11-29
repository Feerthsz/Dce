'use strict';
(function () {

    function ParceriasController() {
        var vm = this;
        //Inicialização de variáveis
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

        //Registrando funções no escopo

        //Funções executadas ao iniciar o controlador

        // Declaração de funções

    };
    // Registrando o controlador no módulo
    angular.module('app').controller('ParceriasController', ParceriasController);
})();
