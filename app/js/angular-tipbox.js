(function(window, angular, undefined) {
	angular.module('tipbox', []).
		directive('cTipbox', function() {
			var boxTemplater = '<span class="symbol1">&#9670;</em><span class="symbol2">&#9670;</span> '
			return {
				restrict: 'E',
				transclude: true,
				template: boxTemplater,
				link: function(scope, element, attrs) {
					element.css({
						position: 'absolute',
						display: 'block',
						width: '200px',
						height: '200px',
						top: '20px',
						left: '200px',
						border: '1px solid black'
					});

					element.children('.symbol1 .symbol2').css({
						display: 'block',
						width: '30px',
						height: '16px',
						'font-size': '30px',
						overflow: 'hidden',
						'_position': 'relative',
						'margin-left': '10px'
					});
					element.children('.symbol1').css({
						'margin-top': '-16px',
						color: 'black',
					});
					element.children('symbol2').css({
						'margin-top': '-14px',
						color: 'white'
					});
				}
			};
		}).
		factory('option', [function() {

		}]);
})(window, window.angular);