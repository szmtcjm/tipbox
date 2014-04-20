(function(window, angular, undefined) {
	angular.module('tipbox', []).
	directive('cTipbox', function() {
		var boxTemplater = '<div style="position:relative"><tipbox><symbol1>&#9670;</symbol1><symbol2>&#9670;</symbol2></tipbox></div>';
		return {
			restrict: 'AE',
			transclude: true,
			template: boxTemplater,
			link: function(scope, iElement, iAttrs) {
				var height = tElement.css('height').replace(/[\d]+/, function(hi) {
					return parseInt(hi) + 15;
				});
				var width = tElement.css('width').replace(/[\d]+/, function(wi) {
					return parseInt(wi) / 3;
				});
				tElement.append(boxTemplater);
				iElement.find('tipbox').css({
					position: 'absolute',
					display: 'block',
					width: '200px',
					height: '200px',
					top: height,
					left: width,
					border: '1px solid black',
					'border-radius': '10px',
					'-moz-border-radius': '25px',
					'box-shadow': '2px 2px 3px #aaaaaa',
					'-moz-box-shadow': '2px 2px 3px #aaaaaa'
				});

				iElement.find('symbol1').css({
					display: 'block',
					width: '30px',
					height: '16px',
					'font-size': '29px',
					overflow: 'hidden',
					position: 'relative',
					'margin-left': '25%',
					'margin-top': '-15px',
					color: 'black'
				});
				iElement.find('symbol2').css({
					display: 'block',
					width: '30px',
					height: '16px',
					'font-size': '29px',
					overflow: 'hidden',
					position: 'relative',
					'margin-left': '25%',
					'margin-top': '-14px',
					color: 'white'
				});
			}
		};
	}).
	factory('option', [
		function() {

		}
	]);
})(window, window.angular);