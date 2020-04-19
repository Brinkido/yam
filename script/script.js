var joueurunUns = $("J1-1s").val();
var joueurunDeux = $("J1-2s").val();
var joueurunSousTotal = parseInt(joueurunUns) + parseInt(joueurunDeux);



$(document).ready(function(){
  $(".1").click(click1x1)
  $(".2").click(click1x2)
  $(".3").click(click1x3)
  $(".4").click(click1x4)
  $(".5").click(click1x5)
  $(".0").click(click1x0)

  $("#soustotalJ1").val(joueurunSousTotal);

  $(".chiffres").dblclick(cancel)
  $(".pS, .gS, .F, .C, .Y, .nulos").dblclick(cancel)
  $(".zero").dblclick(cancelNulos)
  $(".1s, .2s, .3s, .4s, .5s,.0s").dblclick(cancelFoix)

  $(".1s").hide()
  $(".2s").hide()
  $(".3s").hide()
  $(".4s").hide()
  $(".5s").hide()
  $(".0s").hide()

  $(".pS").click(clickPs)
  $(".gS").click(clickGs)
  $(".F").click(clickF)
  $(".zero").click(clickX)
  $(".C").click(clickC)
  $(".Y").click(clickY)
});


function click1x1() {
  $(this).parent().hide()
  $(this).parent().prev("div").show()
  $(this).parent().prev("div").html( parseInt($(this).parent().prev("div").text()) *1 )
}

function click1x2() {
  $(this).parent().hide()
  $(this).parent().prev("div").show()
  $(this).parent().prev("div").html( parseInt($(this).parent().prev("div").text()) * 2 )
}

function click1x3() {
  $(this).parent().hide()
  $(this).parent().prev("div").show()
  $(this).parent().prev("div").html( parseInt($(this).parent().prev("div").text()) * 3 )
}

function click1x4() {
  $(this).parent().hide()
  $(this).parent().prev("div").show()
  $(this).parent().prev("div").html( parseInt($(this).parent().prev("div").text()) * 4 )
}

function click1x5() {
  $(this).parent().hide()
  $(this).parent().prev("div").show()
  $(this).parent().prev("div").html( parseInt($(this).parent().prev("div").text()) * 5 )
}

function click1x0() {
  $(this).parent().hide()
  $(this).parent().prev("div").show()
  $(this).parent().prev("div").html( parseInt($(this).parent().prev("div").text()) * 0 )
}

function cancel(){
  $(this).html("+");
  $(this).removeClass("check");
  $(this).next("div").show()
}

function cancelNulos(){
  $(this).html("X");
  $(this).removeClass("nulos");
  $(this).prev("div").show()
}

function cancelFoix(){
  $(this).hide();
  $(this).removeClass("check");
  $(this).next("div").show()
}


function clickPs(){
    $(this).html("25")
    $(this).addClass("check");
    $(this).next("div").hide()
}

function clickGs(){
    $(this).html("25")
    $(this).addClass("check");
    $(this).next("div").hide()
}

function clickF(){
    $(this).html("30")
    $(this).addClass("check");
    $(this).next("div").hide()
}

function clickC(){
    $(this).html("40")
    $(this).addClass("check");
    $(this).next("div").hide()
}

function clickY(){
    $(this).html("50")
    $(this).addClass("check");
    $(this).next("div").hide()

}

function clickX(){
    $(this).html("0")
    $(this).addClass("nulos");
    $(this).prev("div").hide()
}
