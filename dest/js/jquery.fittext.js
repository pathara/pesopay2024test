!function(o){o.fn.fitText=function(t,n){var i=t||1,e=o.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=o(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(10*i),parseFloat(e.maxFontSize)),parseFloat(e.minFontSize)))};n(),o(window).on("resize.fittext orientationchange.fittext",n)})}}(jQuery);