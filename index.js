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

/* Modifiers: are how we modify our pattern.
i = case Insensitive. Or.."Ignore-case"
g= global. It will find all matches and not stop at just one.
*/
var myExp = /JS/gi;
$("#new").click(function () {
    var test = myExp.test("This js will not be ignored because of modifier i.");
    alert(test);
});

//.text() method will give us true or false.
//.replace() method will replace the pattern.
//Replace: string.replace("string or expression(here myExp)", "replacement");
var myExp = /sentence/gi;
$("#replace").click(function () {
    var str = "This is my new sentence."
    document.getElementById("parag").innerHTML = str.replace(myExp, "string");
});

//.match() method.ALWAYS USE g (global)
//To get the string match:
var myExp = /string/g;
$("#match").click(function () {
    var str = "This is my test to match the string.".match(myExp);
    for (v in str) {
        alert(str[v]);
    }
});

//To get the number of matches:

var myExp = /string/g;
$("#match2").click(function () {
    var str = "This is my test to match the string.".match(myExp);
    var matches = str.length;
    alert(matches);
});