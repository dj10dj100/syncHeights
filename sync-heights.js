(function ($) {

    var methods = {
        var self = this;
        update: function (options) {
            if (!self.options && options) {
                self.options = options;
            }
            var heightArray = [];
            $(this).height({})
            $(this).each(function (index, Element) {

                $(Element).height('auto');
                var boxHeight = $(Element).outerHeight();
                heightArray.push(boxHeight);
            });

            var largestHeight = Math.max.apply(null, heightArray);
            $(this).css('height', largestHeight);

        }
    };

    $.fn.syncHeights = function (methodOrOptions) {

        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.update.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on dans syncheights');
        }
    };

})(jQuery);
