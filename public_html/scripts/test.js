/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var d=0;
var e;
var que=[];
var answers=[];
var add=[];
var count;
$(function ()
{
    count=0;
    //console.log("I'm working!");
    $("#toStart").click(function()
    {
        window.location.href = "index.html";
    });
    $("#StartNew").click(function()
    {
        window.location.href = "tests.html";
    });
    $("#toRead").click(function()
    {
        window.location.href = "content-page.html";
    });
    $("#jazz").click(function()
    {        
        $.getJSON("test_jazz.json",StartTest);
        $(GiveQuestions);
    });
    $("#classic").click(function()
    {        
        $.getJSON("test_classic.json",StartTest);
        $(GiveQuestions);
    });
    $("#rock").click(function()
    {        
        $.getJSON("test_rock.json",StartTest);
        $(GiveQuestions);
    });
    $(".answers").change(function()
    {
        $(".answers").each(function()
        {
            $(this).find("[type='radio']").prop("disabled",true);
        });
        var value=$(this).find("[type='radio']").val();
    if (value==add[d]) 
    {
        count++;
        $(this).css({"background-color":"green"});        
    }
    else 
    {
        $(this).css({"background-color":"#FF0040"});
        $(".answers").eq(add[d]).css({"background-color":"green"});
    }
    $(this).find(".add").append(answers[d][value].add+".");
    $("#next").css({"visibility":"visible"});
    });
    $("#next").click(function()
    {
        if (d<answers.length-1)
        {
        $(".answers").each(function()
        {
            $(this).find("[type='radio']").prop("disabled",false);
            $(this).value=0;
            $(this).css({"background-color":"purple"});
            $(this).find(".text").empty();
            $(this).find(".add").empty();
        });
        $("#number").empty();
        $("#question").empty();
        $("#next").css({"visibility":"hidden"});
        d++;
        $(GiveQuestions);
        }
        else
        {
            $("#number").css({"display":"none"});
    $("#question").css({"display":"none"});
    $(".answers").css({"display":"none"});
    $("#next").css({"display":"none"});
    $("#workplace").css(
            {
                "display":"block",
                "text-align":"center"
            }
            );
    $("#workplace").append("<p></p>");
    $("#workplace").find("p").css({
                "color":"white",
                "font-size":"20pt",
                "margin-top":"100px"
    });
    if (count==1) $("#workplace").find("p").text("Вы набрали "+count+" балл!");
    else if (count==5) $("#workplace").find("p").text("Вы набрали "+count+" баллов!");
    else $("#workplace").find("p").text("Вы набрали "+count+" балла!");
        }
    });
});
function StartTest(json)
{
   // //console.log(json);
    $(".selection").each(function ()
    {
        $(this).remove();
    });
    e=0;
    $(json).each(function(key,data)
    {
        
        que[d]=data.que;
        answers[d]=data.answers;        
        d++;
        e=0;
    }); 
    //console.log(que);
    d=0;
    e=0;
    $("#workplace").css({"flex-flow":"column","align-items":"center","justify-content":"space-between"});
    $("#number").css({"display":"block"});
    $("#question").css({"display":"block"});
    $(".answers").css({"display":"block"});
    $("#next").css({"display":"block"});
}
function GiveQuestions()
{
    $("#number").empty();
    $("#number").append("Вопрос "+(d+1)+" из "+que.length+".");
    $("#question").append(que[d]);
    e=0;
    $(".answers").each(function()
    {        
        $(this).find(".text").append(answers[d][e].ans);
        $(this).find("[type='radio']").prop("checked",false);
        ////console.log(answers[d][e].sign);
        if (answers[d][e].sign==true) {add[d]=e;/*//console.log(add[d]);*/}        
        $(this).find("[type='radio']").val(e);
        ////console.log($(this).find("[type='radio']").val());
        e++;
    });    
}