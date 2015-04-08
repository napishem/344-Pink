
function Slider2( element ) {
	this.el = document.querySelector( element );
	this.init();
}

Slider2.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( ".pagination--table a" );
		this.wrapper = this.el.querySelector( ".table__wrapper" );
		this.navigate();
	},
    navigate: function() {
		for ( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );
		}
	},
    slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a );
			var index = parseInt( a.getAttribute( "data-table" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".table__list:nth-child(" + index + ")" );
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
		},
		false);
	},

  setCurrentLink: function(link) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		link.className = "current";
		for ( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if ( cur !== link ) {
				cur.className = "";
			}
		}
	}
};
document.addEventListener("DOMContentLoaded", function() {
	var aSlider2 = new Slider2( ".table__slider" );
});
