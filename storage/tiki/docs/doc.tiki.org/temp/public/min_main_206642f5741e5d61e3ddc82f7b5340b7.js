/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
    [2] => lib/jquery_tiki/wikiplugin-annotation.js
)
 */

/* rank:60late - minify:disabled - adding raw file. lang/en/language.js */

/* rank:60late - minify:disabled - adding raw file. lib/captcha/captchalib.js */

/* rank:60late - minify:disabled - adding raw file. lib/jquery_tiki/wikiplugin-annotation.js */

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
/* rank:60late - minify:disabled - adding raw file. lib/jquery_tiki/wikiplugin-annotation.js */
/* (c) Copyright by authors of the Tiki Wiki CMS Groupware Project
 *
 * All Rights Reserved. See copyright.txt for details and a complete list of authors.
 * Licensed under the GNU LESSER GENERAL PUBLIC LICENSE. See license.txt for details.
 *
 *
 *
 * Include file for wikiplugin_annotation.php
 *
 */

(function ($) {

    $.fn.imageAnnotation = function (toCreate, showLinks) {

        var $container = this,
            containerId = $container.attr("id"),
            $editor = $container.find(".editor"),
            $list = $container.parent().find(".list-box"),
            editable = $editor.length > 0 && toCreate.length === 0,    // default to not edit if there are existing annotations
            containerOffset = $container.offset(),
            dirty = false;

        $(".minimize", $editor).click(function () {
            endEdit(false);
            return false;
        });

        $(".delete", $editor).click(function (event) {
            handleDelete();
            event.preventDefault();
            return false;
        });

        $("#" + containerId + "-editable").change(function () {
            editable = $(this).prop("checked");
            return false;
        }).prop("checked", editable);

        // events for the container, click and mousemove

        $container.click(function (event) {

            if (editable) {

                if (selected[containerId]) {
                    if (event.target.id == containerId)
                        endEdit(false);
                    return;
                }

                containerOffset = $(this).offset();    // reset the offset each time in case the DOM has changed

                if (!active) {

                    active = {
                        obj: null,
                        link: null,
                        x1: event.pageX - containerOffset.left,
                        x2: event.pageX - containerOffset.left,
                        y1: event.pageY - containerOffset.top,
                        y2: event.pageY - containerOffset.top,
                        value: 'New annotation',
                        target: ''
                    };

                    initAnnotation(active);
                    positionize(active);

                    dirty = true;

                } else {
                    active.y2 = event.pageY - containerOffset.top;
                    active.x2 = event.pageX - containerOffset.left;

                    positionize(active);

                    activateAnnotation(active);
                    beginEdit(event, active);

                    active = null;
                    serializeAnnotations(annotations);
                }
            } else {

            }

        }).mousemove(function (event) {

            if (active == null)
                return;

            containerOffset = $(this).offset();
            active.x2 = event.pageX - containerOffset.left;
            active.y2 = event.pageY - containerOffset.top;

            positionize(active);

        });

        // set up events on the popup form

        $("form", $editor).submit(function () {

            endEdit(true);
            return false;

        }).find("input, textarea").keyup(function (event) {

            if (event.keyCode == 27) {    // escape key
                endEdit(false);
            }
        });

        // submit event on the save form

        $("form.save-annotations", $container.parent()).submit(function () {

            if (selected[containerId]) {
                endEdit(true);
            }
            // saving
            dirty = false;

        });

        // helper functions //
        //////////////////////

        var active = null;
        var selected = {};
        var annotations = {};
        var nextid = 0;

        var initAnnotation = function (o) {

                o.obj = $("<div />").addClass("annotation")[0];

                $container.prepend(o.obj);
            },

            activateAnnotation = function (o) {
                var newone = false;

                if (!o.obj.id) {
                    o.id = o.obj.id = "annotation-" + nextid++;
                    annotations[o.id] = o;
                    o.cid = containerId;
                    newone = true;
                }

                var $obj = $(o.obj);
                var x1 = o.x1;
                var x2 = o.x2;
                var y1 = o.y1;
                var y2 = o.y2;

                o.x1 = Math.min(x1, x2);
                o.x2 = Math.max(x1, x2);
                o.y1 = Math.min(y1, y2);
                o.y2 = Math.max(y1, y2);

                var content = "<p>" + o.value.replace(/%%%/g, "<br>") + "</p>";

                if (showLinks && o.target) {
                    content += "<a href='" + o.target + "'>" + o.target + "</a>";
                }

                //$obj.popover('destroy');
                $obj.popover({
                        content: content,
                        trigger: "hover",
                        html: true,
                        delay: { "show": 0, "hide": 100 }    // need a small delay so you can roll over the popover
                    });


                if ($list.length && newone) {
                    var $div = $("<div class='annotation-link' />");
                    var $a = $("<a href='#'/>")    // link that goes below the image
                        .text(o.value.replace(/(.*)%%%.*/, "$1"))
                        .click(function (e) {
                            if (editable) {
                                beginEdit(e, o);
                            } else {
                                var offset = $(o.obj).offset();
                                offset.left -= 20;
                                offset.top -= 40;
                                $('html, body').animate({
                                    scrollTop: offset.top,
                                    scrollLeft: offset.left
                                });
                            }
                        })
                        .mouseover(function (e) {
                            highlight(o.id);
                        })
                        .mouseout(function (e) {
                            if (!selected[containerId] || selected[containerId].obj.id != o.id) unhighlight(o.id);
                        });

                    $div.append($a).appendTo($list);
                    o.link = $a[0];
                }

                o.obj.onmouseover = function (e) {
                    highlight(o.id);
                };
                o.obj.onmouseout = function (e) {
                    if (!selected[containerId] || selected[containerId].obj.id != o.id) unhighlight(o.id);
                };
                o.obj.onclick = function (e) {
                    if (editable) {
                        if (!active) beginEdit(e, o);
                    } else {
                        if (o.target) {
                            location.href = o.target;
                        }
                    }
                    return false;
                };
            },

            createAnnotation = function (o) {

                initAnnotation(o);
                activateAnnotation(o);
                positionize(o);
            },

            positionize = function (o) {
                o.obj.style.top = (Math.min(o.y1, o.y2)) + "px";
                o.obj.style.left = (Math.min(o.x1, o.x2)) + "px";
                o.obj.style.width = Math.abs(o.x1 - o.x2) + "px";
                o.obj.style.height = Math.abs(o.y1 - o.y2) + "px";
            },

            highlight = function (id) {
                var o = annotations[id];
                $(o.obj).addClass("selected");
            },

            unhighlight = function (id) {
                var o = annotations[id];
                $(o.obj).removeClass("selected");
            },

            beginEdit = function (event, o) {
                var $obj = $(o.obj),
                    pos = $obj.position(),
                    offset = $obj.offsetParent().offset();

                var left = pos.left,
                    formLeft = offset.left + left + $editor.outerWidth() - window.scrollX;

                if (formLeft > window.innerWidth) {
                    left += window.innerWidth - formLeft;
                }

                var top = pos.top + $obj.outerHeight(),
                    formTop = offset.top + top + $editor.outerHeight() - window.scrollY;

                if (formTop > window.innerHeight) {
                    top += window.innerHeight - formTop;
                }

                $("textarea[name=label]", $editor).val(o.value.replace(/%%%/g, "\n")).select().focus();
                $("input[name=link]", $editor).val(o.target);

                $editor.css({
                        top: top + "px",
                        left: left + "px",
                        zIndex: 1
                    })
                    .show();

                selected[containerId] = o;
                highlight(o.id);
            },

            endEdit = function (store) {
                var o = selected[containerId];
                selected[containerId] = null;

                if (store) {
                    var newValue = $("textarea[name=label]", $editor).val().replace(/\n/g, "%%%");

                    if (o.value != newValue || o.target != $("input[name=link]", $editor).val()) {
                        dirty = true;
                    }

                    o.value = newValue;
                    o.target = $("input[name=link]", $editor).val();
                    if ($list.length) {
                        o.link.innerHTML = o.value.replace(/%%%/g, "<br>");
                    }

                    serializeAnnotations(annotations);
                    activateAnnotation(o);
                }

                $editor.hide();

                unhighlight(o.id);

                return false;
            },

            handleDelete = function () {
                var o = selected[containerId];

                endEdit(false);

                o.obj.parentNode.removeChild(o.obj);
                if ($list.length) {
                    o.link.parentNode.removeChild(o.link);
                }
                annotations[o.id] = null;
                selected[containerId] = null;

                serializeAnnotations(annotations);
            },

            serializeAnnotations = function (data) {
                var row, str = "";

                for (var k in data) {
                    row = data[k];

                    if (row == null || row.cid != containerId || !data.hasOwnProperty(k)) {
                        continue;
                    }

                    str += "(" + (Math.round(row.x1)) + "," + (Math.round(row.y1)) + "),(" + (Math.round(row.x2)) + "," + (Math.round(row.y2)) + ") ";
                    str += row.value + " [" + row.target + "]\n";
                }

                $("#" + containerId + "-content").val(str);
            };

        // finally initialise the annotations

        for (var k = 0; k < toCreate.length; ++k) {

            createAnnotation(toCreate[k]);

            serializeAnnotations(annotations);
        }

        $(window).on("beforeunload", function () {
            if (dirty) {
                return tr("you have unsaved changes to your annotations, are you sure you want to leave this page wihtout saving?");
            }
        });


    };


})(jQuery);
