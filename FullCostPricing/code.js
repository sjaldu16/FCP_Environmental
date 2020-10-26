// START

onEvent("pg0_button", "click", function() {
  console.log("ENTER THE APP clicked!");
  setScreen("screen1_home");
});


// ALL PAGE-1 EVENTS

onEvent("pg1_circle", "click", function() {
  console.log("Full Cots Pricing clicked!");
  setScreen("screen2_question");
});

onEvent("pg1_food", "click", function() {
  console.log("Food Page clicked!");
  setScreen("screen3_food");
});

onEvent("pg1_homegoods", "click", function() {
  console.log("Home Goods Page clicked!");
  setScreen("screen4_homegoods");
});


onEvent("pg1_clothing", "click", function() {
  console.log("Clothing Page clicked!");
  setScreen("screen5_clothing");
});


onEvent("pg1_bang", "click", function() {
  console.log("USER Learning clicked!");
  setScreen("screen9_cost_edu");
});


// All Food EVENTS

onEvent("pg3_button1", "click", function() {
  console.log("Info about TOMATOES !!!");
  setScreen("screen6_trm");
});

onEvent("pg3_button2", "click", function() {
  console.log("Info about WHITE RICE !!!");
  setScreen("screen6_trm");
});

onEvent("pg3_button3", "click", function() {
  console.log("Info about BEEF !!!");
  setScreen("screen6_trm");
});



// All HOME GOODS EVENTS

onEvent("pg4_button1", "click", function() {
  console.log("Info about WOOD !!!");
  setScreen("screen7_wcc");
});

onEvent("pg4_button2", "click", function() {
  console.log("Info about CARPET !!!");
  setScreen("screen7_wcc");
});

onEvent("pg4_button3", "click", function() {
  console.log("Info about CLEANING SUPPLIES !!!");
  setScreen("screen7_wcc");
});


// All CLOTHING EVENTS

onEvent("pg5_button1", "click", function() {
  console.log("Info about T-SHIRTS !!!");
  setScreen("screen8_tjw");
});

onEvent("pg5_button2", "click", function() {
  console.log("Info about JEANS !!!");
  setScreen("screen8_tjw");
});

onEvent("pg5_button3", "click", function() {
  console.log("Info about WALLET !!!");
  setScreen("screen8_tjw");
});



// BACK2CATEGORY EVENTS

onEvent("pg6_back", "click", function() {
  console.log("Back to Food clicked!");
  setScreen("screen3_food");
});

onEvent("pg7_back", "click", function() {
  console.log("Back to Home Goods clicked!");
  setScreen("screen4_homegoods");
});

onEvent("pg8_back", "click", function() {
  console.log("Back to Clothing clicked!");
  setScreen("screen5_clothing");
});




// BACK2HOME EVENTS

onEvent("pg2_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg3_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg4_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg5_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg6_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg7_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg8_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

onEvent("pg9_home", "click", function() {
  console.log("HomeScreen clicked!");
  setScreen("screen1_home");
});

