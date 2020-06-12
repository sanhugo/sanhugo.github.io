/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Years=[];
var Events=[];
var year=0;
var D=new Date();
var month=D.getMonth()+1;
var day=D.getDate();
var watch=month+"-"+day;
if ((month/10)<1) watch="0"+watch;
$(function ()
{
    //console.log(watch);
    $.getJSON("dates.json",addDate);
    /*$("#genre").change(function ()
    {
      d=$("#genre").val();
      if (d=="0")
      {
          $("[name='artist']").prop('disabled', true);
      }
      else 
      {
          $("[name = artist]").prop("disabled", false);
          $("[name = artist]").empty();
          $.getJSON("composers.json",addToList);
      }
    });*/
});
function addDate(json)
    {
        //console.log(json);
        $(json).each(function (key,data)
        {
            if ($(this).attr("date")===watch)
            {
            //console.log(key);
            //console.log(data);            
            $(data.events).each(function (index)
            {
                Years[index]=$(this).attr("year");
                //console.log($(this).attr("year"));
                Events[index]=$(this).attr("event");
            });}
        });
        var p=parseInt(Math.random()*3);
        watch="в "+Years[p]+" году "+Events[p]+".";
        $('#addition').append(watch);
}
