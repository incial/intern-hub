
(function ($) {
    "use strict";
    
    $.fn.backResponsiveMenu = function (options) {

        //Back default options
        var defaults = {
            resizeWidth: '991',
            animationSpeed: 'fast',
            accoridonExpAll: false
        };

        //Variables
        var options = $.extend(defaults, options),
            opt = options,
            $resizeWidth = opt.resizeWidth,
            $expandAll = opt.accoridonExpAll,
            $backmenu = $(this),
            $back_menu_style = $(this).attr('data-menu-style');

        // Initilizing        
        $backmenu.find('ul').addClass("sub-menu");
        $backmenu.find('li ul').parent().addClass('has-sub');
        $backmenu.find('.has-sub').prepend('<span class="arrow "></span>');
        if ($back_menu_style == 'accordion') { $(this).addClass('collapse'); }

        // Window resize on menu breakpoint 
        if ($(window).innerWidth() <= $resizeWidth) {
            menuCollapse();
        }
        $(window).resize(function () {
            menuCollapse();
        });

        // Menu Toggle
        function menuCollapse() {
            var w = $(window).innerWidth();
            if (w <= $resizeWidth) {
                $backmenu.find('li.menu-active').removeClass('menu-active');
                $backmenu.find('ul.slide').removeClass('slide').removeAttr('style');
                $backmenu.addClass('collapse hide-menu');
                $backmenu.attr('data-menu-style');
                $('.menu-toggle').show();
            } else {
                $backmenu.attr('data-menu-style', $back_menu_style);
                $backmenu.removeClass('collapse hide-menu').removeAttr('style');
                $('.menu-toggle').show();
                if ($backmenu.attr('data-menu-style') == 'accordion') {
                    $backmenu.addClass('collapse');
                    return;
                }
                $backmenu.find('li.menu-active').removeClass('menu-active');
                $backmenu.find('ul.slide').removeClass('slide').removeAttr('style');
            }
        }

        //ToggleBtn Click
        $('#menu-btn').on('click', function (e) {
            $backmenu.slideToggle().toggleClass('hide-menu');
        });


        // Main function 
        return this.each(function () {
            // Function for Horizontal menu on mouseenter
            $backmenu.on('mouseover', '> li a', function () {
                if ($backmenu.hasClass('collapse') === true) {
                    return false;
                }
              
                $(this).parent('li').siblings().children('.sub-menu').slideUp();
                $(this).parent().addClass('menu-active').children('.sub-menu').slideDown();
                return;
            });

            $backmenu.on('mouseleave', 'li', function () {
                if ($backmenu.hasClass('collapse') === true) {
                    return false;
                }
                $(this).off('click', 'li');
                $(this).removeClass('menu-active');
                $(this).children('ul.sub-menu').slideUp().removeClass('slide');
                return;
            });
            //End of Horizontal menu function

            // Function for Vertical/Responsive Menu on mouse click
            $backmenu.on('click', '> li .arrow', function () {
                if ($backmenu.hasClass('collapse') === false) {
                    //return false;
                }
                $(this).off('mouseover', '> li .arrow');
                if ($(this).parent().hasClass('menu-active')) {
                    $(this).parent().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().removeClass('menu-active');
                } else {
                    if ($expandAll == true) {
                        $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
                        return;
                    }
                    $(this).parent().siblings().removeClass('menu-active');
                    $(this).parent('li').siblings().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
                }
            });

            $backmenu.on('click', '> li a.hash', function () {
                if ($backmenu.hasClass('collapse') === false) {
                    //return false;
                }
                $(this).off('mouseover', '> li a.hash');
                if ($(this).parent().hasClass('menu-active')) {
                    $(this).parent().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().removeClass('menu-active');
                } else {
                    if ($expandAll == true) {
                        $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
                        return;
                    }
                    $(this).parent().siblings().removeClass('menu-active');
                    $(this).parent('li').siblings().children('.sub-menu').slideUp().removeClass('slide');
                    $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
                }
            });


            //Screen Auto Left Right Dropdown            
            $backmenu.on('mouseover', 'li', function () {
                if ($('ul', this).length) {
                    var elm = $('ul:first', this);
                    var off = elm.offset();
                    var l = off.left;
                    var w = elm.width();                    
                    var docW = $("body").width();
                    var isEntirelyVisible = (l + w <= docW);
                    if (!isEntirelyVisible) {
                        $(this).addClass('edge');
                    }
                }
            });
                                           
            //Hash Anchor
            $('.react-menus li a').each(function(){
               var href = $(this).attr("href");
               if(href == "#"){
                   $(this).addClass('hash');
               }else{
                   $(this).removeClass('hash');
               }
            });               

            //End of responsive menu function
        });
        //End of Main function
    }
})(jQuery);