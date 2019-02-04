//This will turn true because it's looking for a new line.
var myExp = /Adriana\n/g; //This look for a new line character.
$("#button").click(function () {
    var test = myExp.test("My first name is:\n Adriana");
    alert(test);
});

//This will return any string that has X amount of occurences in a row.
var myExp = /l{2}/g;
$("#button").click(function () {
    var test = myExp.test("My first name is Kallob"); //Two ls in a row is true.
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