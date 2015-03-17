var jquery = require('jquery');
var angular = require('angular');

angular.module('bs-multi-selector', [])
	.directive('bsMultiSelector', function() {
		return {
			restrict: "E",
			transclude: true,
			link: function(scope, el, attr) {
			}
		}
	});
