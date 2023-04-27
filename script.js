$(".scenarioselect").hide();
$(".wholeGame").hide();
$(".NameConfirmation").hide();
$(".scenarioOneOptions").hide();
$(".scenario2").hide();
$(".Armor_Select").hide();
$(".scenarioTWOOptions").hide();
$(".SuitConfirmation").hide();
$(".SuitPick").hide();
$(".adventure_start, .adventure_GO").hide();
$(".scenario3, .scenarioTHREEOptions").hide();
$(".Choice_Defend, .Choice_Attack").hide();
$(".scenario4, .scenarioFOURptions, .Next").hide();
$(".Merchant_Fight, .scenarioFOURfight, .Merchant_Accept").hide();
$(".Game_Over, .G_Oselect").hide();
$(".G_Oselect").hide();
$(".Defeated, .Win").hide();
$(".Next2").hide();
$(".scenario5, .Response, .WHAT, .LEAVE, .Response2, .QuestEnd, .scenarioFIVEfight, .Defeated2, .Win2, .Next3").hide();
$(".finalscenario, .LH, .SB, .STP, .QTD, .QTD_2, .QTD_3, .The_End, .Final_Selection, .Left_2, .Right_2").hide();




// SCENARIO SELECT  

// Death to Potion
// $(".Y4").click(function(){
//   $(".scenarioselect").show();
// });

$(".N4").click(function() {
  $(".wholeGame").hide();
  $(".The_End").show();
});

// Scenario Options
// $(".Title_Screen").click(function(){
//   $(".StartScreen").show();
//   $(".wholeGame").hide();
// });

// $(".Scenario_1").click(function(){
//   $(".scenario2").hide();
//   $(".Armor_Select").hide();
//   $(".scenarioTWOOptions").hide();
//   $(".SuitConfirmation").hide();
//   $(".SuitPick").hide();
//   $(".adventure_start, .adventure_GO").hide();
//   $(".scenario3, .scenarioTHREEOptions").hide();
//   $(".Choice_Defend, .Choice_Attack").hide();
//   $(".scenario4, .scenarioFOURptions, .Next").hide();
//   $(".Merchant_Fight, .scenarioFOURfight, .Merchant_Accept").hide();
//   $(".Game_Over, .G_Oselect").hide();
//   $(".scenario1").show();
// });

// $(".Scenario_2").click(function(){
//   $(".scenario1").hide();
//   $(".Armor_Select").hide();
//   $(".scenarioTWOOptions").hide();
//   $(".SuitConfirmation").hide();
//   $(".SuitPick").hide();
//   $(".adventure_start, .adventure_GO").hide();
//   $(".scenario3, .scenarioTHREEOptions").hide();
//   $(".Choice_Defend, .Choice_Attack").hide();
//   $(".scenario4, .scenarioFOURptions, .Next").hide();
//   $(".Merchant_Fight, .scenarioFOURfight, .Merchant_Accept").hide();
//   $(".scenario2").show();
// });


// $(".Scenario_3").click(function(){
//   $(".scenario2").hide();
//   $(".Armor_Select").hide();
//   $(".scenario3").show();
// });

// $(".Scenario_4").click(function(){
//   $(".scenario4").show();
// });

// Loading Screen
$('.startButton').click(function() {
  $(".StartScreen").hide();
  $(".wholeGame").show();
});

// Scenario 1
let loginName = "Name";
$(".NameEnter").click(function() {
  let loginName = $(".userName").val()
  $(".NameConfirmation").text(loginName + ", is that your name?");
  $(".NameConfirmation").show();
  $(".scenarioOneOptions").show();
});

$(".No").click(function() {
  $(".NameConfirmation").hide();
  $(".scenarioOneOptions").hide();
});

