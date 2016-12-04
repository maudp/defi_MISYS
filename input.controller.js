(function () {
    'use strict';

    var app = angular.module('input-components', []);

    app.controller('InputCtrl', [ '$scope', function($scope){
    	var $ctrl = this;
        $scope.save = function(){
            alert($ctrl.key);
        }
	}]);
})();
