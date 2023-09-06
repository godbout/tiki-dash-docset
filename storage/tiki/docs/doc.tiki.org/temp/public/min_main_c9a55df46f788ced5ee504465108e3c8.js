/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
    [2] => lib/jquery_tiki/autoToc.js
)
 */

/* rank:60late - minify:disabled - adding raw file. lang/en/language.js */

/* rank:60late - minify:disabled - adding raw file. lib/captcha/captchalib.js */

/* rank:60late - minify:disabled - adding raw file. lib/jquery_tiki/autoToc.js */

/**** end overview of included js files *****/
;
/* rank:60late - minify:disabled - adding raw file. lang/en/language.js */
/*
 * JavaScript translation definition
 * Example to help translation of some English strings in some js files
 *
 *
 */

lang = {
//    "Very Secure" : "Very Secure",
//    "Secure" : "Secure",
//    "Very Strong" : "Very Strong",
//    "Strong" : "Strong",
//    "Average" : "Average",
//    "Weak" : "Weak",
//    "Very Weak" : "Very Weak",
//    "Strength" : "Strength",
//    "Valid User Name" : "Valid User Name",
//    "Passwords match" : "Passwords match",
//    "Valid Email" : "Valid Email",
//    "Close" : "Close",
//    "Submit" : "Submit",
//    "Insert" : "Insert",
//    "Replace" : "Replace",
//    "Match" : "Match",
//    "Do not match" : "Do not match",
//    "Advanced options" : "Advanced options",
//    "Pick a file." : "Pick a file."
//    "Add Field" : "Add Field",
//    "Edit Field" : "Edit Field",
//    "Removing the field will result in data loss. Are you sure?" : "Removing the field will result in data loss. Are you sure?",
//    "Save" : "Save",
//    "Cancel" : "Cancel",
//  "Delete" : "Delete",
//    "Unassign module" : "Unassign module",
//    "Edit module" : "Edit module",
//    "Edit module:" : "Edit module:",
//    "Favorite" : "Favorite",
//    "What address are you looking for?" : "What address are you looking for?",
//    "Filter:" : "Filter:",
//    "Please enter a page name" : "Please enter a page name",
//    "Change Highlighter" : "Change Highlighter",
//    "Toggle Highlighter" : "Toggle Highlighter",
//    "Are you sure you want to unassign this module?" : "Are you sure you want to unassign this module?"
    // remember the IE does not support ending comma on last item
};
;
/* rank:60late - minify:disabled - adding raw file. lib/captcha/captchalib.js */
function generateCaptcha() {
    jQuery('#captchaImg').attr('src', 'img/spinner.gif').show();
    jQuery('body').css('cursor', 'progress');
    jQuery.ajax({
        url: 'antibot.php',
        dataType: 'json',
        success: function(data) {
            jQuery('#captchaImg').attr('src', data.captchaImgPath);
            jQuery('#captchaId').attr('value', data.captchaId);
            jQuery('body').css('cursor', 'auto');
        }
    });
    $("#antibotcode").focus();
    return false;
}
;
/* rank:60late - minify:disabled - adding raw file. lib/jquery_tiki/autoToc.js */
/* (c) Copyright by authors of the Tiki Wiki CMS Groupware Project
 *
 * All Rights Reserved. See copyright.txt for details and a complete list of authors.
 * Licensed under the GNU LESSER GENERAL PUBLIC LICENSE. See license.txt for details.
 *
 *
 *
 * Rewritten for bootstrap tiki 15.x 2015-2016
 * Based on work by Jobi Carter keacarterdev@gmail.com
 */