// Scenario 2
$(".Yes").click(function() {
  $(".NameConfirmation").hide()
  $(".scenario1").hide()
  $(".scenarioOneOptions").hide();
  $(".scenario2").show();
  let loginName = $(".userName").val()
  $("#scenario2-text").text("Ok then " + loginName + ", let me tell you the story of the Legendary Pickle that was, long ago, a great tragedy struck as creatures known as \"the uncondiment\" were terrorizing the kingdom. However, one day, a mighty hero, entrusted with a solid golden pickle from the sandwich gods from above, the uncondiments were quelled and sealed up in the substantial pickle cave protected by the ham-dragon. BUT YOUNG TRAVELER, the ham-dragon has become corrupt and threatens to take the golden pickle for himself, meaning the kingdom might be in great danger. You must get ready now if you want to go find the legendary pickle and save our kingdom, get ready for a pickle quest")
});

$(".Continue").click(function() {
  $(".Armor_Select").show();
  $(".scenarioTWOOptions").show();
});

let Armor1;
$(".Armor1").click(function() {
  $(".SuitConfirmation").show();
  $(".SuitConfirmation").text("A the classic steel suit of armor...I remeber wearing this in my adventurers days, would like to take it?")
  Armor1 = 5
  $(".SuitPick").show();
});

let Armor2;
$(".Armor2").click(function() {
  $(".SuitConfirmation").show();
  $(".SuitConfirmation").text("A quiet,stealhy suit....I like it, perfect for sneaking past enemies! Would you like to take it?")
  Armor2 = 3
  $(".SuitPick").show();
});

let Armor3;
$(".Armor3").click(function() {
  $(".SuitConfirmation").show();
  $(".SuitConfirmation").text("Really,a fursuit? Your really going too, ughhh fine, would you like to take this?")
  Armor3 = 2
  $(".SuitPick").show();
});

$(".N2").click(function() {
  $(".SuitConfirmation").hide();
  $(".SuitPick").hide();
});

$(".Y2").click(function() {
  $(".SuitConfirmation").hide();
  $(".SuitPick").hide();
  $(".adventure_start").show();
  $(".adventure_GO").show();
});

// Scenario 3
$(".adventure_GO").click(function() {
  $(".scenario3").show();
  $(".scenarioTHREEOptions").show();
});

$(".Defend").click(function() {
  $(".Choice_Defend").show();
  $(".Choice_Attack").hide();
  $(".scenarioTHREEOptions").hide();
  $(".Next").show();
});

$(".Attack").click(function() {
  $(".Choice_Attack").show();
  $(".Choice_Defend").hide();
  $(".scenarioTHREEOptions").hide();
  $(".Next").show();
  Armor1 = 7
  Armor2 = 5
  Armor3 = 4
});

// Scenario 4
$(".C2").click(function() {
  $(".scenario4").show();
  $(".scenarioFOURptions").show();
});

$(".Y3").click(function() {
  $(".Merchant_Accept").show();
  $(".Game_Over").show();
  $(".G_Oselect").show();
  $(".Merchant_Fight").hide();
  $(".scenarioFOURfight").hide();
});

$(".N3").click(function() {
  $(".Merchant_Accept").hide();
  $(".Merchant_Fight").show();
  $(".scenarioFOURfight").show();
});

