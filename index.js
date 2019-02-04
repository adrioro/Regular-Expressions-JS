//This will return any string that has X amount of occurences in a row.
var myExp = /a{2}/g;
$("#button").click(function () {
    var test = myExp.test("My first name is Adriana");
    alert(test);
});

//This will return true:
var myExp = /Adriana/g;
$("#button").click(function () {
    var test = myExp.test("My first name is Adriana");
    alert(test);
});
//This will return false:
var myExp = /Adri/g;
$("#button").click(function () {
    var test = myExp.test("My first name is Adriana");
    alert(test);
});