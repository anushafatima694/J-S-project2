/* Changing case */
//1
// var name=prompt("Enter your name","Your name is:");
// var conv= name.toUpperCase();
// alert(conv);

//2
// var user=prompt("Enter your father name","Your father name is:");
// var conv= user.toLowerCase();
// alert(conv);

/* Strings: measuring length and extracting parts */
//1
// var mobilePhone=prompt("Enter your favorite mobile phone model");
// var conv= mobilePhone.length
// alert(conv);

//2
// var input=prompt("Enter your Text","Your Text is:");
// var conv= input.slice(4,8);
// alert(conv);

/*Strings: finding segments*/
//1
// var str="Pakistani";
// var conv= str.indexOf("n");
// console.log(conv);

//2
// var username=prompt("Enter your username","Your username is:");
// if( username.indexOf("@") !== -1){
//        alert("Enter a valid username!")
//     } else if(username.indexOf("!") !== -1){
//         alert("Enter a Valid Username!")
//     }

//3
// var str="The quick brown fox jumps over the lazy dog";
// var conv= str.lastIndexOf("the");
// console.log(conv);

/*Strings: finding a character at a location*/
//1
// var word="Pakistani";
// var conv= word.charAt(3);
// document.write(conv)

/*Strings: replacing characters*/
//1
// var city="Hyderabad";
// var replace= city.replace("Hyder","Islam");
// document.write(replace)

//2
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var replace= message.replace(/and/g, "&");
// document.write(replace);

/*Rounding numbers*/
//1
// var integer= prompt("Enter a Positive Integer");
// var roundValue= Math.round(integer);
// var floorValue= Math.floor(integer);
// var ceilValue= Math.ceil(integer);
// document.write("a. Number:"+" "+integer+"<br>"+"b. Round off Value:"+" "+roundValue+"<br>"+"c. Floor Value:"+" "+floorValue+"<br>"+"d. Ceil Value:"+" "+ceilValue)

//2
// var integer= prompt("Enter a Negative Integer");
// var roundValue= Math.round(integer);
// var floorValue= Math.floor(integer);
// var ceilValue= Math.ceil(integer);
// document.write("a. Number:"+" "+integer+"<br>"+"b. Round off Value:"+" "+roundValue+"<br>"+"c. Floor Value:"+" "+floorValue+"<br>"+"d. Ceil Value:"+" "+ceilValue)

/*Generating random numbers*/
//1
// var rollDice= Math.random()*6+1;
// var randomDiceNo= Math.floor(rollDice);
// document.write("Random Dice Number is"+" "+ randomDiceNo);

//2
// var toss= Math.random()*3;
// var conv= Math.floor(toss);
// if(conv === 2){
//     alert(conv+","+"Heads"+" "+"Win the Toss!");
// }else if(conv === 1){
//     alert(conv+","+"Tails"+" "+"Win the Toss!")
// }else{
//     alert("Sorry!");
// }

//3
// var randonNo= Math.random()*10+1;
// var floor= Math.floor(randonNo);
// var secretNo= prompt("Select a Number b/w 1 to 10");
// if(secretNo === floor){
//     alert("CONGRATULATION!")
// }else{
//     alert("SORRY!")
// }

/*Converting strings to integers and decimals*/
//1
// var weight= prompt("Enter your weight","your weight is:");
// var conv= Number(weight);
// document.write("a. Your weight is"+" "+conv+"<br>"+"b. Your weight is"+" "+conv+"kgs"+"<br>"+ "c. Your weight is"+" "+conv+"kilograms"+"<br>")

/*Converting strings to numbers, numbers to strings*/
//1
// var num="472";
// var conv=parseInt(num);
// document.write(num + "<br>" + "Type:"+" "+typeof conv);

//2
// var num=35.36*100;
// var str= num.toString();
// console.log(str);

/*Controlling the length of decimals*/
//1
// var a= 40;
// var b= 55;
// var total= (a/b)*100;
// var fixedL=total.toFixed(2)
// alert(fixedL)