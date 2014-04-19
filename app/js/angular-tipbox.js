(function(window, angular, undefined) {
	angular.module('tipbox', []).
		directive('cTipbox', function() {
			var boxTemplater = '<span style="display:block;width:30px;height:16px;font-size:30px;overflow:hidden;position:relative;margin-left:10px;margin-top:-15px;color:black">&#9670;</span> \
			                    <span style="display:block;width:30px;height:16px;font-size:30px;overflow:hidden;position:relative;margin-left:10px;margin-top:-14px;color:white">&#9670;</span> \
			                    <div ng-transclude></div>';
			return {
				restrict: 'E',
				transclude: true,
				template: boxTemplater,
				link: function(scope, element, attrs) {
					console.log(element)
					element.css({
						position: 'absolute',
						display: 'block',
						width: '200px',
						height: '200px',
						top: '20px',
						left: '200px',
						border: '1px solid black',
						'border-radius': '10px',
						'-moz-border-radius':'25px',
						'box-shadow': '2px 2px 3px #aaaaaa',
						'-moz-box-shadow': '2px 2px 3px #aaaaaa'
					});

					//element.find('symbol1')
				}
			};
		}).
		factory('option', [function() {

		}]);
})(window, window.angular);