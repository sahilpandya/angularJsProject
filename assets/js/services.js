(function(){
	'use strict';
	
	angular.module('AppSecure')
		   .service('APIService',APIService);
	APIService.$inject = ['$http', '$q', '$rootScope'];

	function APIService($http, $q, $rootScope){
		var appSecureData = {};
		appSecureData.login = login;
		return appSecureData;

		function login() {

		}
	}
})();
