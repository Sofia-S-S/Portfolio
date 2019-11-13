$("#aboutBtn").on("click", function(event) {
  $("#aboutBody").show();
  $("#portfolioBody").hide();
  $("#contactsBody").hide();
});

$("#portfolioBtn").on("click", function(event) {
  $("#aboutBody").hide();
  $("#portfolioBody").show();
  $("#contactsBody").hide();
});

$("#contactsBtn").on("click", function(event) {
  $("#aboutBody").hide();
  $("#portfolioBody").hide();
  $("#contactsBody").show();
});