$.genAutoToc = function () {

    var $page = $("body"),
    $top = $("#top"), $row;
    var $output = $output || "#autotoc";
    var toc = "";
    var start = 0;

    var toc_offset = parseInt(jqueryTiki.autoToc_offset);
    var toc_pos = jqueryTiki.autoToc_pos;
    var toc_mode = jqueryTiki.autoToc_inline;
    var toc_title = "";
    var toc_levels = false;
    var toc_tabs = jqueryTiki.autoToc_tabs;
    var toc_tabset_names = "";
    var toc_tabset_panes = "";

    if (typeof jqueryAutoToc !== "undefined") {
        toc_offset = parseInt(jqueryAutoToc.plugin_autoToc_offset);
        toc_pos = jqueryAutoToc.plugin_autoToc_pos;
        toc_mode = jqueryAutoToc.plugin_autoToc_mode;
        toc_title = jqueryAutoToc.plugin_autoToc_title !== 'undefined' ? "<h3>"+ jqueryAutoToc.plugin_autoToc_title +"</h3>" : "";
        toc_tabs = jqueryAutoToc.plugin_autoToc_tabs;
        toc_tabset_names = jqueryAutoToc.plugin_autoToc_tabset_names;
        toc_tabset_panes = jqueryAutoToc.plugin_autoToc_tabset_panes;
        if (jqueryAutoToc.plugin_autoToc_levels != null
            && jqueryAutoToc.plugin_autoToc_levels !== 'undefined') {
            toc_levels = true;
        }
    }
    else {
        $('<style type="text/css">body{position:relative}#autotoc .nav>li>a{display:block;padding:4px 20px;font-size:0.9rem;font-weight:500}#autotoc .nav>li>a:hover,#autotoc .nav>li>a:focus{padding-left:19px;text-decoration:none;background-color:transparent;border-left:1px solid #0075ff}#autotoc .nav-link.active,#autotoc .nav-link.active:hover,#autotoc .nav-link.active:focus{/*padding-left:30px;font-weight:700;*/background-color:transparent;border-left:2px solid #0075ff}#autotoc .nav-link+ul{display:none;padding-bottom:10px}#autotoc .nav .nav>li>a{padding-top:1px;padding-bottom:1px;padding-left:30px;font-size:0.8rem;font-weight:400}#autotoc .nav .nav>li>a:hover,#autotoc .nav .nav>li>a:focus{padding-left:29px}#autotoc .nav .nav>li>.active,#autotoc .nav .nav>li>.active:hover,#autotoc .nav .nav>li>.active:focus{padding-left:28px;font-weight:500}#autotoc .nav-link.active+ul{display:block}@media screen and (max-width:991px){.hidden{display:none!important}}</style>').appendTo('head');
    }

    //if a wiki page, and div and not printing

    if ($top.length && location.href.indexOf("tiki-print.php") == -1) {

        var selector = '#page-data';
        var container = document.querySelector(container) || document.querySelector(selector);
        var children = container.children;

        if (toc_tabs === 'yes') {

            //Show only headers of tabs and sections setted in the plugin
            if (typeof jqueryAutoToc !== "undefined" && toc_tabset_names !== "") {

                toc_tabset_names.forEach(tab_name => {
                    toc_tabset_panes.forEach(section =>{
                        selector = "#content"+tab_name+"-"+section;
                        var container = document.querySelector(selector);
                        if (container) {
                            subChildren = container.children;
                            children = Array.from(children).concat(Array.from(subChildren));
                        }
                    });
                });

            }

            //Show all headers of all tabs of all the tabs present on the page
            else {

                var tabs = document.querySelectorAll("#page-data .tab-content"); //Get all the tabs available in the page
                tabs.forEach(tab => {

                    var sections = tab.querySelectorAll(".tab-pane"); //Get all tab sections
                    sections.forEach(section => {
                        selector = "#"+section.id;
                        var container = document.querySelector(selector);
                        if (container) {
                            subChildren = container.children;
                            children = Array.from(children).concat(Array.from(subChildren));
                        }
                    });

                });
            }


        }



        if (countHeadings(children) > 0) {
            $row = $("<div class='row'/>");
            $container = $("<div class='container'/>");

            if (toc_pos === "left" || toc_pos === "top") {
                var $tocNav = $("<div id='all-toc' class='col-md-5 hidden sticky-top'/>");
                var $page_data = $("#page-data").addClass("col-md-7 clearfix");
                $('<style type="text/css">#autotoc .nav > li{max-width: 350px;}</style>').appendTo('head');
            }
            else if (toc_pos === "right") {
                var $tocNav = $("<div id='all-toc' class='col-md-4 hidden sticky-top'/>");
                var $page_data = $("#page-data").addClass("col-md-8 clearfix");
            }

            var $nav = $("<nav id='autotoc'>");

            //create object to store processed IDs.
            var processedId = {};

            //function to process header Id generation. If an ID which has been processed is generated again and passed in again, the id name will be incremented to id_[1*]
            function processId(id) {
                if (id in processedId) {
                    //if processed before
                    //iterate count for header with this ane
                    processedId[id] += 1;
                    //set the new id to id plus count for header
                    var newId = id + "_" + processedId[id];
                } else {
                    //if not processed before
                    //add to "dictionary' with count of 0
                    processedId[id] = 0;
                    //return id passed in
                    newId = id;
                }
                return newId;
            }

            if (toc_pos == 'page') {
                toc = toc_title != '' ? "<h3>"+ toc_title +"</h3>" : "";
            }

            for (var i = 0; i < children.length; i++) {
                var isHeading = children[i].nodeName.match(/^H\d+$/);
                if (isHeading) {
                    var level = children[i].nodeName.substr(1);

                    var headerText = (children[i].textContent);
                    //generate and set id if necessary (if element does not already have an id, create one)
                    var id = children[i].getAttribute("id");

                    if (!id) {
                        id = processId(headerText.replace(/\W/g, "_"));
                    } else {
                        id = id.replaceAll(":", "\\:").replace(".", "\\.").replace("#", "\\#");
                    }
                    //set the element's id to the constructed ID
                    children[i].setAttribute("id", id);
                    //construct the anchor URL with chars jquery doesn't like escaped
                    var url = "#" + id;

                    if (headerText) {
                        if (toc_levels) {
                            if (jqueryAutoToc.plugin_autoToc_levels.includes(level.toString())) {
                                if (level > start) {
                                    if (toc_pos == 'page') {
                                        toc += (new Array(level - start + 1)).join("<ul>");
                                    }
                                    else {
                                        toc += (new Array(level - start + 1)).join("<ul class='nav navbar-nav'>");
                                    }
                                } else if (level < start) {
                                    toc += (new Array(start - level + 1)).join('</li></ul>');
                                } else {
                                    toc += (new Array(start + 1)).join('</li>');
                                }
                                start = parseInt(level);
                                if (toc_pos == 'page') {
                                    toc += "<li><a href='" + url + "'>" + headerText + "</a>";
                                }
                                else {
                                    toc += "<li class><a class='nav-link' href='" + url + "'>" + headerText + "</a>";
                                }
                            }
                        }
                        else {
                            if (level > start) {
                                if (toc_pos == 'page') {
                                    toc += (new Array(level - start + 1)).join("<ul>");
                                }
                                else {
                                    toc += (new Array(level - start + 1)).join("<ul class='nav navbar-nav'>");
                                }
                            } else if (level < start) {
                                toc += (new Array(start - level + 1)).join('</li></ul>');
                            } else {
                                toc += (new Array(start + 1)).join('</li>');
                            }
                            start = parseInt(level);
                            if (toc_pos == 'page') {
                                toc += "<li><a href='" + url + "'>" + headerText + "</a>";
                            }
                            else {
                                toc += "<li class><a class='nav-link' href='" + url + "'>" + headerText + "</a>";
                            }
                        }
                    }
                }
            }
            if (start) {
                toc += (new Array(start + 1)).join('</ul>');
            }

            if (toc_pos == 'page') {
                $("#page-data").removeClass("col-md-8").addClass("col-md-12");
                document.querySelector($output).innerHTML += toc;
            }
            else {
                var fixed_height = 0;
                // append the $list
                if (!toc_mode) {
                    // build content
                    buildContent();

                    // parameter offset
                    $('<style type="text/css">.affix{top:' + toc_offset + 'px;}</style>').appendTo('head');
                    $(window).resize(function() {
                        var page = document.getElementById("page-data");
                        if (window.innerWidth <= 991) {
                            if (page.hasAttribute('class')) {
                                page.setAttribute("class", "col-md-12");
                            }
                        } else {
                            if (toc_pos === "left" || toc_pos === "top") {
                                page.setAttribute("class", "col-md-7");
                            }
                            else {
                                page.setAttribute("class", "col-md-8");
                            }
                        }
                        affix();
                    }).resize();

                    // trigger the bootstrap affix and scrollspy
                    controllSpy(toc_offset);

                    function affix() {
                        $(window).on('scroll', function (e) {
                            var scrollpos = $(window).scrollTop();
                            var offsetpos = $('#page-data').height() - $('#autotoc > .nav').height();
                            var top = $('#page-data').offset().top - (toc_offset + fixed_height);
                            var bottom = $('#page-data').offset().top + $('#page-data').height() - $('#autotoc > .nav').height() - (toc_offset + fixed_height);

                            if (scrollpos > top) {
                                if (scrollpos > bottom) {
                                    $('#autotoc > .nav').removeClass('affix').addClass('affix-bottom').css('top', offsetpos + 'px');
                                } else {
                                    $('#autotoc > .nav').addClass('affix').removeClass('affix-bottom').css('top', '');
                                }
                            } else {
                                $('#autotoc > .nav').removeClass('affix');
                            }

                            $('#autotoc .nav li a').each(function() {
                                if ( $(this).hasClass('active') ) {
                                    $(this).parents('li').addClass('open');
                                } else {
                                    $(this).parentsUntil('.navbar-nav .nav').removeClass('open');
                                }
                            });
                        });
                    }
                } else {
                    // build content
                    buildContent();
                    // parameter offset
                    $('<style type="text/css">#all-toc{top:' + toc_offset + 'px;}</style>').appendTo('head');
                    $('#all-toc').height($('#page-data').height() - 2000);
                    controllSpy(toc_offset);
                }

                function controllSpy (toc_offset) {
                    var fixed_height = 0;
                    $page.scrollspy({
                        target: "#autotoc",
                        offset: (toc_offset + fixed_height)
                    });
                }

                function buildContent() {
                    $nav.prepend(toc);
                    if (toc_pos === "left" || toc_pos === "top") {
                        $("#page-data").removeClass("col-md-8").addClass("col-md-7");
                        $("#all-toc").removeClass("col-md-4").addClass("col-md-5");
                        $tocNav.prepend($nav);
                        $page_data.prependTo($row);
                        $tocNav.prependTo($row);
                    } else {
                        $tocNav.prepend($nav);
                        $tocNav.prependTo($row);
                        $page_data.prependTo($row);
                    }
                    $row.prependTo($top);
                }
            }
        }

    }

};

function countHeadings(children) {
    var count = 0;
    for (var i = 0; i < children.length; i++) {
        var isHeading = children[i].nodeName.match(/^H\d+$/);
        if (isHeading) {
            count++;
        }
    }
    return count;
}

$(document).ready(function () {
    $.genAutoToc();
    $('#autotoc a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        if (typeof parentNode !== 'undefined') {
            var parent = document.querySelector(target).parentNode;
            $('.tabs a[href="#'+parent.id+'"]').tab('show');
        }
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {});
    });
});