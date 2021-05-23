// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random language to the page.
 */

/** Fetches the song lyrics from LyricsServlet and updates the page. */
(async function showSongLyrics() {
    // Send a request to /lyrics.
    const responseFromServer = await fetch('/lyrics');

    //Parse the response as JSON.
    const lyricsArray = await responseFromServer.json();
    const oneLyric = lyricsArray[Math.floor(Math.random() * lyricsArray.length)];
    $('#lyrics-container').innerText = oneLyric;
})
/** Script for tooltips */
/*(function($){
    $(document).ready(function(){
        $("a[title]").style_my_tooltips({
        tip_follows_cursor:true,
        tip_delay_time:0,
       tip_fade_speed:0,
        attribute:"title"});
    });
})(jQuery);*/

function updateTime(k) { //appending 0 before time elements if less than 10
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

window.onload=function(){
    //Load battery icon, volume icon, clock
    this.batteryIcon();
    this.volumeIcon();
    this.getClock();
    setInterval(getClock,1000);

    // Generate random language
    document.getElementById('generate-languages').addEventListener('click', () => {    
    const languages = ['java', 'python', 'javascript', 'asm', 'c', 'c++', 'swift', 'c#', 'typescript', 'objective c'];

    // Pick a language at random
    const language = languages[Math.floor(Math.random() * languages.length)];

    // Add it to the page
    languageContainer = document.getElementById('language-container');
    languageContainer.innerHTML = language;
});
}



/*
Random Image Script- By JavaScript Kit (http://www.javascriptkit.com)
Over 400+ free JavaScripts here!
Keep this notice intact please
*/
function volumeIcon(){
    
    var tbvol = ["up","down","off"];
                            
    var level=Math.floor(Math.random()*tbvol.length); //generate random volume level
    document.getElementsByClassName('tbvolume')[0].innerHTML = '<i class="fa fa-volume-'+tbvol[level]+'"></i>';
}
function batteryIcon(){
                            
    var battno = ["quarter","half","three-quarters","full"];
                            
    var level=Math.floor(Math.random()*battno.length);
    document.getElementsByClassName('tbbattery')[0].innerHTML = '<i class="fa fa-battery-'+battno[level]+'"></i>';
}

/** Script for time */
function getClock(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    min = updateTime(min);
    const clockBock = document.getElementById('clockbox');
    clockBock.innerHTML = hour + ":" + min + " " + midday;
}






/** Script for moving java */
$(document).ready(function(){
    $("#closesbimg1").click(function(){$("#sbimg1").fadeOut();}); /** closing sb image 1 **/
    $("#opensbimg1").click(function(){$("#sbimg1").fadeIn();}); /** opening sb image 1 **/
    $("#closesbimg2").click(function(){$("#sbimg2").fadeOut();}); /** closing sb image 2 **/
    $("#opensbimg2").click(function(){$("#sbimg2").fadeIn();}); /** opening sb image 2 **/
    $("#closesbimg3").click(function(){$("#sbimg3").fadeOut();}); /** closing sb image 3 **/
    $("#opensbimg3").click(function(){$("#sbimg3").fadeIn();}); /** opening sb image 3 **/
    $("#closesbimg4").click(function(){$("#sbimg4").fadeOut();}); /** closing sb image 4 **/
    $("#opensbimg4").click(function(){$("#sbimg4").fadeIn();}); /** opening sb image 4 **/
    $("#closesbimg5").click(function(){$("#sbimg5").fadeOut();}); /** closing sb image 5 **/
    $("#opensbimg5").click(function(){$("#sbimg5").fadeIn();}); /** opening sb image 5 **/
    $("#closearchivepop").click(function(){$("#archivepop").fadeOut();}); /** closing archive pop up **/
    $("#openarchivepop").click(function(){$("#archivepop").fadeIn();}); /** opening archive pop up **/
    $("#closeaboutpop").click(function(){$("#aboutpop").fadeOut();}); /** closing about pop up **/
    $("#openaboutpop").click(function(){$("#aboutpop").fadeIn();}); /** opening about pop up **/
    $("#closeaskboxpop").click(function(){$("#askboxpop").fadeOut();}); /** closing askbox pop up **/
    $("#openaskboxpop").click(function(){$("#askboxpop").fadeIn();}); /** opening askbox pop up **/
    $("#closeblogrollpop").click(function(){$("#blogrollpop").fadeOut();}); /** closing blogroll pop up **/
    $("#openblogrollpop").click(function(){$("#blogrollpop").fadeIn();}); /** opening blogroll pop up **/
    $("#closesticky1").click(function(){$("#sticky1").fadeOut();}); /** closing sticky1 **/
    $("#opensticky").click(function(){$("#sticky1").fadeIn();}); /** opening sticky1 **/
    $("#closesticky2").click(function(){$("#sticky2").fadeOut();}); /** closing sticky2 **/
    $("#opensticky").click(function(){$("#sticky2").fadeIn();}); /** opening sticky2 **/
    $("#closesticky3").click(function(){$("#sticky3").fadeOut();}); /** closing sticky3 **/
    $("#opensticky").click(function(){$("#sticky3").fadeIn();}); /** opening sticky3 **/
    $("#closecontentpop").click(function(){$("#contentpop").fadeOut();}); /** closing content pop up **/
    $("#opencontentpop").click(function(){$("#contentpop").fadeIn();}); /** opening conten tpop up **/
    
    $("#openpost1").click(function(){$("#postpop1").fadeIn();});
    $("#closepost1").click(function(){$("#postpop1").fadeOut();});
    $("#openpost2").click(function(){$("#postpop2").fadeIn();});
    $("#closepost2").click(function(){$("#postpop2").fadeOut();});
    $("#openpost3").click(function(){$("#postpop3").fadeIn();});
    $("#closepost3").click(function(){$("#postpop3").fadeOut();});
    $("#openpost4").click(function(){$("#postpop4").fadeIn();});
    $("#closepost4").click(function(){$("#postpop4").fadeOut();});
    $("#openpost5").click(function(){$("#postpop5").fadeIn();});
    $("#closepost5").click(function(){$("#postpop5").fadeOut();});
    $("#openpost6").click(function(){$("#postpop6").fadeIn();});
    $("#closepost6").click(function(){$("#postpop6").fadeOut();});
    $("#openpost7").click(function(){$("#postpop7").fadeIn();});
    $("#closepost7").click(function(){$("#postpop7").fadeOut();});
    $("#openpost8").click(function(){$("#postpop8").fadeIn();});
    $("#closepost8").click(function(){$("#postpop8").fadeOut();});
    $("#openpost9").click(function(){$("#postpop9").fadeIn();});
    $("#closepost9").click(function(){$("#postpop9").fadeOut();});
    $("#openpost10").click(function(){$("#postpop10").fadeIn();});
    $("#closepost10").click(function(){$("#postpop10").fadeOut();});
    $("#openpost11").click(function(){$("#postpop11").fadeIn();});
    $("#closepost11").click(function(){$("#postpop11").fadeOut();});
    $("#openpost12").click(function(){$("#postpop12").fadeIn();});
    $("#closepost12").click(function(){$("#postpop12").fadeOut();});
    $("#openpost13").click(function(){$("#postpop13").fadeIn();});
    $("#closepost13").click(function(){$("#postpop13").fadeOut();});
    $("#openpost14").click(function(){$("#postpop14").fadeIn();});
    $("#closepost14").click(function(){$("#postpop14").fadeOut();});
    $("#openpost15").click(function(){$("#postpop15").fadeIn();});
    $("#closepost15").click(function(){$("#postpop15").fadeOut();});
    
    $("#openpost1a").click(function(){$("#postpop1").fadeIn();});
    $("#openpost2a").click(function(){$("#postpop2").fadeIn();});
    $("#openpost3a").click(function(){$("#postpop3").fadeIn();});
    $("#openpost4a").click(function(){$("#postpop4").fadeIn();});
    $("#openpost5a").click(function(){$("#postpop5").fadeIn();});
    $("#openpost6a").click(function(){$("#postpop6").fadeIn();});
    $("#openpost7a").click(function(){$("#postpop7").fadeIn();});
    $("#openpost8a").click(function(){$("#postpop8").fadeIn();});
    $("#openpost9a").click(function(){$("#postpop9").fadeIn();});
    $("#openpost10a").click(function(){$("#postpop10").fadeIn();});
    $("#openpost11a").click(function(){$("#postpop11").fadeIn();});
    $("#openpost12a").click(function(){$("#postpop12").fadeIn();});
    $("#openpost13a").click(function(){$("#postpop13").fadeIn();});
    $("#openpost14a").click(function(){$("#postpop14").fadeIn();});
    $("#openpost15a").click(function(){$("#postpop15").fadeIn();});
});
 

/** Start drag script */
$(function() {
    $( "#sbimg1" ).draggable({ handle: "div.dragimg1" });
    $( "#sbimg2" ).draggable({ handle: "div.dragimg2" });
    $( "#sbimg3" ).draggable({ handle: "div.dragimg3" });
    $( "#sbimg4" ).draggable({ handle: "div.dragimg4" });
    $( "#sbimg5" ).draggable({ handle: "div.dragimg5" });
    $( "#archivepop" ).draggable({ handle: "div.dragarchive" });
    $( "#contentpop" ).draggable({ handle: "div.dragcontent" });
    $( "#aboutpop" ).draggable({ handle: "div.dragabout" });
    $( "#askboxpop" ).draggable({ handle: "div.dragaskbox" });
    $( "#blogrollpop" ).draggable({ handle: "div.dragblogroll" });
    $( ".shortcut" ).draggable({ grid: [ 100, 98 ] });
    $( "#sticky1" ).draggable({ handle: "div.dragsticky1" });
    $( "#sticky2" ).draggable({ handle: "div.dragsticky2" });
    $( "#sticky3" ).draggable({ handle: "div.dragsticky3" });
});