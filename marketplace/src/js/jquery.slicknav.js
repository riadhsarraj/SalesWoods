(function ($, document, window) {
    var
    // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            appendTo: '',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: true,
            removeClasses: false,
            removeStyles: false,
            brand: '',
            animations: 'jquery',
            init: function () {},
            beforeOpen: function () {},
            beforeClose: function () {},
            afterOpen: function () {},
            afterClose: function () {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav',

        Keyboard = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
        };

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        // Don't remove IDs by default if duplicate is false
        if (!this.settings.duplicate && !options.hasOwnProperty("removeIds")) {
          this.settings.removeIds = false;
        }

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
        } else {
            $this.mobileNav = menu;
        }

        // remove IDs if set
        if (settings.removeIds) {
          $this.mobileNav.removeAttr('id');
          $this.mobileNav.find('*').each(function (i, e) {
              $(e).removeAttr('id');
          });
        }

        // remove classes if set
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr('class');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('class');
            });
        }

        // remove styles if set
        if (settings.removeStyles) {
            $this.mobileNav.removeAttr('style');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('style');
            });
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr('class', prefix + '_nav');
        menuBar = $('<div class="' + prefix + '_menu"></div>');
		if (settings.brand !== '') {
			var brand = $('<div class="' + prefix + '_brand">'+settings.brand+'</div>');
			$(menuBar).append(brand);
		}
        $this.btn = $( 
            ['<' + settings.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">',
                '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                '<span class="' + iconClass + '">',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                '</span>',
            '</' + settings.parentTag + '>']
            .join('')
        );
        $(menuBar).append($this.btn);
        if(settings.appendTo !== '') {
            $(settings.appendTo).append(menuBar);
        } else {
            $(settings.prependTo).prepend(menuBar);
        }
        menuBar.append($this.mobileNav);

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find('li');
        $(items).each(function () {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                $(a).each(function () {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $( 
                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>' 
                );

                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix+'_row');
                } else
                    $(nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

                if (!settings.showChildren) {
                    item.addClass(prefix+'_collapsed');
                } else {
                    item.addClass(prefix+'_open');
                }

                item.addClass(prefix+'_parent');

                var arrowElement = $('<span class="'+prefix+'_arrow">'+(settings.showChildren?settings.openedSymbol:settings.closedSymbol)+'</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                $(nodes).last().after(arrowElement);
            } else if ( item.children().length === 0) {
                 item.addClass(prefix+'_txtnode');
            }

            item.children('a').attr('role', 'menuitem').click(function(e){
                // Replace `event` with `e`
                if (settings.closeOnClick && !$(e.target).parent().closest('li').hasClass(prefix+'_parent')) {
                        $($this.btn).click();
                    }
            });

            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (e) {
                    $($this.btn).click();
                });

                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(e){
                    $($this.btn).click();
                });
            }
        });

        $(items).each(function () {
            var data = $(this).data('menu');
            if (!settings.showChildren){
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);
        $this.mobileNav.attr('role','menu');

        $(document).mousedown(function(){
            $this._outlines(false);
        });

        $(document).keyup(function(){
            $this._outlines(true);
        });

        $($this.btn).click(function (e) {
            e.preventDefault();
            $this._menuToggle();
        });

        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        $($this.btn).keydown(function (e) {
            var ev = e || event;

            switch(ev.keyCode) {
                case Keyboard.ENTER:
                case Keyboard.SPACE:
                case Keyboard.DOWN:
                    e.preventDefault();
                    if (ev.keyCode !== Keyboard.DOWN || !$($this.btn).hasClass(prefix+'_open')){
                        $this._menuToggle();
                    }
                    
                    $($this.btn).next().find('[role="menuitem"]').first().focus();
                    break;
            }
        });

        $this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
            var ev = e || event;

            switch(ev.keyCode) {
                case Keyboard.ENTER:
                    e.preventDefault();
                    $this._itemClick($(e.target));
                    break;
                case Keyboard.RIGHT:
                    e.preventDefault();
                    if ($(e.target).parent().hasClass(prefix+'_collapsed')) {
                        $this._itemClick($(e.target));
                    }
                    $(e.target).next().find('[role="menuitem"]').first().focus();
                    break;
            }
        });

        $this.mobileNav.on('keydown', '[role="menuitem"]', function(e) {
            var ev = e || event;

            switch(ev.keyCode){
                case Keyboard.DOWN:
                    e.preventDefault();
                    var allItems = $(e.target).parent().parent().children().children('[role="menuitem"]:visible');
                    var idx = allItems.index( e.target );
                    var nextIdx = idx + 1;
                    if (allItems.length <= nextIdx) {
                        nextIdx = 0;
                    }
                    allItems.eq(nextIdx).focus();
                    break;
                case Keyboard.UP:
                    e.preventDefault();
                    var allItems = $(e.target).parent().parent().children().children('[role="menuitem"]:visible');
                    var idx = allItems.index( e.target );
                    var prevIdx = idx - 1;
                    if (prevIdx === -1) {
                        prevIdx = allItems.length - 1;
                    }
                    allItems.eq(prevIdx).focus();
                    break;
            }
        });
    };

    Plugin.prototype._menuToggle = function () {
        var $this = this,
            settings = this.settings,
            duration = settings.duration;
        var menuBar = $($this.btn).next();

        if (menuBar.hasClass(prefix+'_open')) {
            $this._visibilityToggle(menuBar, 'close', false);
            $($this.btn).removeClass(prefix + '_open');
        } else {
            $this._visibilityToggle(menuBar, 'open', true);
            $($this.btn).addClass(prefix + '_open');
        }

        settings.afterOpen.call($this);
    };

    Plugin.prototype._visibilityToggle = function ($menu, status, closed, direction, init) {
        var $this = this,
            settings = $this.settings,
            duration = settings.duration;

        if (!status) {
            if (closed && settings.closeOnClick) {
                if (direction === 'init') {
                    return;
                } else {
                    $menu.removeClass(prefix+'_open').stop(true,true).slideUp(duration, function () {
                        settings.afterClose.call($this);
                    });
                }
            } else {
                if (closed) {
                    $menu.removeClass(prefix+'_open').stop(true,true).slideUp(duration);
                } else {
                    if (init){
                        $menu.removeClass(prefix+'_open').slideDown(duration);
                    }
                }
            }
        }
    };

    Plugin.prototype._itemClick = function (item) {
        var $this = this;

        if (item.hasClass(prefix+'_parent')) {
            item.toggleClass(prefix + '_collapsed');
        } else {
            item.closest('.'+prefix+'_parent').find('.'+prefix+'_collapsed').first().toggleClass(prefix+'_collapsed');
        }
    };

    Plugin.prototype._outlines = function (enabled) {
        var $this = this;
        var outlineElement = $this.mobileNav.find('a,button');
        if (enabled) {
            outlineElement.attr('style','outline:none');
        }
    };

    $.fn[ mobileMenu ] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + mobileMenu)) {
                $.data(this, 'plugin_' + mobileMenu, new Plugin(this, options));
            }
        });
    };
})( jQuery, document, window );
