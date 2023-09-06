/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
    [2] => lib/simile_tiki/tiki-timeline.js
)
 */

/* rank:60late - minify:disabled - adding raw file. lang/en/language.js */

/* rank:60late - minify:disabled - adding raw file. lib/captcha/captchalib.js */

/* rank:60late - minify:disabled - adding raw file. lib/simile_tiki/tiki-timeline.js */

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
/* rank:60late - minify:disabled - adding raw file. lib/simile_tiki/tiki-timeline.js */
// (c) Copyright by authors of the Tiki Wiki CMS Groupware Project
//
// All Rights Reserved. See copyright.txt for details and a complete list of authors.
// Licensed under the GNU LESSER GENERAL PUBLIC LICENSE. See license.txt for details.
// hook in timeline libs which need to be in the head - may have to alter headerlib to allow this to be done serverside.

(function() {
    Timeline_ajax_url = "vendor_bundled/vendor/simile_timeline/simile_timeline/timeline_ajax/simile-ajax-api.js";
    Timeline_urlPrefix = "vendor_bundled/vendor/simile_timeline/simile_timeline/timeline_js/";
    Timeline_parameters = "bundle=true";
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.language = "JavaScript";
    script.src = "vendor_bundled/vendor/simile_timeline/simile_timeline/timeline_js/timeline-api.js?bundle=true;";
    head.appendChild(script);
})();

// globals to track initialisation mainly

var ttlTimelineReady = false, ttlInitCount = 0, ttlTimeline;

/***
 * Set up Simile Timeline widget
 *
 * @param elementId        id of div to contain timeline
 * @param dataSource
 * @param scale1        timescale of top band (hour, day, week, month, year, decade, century)
 * @param scale2        optional lower band scale
 * @param band2_height
 */

function ttlInit( elementId, dataSource, scale1, scale2, band2_height ) {
    if (!$("#" + elementId).length) {
        return;
    }

    ajaxLoadingShow(elementId);

    if (typeof scale2 === 'undefined') {
        scale2 = '';
    }
    if (typeof band2_height === 'undefined') {
        band2_height = 30;
    }
    // wait for Timeline to be loaded
    if (ttlInitCount < 30 && (
            typeof window.SimileAjax === "undefined" ||
            typeof window.SimileAjax.loaded === "undefined" ||
            typeof window.Timeline === "undefined" ||
            typeof window.Timeline.createBandInfo === "undefined" ||
            typeof window.Timeline.DateTime === "undefined" ||
            typeof window.Timeline.GregorianDateLabeller === "undefined" ||
            typeof window.Timeline.GregorianDateLabeller.monthNames === "undefined" ||
            typeof window.Timeline.GregorianDateLabeller.getMonthName === "undefined" )) {

        if (typeof window.Timeline !== "undefined" && typeof window.Timeline.DateTime === "undefined" && typeof window.SimileAjax.DateTime !== "undefined") {
            window.Timeline.DateTime = window.SimileAjax.DateTime;
        }
        window.setTimeout( function() { ttlInit( elementId, dataSource, scale1, scale2 ); }, 1000);
        ttlInitCount++;
        return;
    } else {
        ttlTimelineReady = true;
    }

    if (!ttlTimelineReady) {    // just seems to need a little bit longer...
        location.replace(location.href);    // at least 10 secs - reload
        return;
    }

    // timeline finally loaded(?)
    window.SimileAjax.History.enabled = false;

    var ttl_eventSource = new Timeline.DefaultEventSource();
    ttl_eventSource.loadJSON(dataSource, ".");    // The data

    var bandInfos = [
        window.Timeline.createBandInfo({
            width:          scale2 === "" ? "100%" : (100 - band2_height) + "%",
            intervalUnit:   window.Timeline.DateTime[scale1.toUpperCase()],
            eventSource:    ttl_eventSource,
            intervalPixels: 100
        })
    ];
    if (scale2) {
        bandInfos.push(
            window.Timeline.createBandInfo({
                width:          band2_height + "%",
                intervalUnit:   window.Timeline.DateTime[scale2.toUpperCase()],
                eventSource:    ttl_eventSource,
                intervalPixels: 200,
                layout:            "overview"
            })
        );
        bandInfos[1].syncWith = 0;
        bandInfos[1].highlight = true;
        //bandInfos[1].eventPainter.setLayout(bandInfos[0].eventPainter.getLayout());
    }
    try {
        ttlTimeline = window.Timeline.create(document.getElementById(elementId), bandInfos);
    } catch (e) {
        var reloads = window.localStorage["timeline_reloads"];
        if (! reloads) {
            reloads = 0;
        }
        reloads++;
        if (reloads < 5) {
            window.localStorage["timeline_reloads"] = reloads;
            location.replace(location.href);
        } else {
            delete window.localStorage["timeline_reloads"];
            alert(tr("Timeline loading failed"));
            return;
        }
    }
    delete window.localStorage["timeline_reloads"];
    ajaxLoadingHide();
    ttlTimeline.layout(); // display the Timeline

}    // end ttlInit()

var ttlResizeTimerID = null;
$(window).resize( function () {
    if (ttlTimeline && ttlResizeTimerID == null) {
        ttlResizeTimerID = window.setTimeout(function() {
            ttlResizeTimerID = null;
            ttlTimeline.layout();
        }, 500);
    }
});

