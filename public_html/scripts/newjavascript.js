/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var d = 0; 
$.getJSON("loc.json", start);
function start(json) 
{ 
$(".a4").each(function(){ 
$(this).append("loc/"+json[d].name+".html");
d++;
});}