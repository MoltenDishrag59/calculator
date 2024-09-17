var $screen = $("#screen");
var $number = $(".number");
var $clearnum = $(".clearnum");
var num1 = null;
var num2 = null;
var currentNumber = 1;
var op = $("#operator");
var answer = (num1, op, num2);
var click = 0;

function findAnswer(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, op, num2);
    if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "*") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }
    num1 = answer;
    num2 = null;
    currentNumber = 1;   
}

function more(){
    if (click > 8){
        click = click - 5;
    }
    if (currentNumber == 2) {
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }
    currentNumber = 2;
}

function returnPractice() { if (click > 8) {return;}

alert ("This will never show if click is greater than 8."); }

$number.on('click', function (){
    click++;
    returnPractice();
    var numberPressed = $(this).html();
    $screen.append(numberPressed);

    if (currentNumber == 1) {
      if (num1===null) {
        num1 = numberPressed;
      } else {
        num1 = num1 + numberPressed;
             }
   }
  if (currentNumber == 2) {
    if (num2 == null) {
        num2 = numberPressed;
    } else {
        num2 = num2 + numberPressed;
    }
}

});

$("#plus").on('click', function (){
    more();
    $screen.append("+");
    op = "+"
});

$("#minus").on('click', function (){
    more();
    $screen.append("-");
    op = "-"
});

$("#times").on('click', function (){
    more();
    $screen.append("*");
    op = "*"
});

$("#divided").on('click', function (){
    more();
    $screen.append("/");
    op = "/"
});


$clearnum.on('click', function (){
    $screen.empty();
    num1 = null;
    num2 = null;
    currentNumber = 1;
    click = 0;
});

$("#equal").on('click', function(){
{
    $screen.append("=");
    findAnswer();
    a = answer;
    answer = a.toFixed(1);
    if (click > 8){
        $screen.empty();
        var answerLength = answer.toString;
        click = answerLength.length;
    }
    $screen.append(answer);
    console.log(answer);
}
});