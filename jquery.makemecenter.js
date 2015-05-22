/*!
	 @package makemecenter - jQuery Position Elements Centers Vertically and Horizontally Plugin
	 @version version: 0.1.0
	 @url https://github.com/tenbullstech/jquery-make-me-center
	 @documentation Examples and Documentation - https://github.com/tenbullstech/jquery-make-me-center
	 @contributors https://github.com/tenbullstech/jquery-make-me-center/graphs/contributors
	 @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
	 @date Friday, May 22, 2015 11:36 AM 
	 @author Aman Bansal

	 ** If you found bug, please contact me via email <tenbulls007@gmail.com>
 */

(function($){
	$.fn.makemecenter = function(options) {
		var settings = $.extend({
			horizontal : true,
			vertical : true,
			parentRelative : window,
			complete : null,
			marginLeft : null,
			marginRight : null,
			marginTop : null,
			paddingLeft : null,
			paddingRight : null,
			paddingTop : null,
			paddingBottom : null,

		},options)

		return this.each(function(){
			var $this   = $(this); // store the object

			var adjustposition = function () {
				var parent = $(settings.parentRelative);
				var parentHeight = $(parent).innerHeight();
				var parentWidth = $(parent).innerWidth();
				
				parent.css({
					position : "relative"
				});


				// Clear Element Margin and Padding to calculate actual dimensions
				$this.css({
					margin : "",
					padding : "",
					display : "inline-block",
				});

				var contentWidth = $this.width();  // Getting applied element width before any margin and padding

				$this.css({
					position : "absolute",
					"margin-left" : settings.marginLeft,
					"margin-right" : settings.marginRight,
					"padding-left" : settings.paddingLeft,
					"padding-right" : settings.paddingRight,
					"padding-top" : settings.paddingTop,
					"padding-bottom" : settings.paddingBottom,
				});


				// Adjust Horizonal Element Position
				if (settings.horizontal) {
					var set_left = (parentWidth - contentWidth- settings.marginLeft - settings.marginRight - settings.paddingLeft - settings.paddingRight) / 2;

					// if set_left is negative it means element is greater than or equal to parent width so set it from left 0 and prevent it from going -ve
					if (set_left <= 0) {
						 set_left = 0;
					} 

					$this.css({
						left : set_left,
					});
				}
				
				// Adjust Vertical Element Position
				var contentHeight = $this.height();  // Getting element Height after Width , margin and padding becasuse they affect height so getting height only after applying these prop

				if (settings.vertical) {
					// Padding does count on height for eg. if we have height = 200 and padding 10px top and bottom but height will count 200 always not 220
					var set_top = (parentHeight - contentHeight - settings.paddingTop - settings.paddingBottom) / 2;
					$this.css({
						top : set_top,
						"margin-top" : settings.marginTop,
						"margin-bottom" : 0,
					});
				}
			}
			
			$(window).resize(function () {
				adjustposition();
			});

			// Call once to set after window loads.
			$(window).load(function () {
				adjustposition();
			});

			if ($.isFunction(settings.complete)) {
				return settings.complete.call(this);
			}
		
		});
		
	}
}(jQuery))