let Merchant;
$(".Attack2").click(function() {
  Merchant = 4

  if (Armor1 >= Merchant) {
    $(".Win").show();
    $(".Defeated").hide();
    $(".scenarioFOURfight").hide();
    $(".Next2").show();
  } else if (Armor2 >= Merchant) {
    $(".Win").show();
    $(".Defeated").hide();
    $(".scenarioFOURfight").hide();
    $(".scenarioFOURfight").hide();
    $(".Next2").show();
  } else if (Armor3 >= Merchant) {
    $(".Win").show();
    $(".Defeated").hide();
    $(".scenarioFOURfight").hide();
    $(".Next2").show();
  } else {
    $(".Win").hide();
    $(".scenarioFOURfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  }

  Armor1 = 9
  Armor2 = 7
  Armor3 = 6
});


$(".Defend2").click(function() {
  if (Armor1 <= Merchant) {
    $(".Win").hide();
    $(".scenarioFOURfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  } else if (Armor2 <= Merchant) {
    $(".Win").hide();
    $(".scenarioFOURfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  } else if (Armor3 <= Merchant) {
    $(".Win").hide();
    $(".scenarioFOURfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  } else {
    $(".Win").show();
    $(".Defeated").hide();
    $(".Next2").show();
  }

  Armor1 = 8
  Armor2 = 6
  Armor3 = 5
});

// Scenario 5
$(".C3").click(function() {
  $(".scenarioFOURfight").hide();
  $(".Next2").hide();
  $(".scenario5").show();
  $(".Response").show();
});

$(".Truthful").click(function() {
  $(".LEAVE").show();
  $(".Response2").show();
});

$(".Vague").click(function() {
  $(".LEAVE").show();
  $(".Response2").show();
});

$(".Meme").click(function() {
  $(".WHAT").show();
  $(".LEAVE").show();
  $(".Response2").show();
});

$(".Fine").click(function() {
  $(".Response2").show();
  $(".QuestEnd").show();
  $(".Game_Over").show();
  $(".G_Oselect").show();
});

$(".Refuse").click(function() {
  $(".scenarioFIVEfight").show();
});

let Dragon;
$(".Attack3").click(function() {
  Dragon = 6

  if (Armor1 >= Dragon) {
    $(".Win2").show();
    $(".Defeated2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Next3").show();
  } else if (Armor2 >= Dragon) {
    $(".Win2").show();
    $(".Defeated2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Next3").show();
  } else if (Armor3 >= Dragon) {
    $(".Win2").show();
    $(".Defeated2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Next3").show();
  } else {
    $(".Win2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Defeated2").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  }

  Armor1 = 11
  Armor2 = 9
  Armor3 = 8
});

$(".Defend3").click(function() {
  if (Armor1 <= Dragon) {
    $(".Win2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  } else if (Armor2 <= Dragon) {
    $(".Win2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  } else if (Armor3 <= Dragon) {
    $(".Win2").hide();
    $(".scenarioFIVEfight").hide();
    $(".Defeated").show();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  } else {
    $(".Win2").show();
    $(".Defeated2").hide();
    $(".Next3").show();
  }

  Armor1 = 10
  Armor2 = 8
  Armor3 = 7
});

// Final Scenario

let cancelTimer;

$(".Next3").click(function() {
  $(".finalscenario").show();
  $(".LH").show()
  $(".QTD").show();
  cancelTimer = setTimeout(function() {
    $(".finalscenario").hide();
    $(".QTD").hide();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  }, 4000);
});

let cancelTime2;

$(".QTD").click(function() {
  $(".QTD").hide();
  $(".SB").show();
  $(".LH").show()
  $(".QTD_2").show();
  cancelTimer2 = setTimeout(function() {
    $(".SB").hide();
    $(".QTD_2").hide();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  }, 4000);
});

let cancelTime3;

$(".QTD_2").click(function() {
  $(".QTD_2").hide();
  $(".STP").show();
  $(".LH").show()
  $(".QTD_3").show();
  cancelTimer = setTimeout(function() {
    $(".STP").hide();
    $(".QTD").hide();
    $(".Game_Over").show();
    $(".G_Oselect").show();
  }, 4000);
});

$(".QTD_3").click(function() {
  $(".Final_Selection").show()
});

$(".Left").click(function() {
  $(".Left_2").show()
  $(".The_End").show()
});


$(".Right").click(function() {
  $(".Right_2").show()
});


$(".QTD").click(function() {
  clearTimeout(cancelTimer)
});

$(".QTD_2").click(function() {
  clearTimeout(cancelTimer2)
});

$(".QTD_3").click(function() {
  clearTimeout(cancelTimer3)
});