(function () {
    'use strict';

    var app = angular.module('input-components');
    
    app.component('inputText', {
		templateUrl: 'input-text.html',
		controller: 'InputCtrl',
		bindings: {
			key: '@'
		}
	});
})();