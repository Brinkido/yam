var ligne;
var valeur;
var score;
var soustotal1j1;
var soustotal1j2;
var soustotal1j3;
var soustotal2j1 = 0;
var soustotal2j2 = 0;
var soustotal2j3 = 0;
var totalj1;
var totalj2;
var totalj3;

$(document).ready(function(){
  totaux();

  $(".1").click(click1x)
  $(".2").click(click1x)
  $(".3").click(click1x)
  $(".4").click(click1x)
  $(".5").click(click1x)
  $(".0").click(click1x)

  $(".pS, .gS, .F, .C, .Y, .nulos").dblclick(cancelF);
  $(".zero").dblclick(cancelZ);
  $(".1s, .2s, .3s, .4s, .5s,.6s").dblclick(cancel);

  $(".1s").hide()
  $(".2s").hide()
  $(".3s").hide()
  $(".4s").hide()
  $(".5s").hide()
  $(".6s").hide()

  $(".pS").click(clickPs)
  $(".gS").click(clickGs)
  $(".F").click(clickF)
  $(".zero").click(clickX)
  $(".C").click(clickC)
  $(".Y").click(clickY)

  $(".B").change(function(){
    if(!$(this).val()){
      $(this).val(0);
    }
    totaux();
  })


function click1x(){
  $(this).parent().hide();
  $(this).parent().prev("div").show();
  ligne = parseInt($(this).parent().prev().attr('valeur'));
  valeur = parseInt($(this).attr('class'));
  score = ligne * valeur;
  $(this).parent().prev("div").html(score);

  totaux();

}

function cancel(){
  $(this).hide();
  $(this).removeClass("check");
  $(this).next("div").show();
  $(this).html(0);

  totaux();
}

function clickPs(){
    $(this).html("25")
    $(this).addClass("check");
    $(this).next("div").hide()
    $(this).parent().attr("valeur", "25");

    totaux();
}

function clickGs(){
    $(this).html("40")
    $(this).addClass("check");
    $(this).next("div").hide();
    $(this).parent().attr("valeur", "40");

    totaux();
}

function clickF(){
    $(this).html("30")
    $(this).addClass("check");
    $(this).next("div").hide();
    $(this).parent().attr("valeur", "30");

    totaux();
}

function clickC(){
    $(this).html("40")
    $(this).addClass("check");
    $(this).next("div").hide();
    $(this).parent().attr("valeur", "40");

    totaux();
}

function clickY(){
    $(this).html("50")
    $(this).addClass("check");
    $(this).next("div").hide();
    $(this).parent().attr("valeur", "50");

    totaux();
}

function clickX(){
    $(this).html("0")
    $(this).addClass("nulos");
    $(this).prev("div").hide()

    totaux();
}

function cancelF(){
  $(this).html("+");
  $(this).removeClass("check");
  $(this).next("div").show();

  $(this).parent().attr("valeur", "0");

  totaux();
}

function cancelZ(){
  $(this).html("X");
  $(this).removeClass("nulos");
  $(this).prev("div").show();

  totaux();
}

function totaux(){

  // SOUS TOTAUX 1

  soustotal1j1 = parseInt($("#J1-1s").html())+parseInt($("#J1-2s").html())+parseInt($("#J1-3s").html())+parseInt($("#J1-4s").html())+parseInt($("#J1-5s").html())+parseInt($("#J1-6s").html());
  $('.soustotal-j1').html(soustotal1j1);
  if(soustotal1j1 >= 63){
    $('.bonus-j1').html(soustotal1j1 + 37);
  }
  else{
    $('.bonus-j1').html(soustotal1j1);
  }

  soustotal1j2 = parseInt($("#J2-1s").html())+parseInt($("#J2-2s").html())+parseInt($("#J2-3s").html())+parseInt($("#J2-4s").html())+parseInt($("#J2-5s").html())+parseInt($("#J2-6s").html());
  $('.soustotal-j2').html(soustotal1j2);
  if(soustotal1j2 >= 63){
    $('.bonus-j2').html(soustotal1j2 + 37);
  }
  else{
    $('.bonus-j2').html(soustotal1j2);
  }

  soustotal1j3 = parseInt($("#J3-1s").html())+parseInt($("#J3-2s").html())+parseInt($("#J3-3s").html())+parseInt($("#J3-4s").html())+parseInt($("#J3-5s").html())+parseInt($("#J3-6s").html());
  $('.soustotal-j3').html(soustotal1j3);
  if(soustotal1j3 >= 63){
    $('.bonus-j3').html(soustotal1j3 + 37);
  }
  else{
    $('.bonus-j3').html(soustotal1j3);
  }

  // SOUS TOTAUX 2

  soustotal2j1 = parseInt($('#J1-B').val())+parseInt($('#J1-Ch').val())+parseInt($("#J1-pS").parent().attr('valeur')) + parseInt($("#J1-gS").parent().attr('valeur')) + parseInt($("#J1-F").parent().attr('valeur')) + parseInt($("#J1-C").parent().attr('valeur')) + parseInt($("#J1-Y").parent().attr('valeur'));

  $('.soustotal2-j1').html(soustotal2j1);
  $('.total-j1').html(parseInt($('.bonus-j1').html())+soustotal2j1);

  soustotal2j2 = parseInt($('#J2-B').val())+parseInt($('#J2-Ch').val())+parseInt($("#J2-pS").parent().attr('valeur')) + parseInt($("#J2-gS").parent().attr('valeur')) + parseInt($("#J2-F").parent().attr('valeur')) + parseInt($("#J2-C").parent().attr('valeur')) + parseInt($("#J2-Y").parent().attr('valeur'));

  $('.soustotal2-j2').html(soustotal2j2);
  $('.total-j2').html(parseInt($('.bonus-j2').html())+soustotal2j2);

  soustotal2j3 = parseInt($('#J3-B').val())+parseInt($('#J3-Ch').val())+parseInt($("#J3-pS").parent().attr('valeur')) + parseInt($("#J3-gS").parent().attr('valeur')) + parseInt($("#J3-F").parent().attr('valeur')) + parseInt($("#J3-C").parent().attr('valeur')) + parseInt($("#J3-Y").parent().attr('valeur'));

  $('.soustotal2-j3').html(soustotal2j3);
  $('.total-j3').html(parseInt($('.bonus-j3').html())+soustotal2j3);

  // TOTAUX

  $('.total-j1').html(parseInt($('.bonus-j1').html())+soustotal2j1);
  $('.total-j2').html(parseInt($('.bonus-j2').html())+soustotal2j2);
  $('.total-j3').html(parseInt($('.bonus-j3').html())+soustotal2j3);
}

});
