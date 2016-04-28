(function(){
	'use strict';

	angular.module('AppSecure').controller('MainController', MainController);
    MainController.$inject = ['$scope','APIService','notify','$rootScope'];

    angular.module('AppSecure').controller('SignUpController', SignUpController);
    SignUpController.$inject = ['UserService', '$location','$scope','APIService','notify','$rootScope'];

    angular.module('AppSecure').controller('SettingsController', SettingsController);
    SettingsController.$inject = ['$scope','APIService','notify','$rootScope'];

    function MainController($scope,APIService,notify,$rootScope){
    	if($rootScope.isLogin == undefined) {
    		$rootScope.isLogin = false;	
    	}
		$scope.currentTab = '';

		$scope.onClickTab = function (tabUrl, id, $event) {
			if($event !== undefined) {
				$event.preventDefault();
			}
			$scope.currentTab = tabUrl;
			if(id !== undefined) {
				$(document.body).animate({
					'scrollTop':   $(id).offset().top
				}, 800);
			}
		};
		$rootScope.isLogedin = function() {
			console.log($scope.loginForm.email);
			console.log($scope.loginForm.password);
			$('#logIn').modal('hide');
			$rootScope.isLogin = true;
			console.log($rootScope.isLogin);
		};        
    }

    function SignUpController(UserService,$location,$scope,APIService,notify,$rootScope){
    	$scope.currentTab = 'tab1';
		
		$scope.onClickTab = function (tabUrl) {
			$scope.currentTab = tabUrl;
		};

		$scope.isSignupAsCompany = function() {
			var name = $scope.asCompany.name;
			var email = $scope.asCompany.email;
			var password = $scope.asCompany.password;
		};
		$scope.isSignupAsResearch = function() {
            //$scope.dataLoading = true;
            $scope.user = [{
            	"fname": $scope.asResearcher.name,
            	"username": $scope.asResearcher.username,
            	"email": $scope.asResearcher.email,
            	"password": $scope.asResearcher.password
            }];
            UserService.Create($scope.user)
                .then(function (response) {
                    if (response.success) {
                        //FlashService.Success('Registration successful', true);
                        //$location.path('/login');
                        notify('successful');
                    } else {
                    	notify('has error');
                        //FlashService.Error(response.message);
                        //$scope.dataLoading = false;
                    }
                });
        };
    }

    function SettingsController($scope,APIService,notify,$rootScope){
    	$scope.showBankForm = false;
		$scope.tabs = [{
			title: 'Profile',
			url: 'profileForm'
			}, {
			title: 'Account',
			url: 'accountForm'
			}, {
			title: 'Payments',
			url: 'payments'
			},
			{
			title: 'Team',
			url: 'team'
			}
		];

		$scope.currentTab = 'profileForm';

		$scope.onClickTab = function (tabUrl) {
			$scope.currentTab = tabUrl;
		};

		$scope.isActiveTab = function(tabUrl) {
			return tabUrl == $scope.currentTab;
		};
		$scope.newObject = {};
		$scope.formFields = [
			{
				'fieldType': 'text',
				'name': 'acName',
				'title': 'Account Name',
				'validity': true
			},
			{
				'fieldType': 'number',
				'name': 'acNumber',
				'title': 'A/C Number',
				'validity': true
			},
			{
				'fieldType': 'text',
				'name': 'bankName',
				'title': 'Bank Name',
				'validity': true
			},
			{
				'fieldType': 'text',
				'name': 'ifscCode',
				'title': 'IFSC Code',
				'validity': true
			},
			{
				'fieldType': 'text',
				'name': 'panNumber',
				'title': 'PAN number',
				'validity': true
			}
		];
		$scope.showBankDetail = function() {
			$scope.showBankForm = true;
		}; 
    }
})();
