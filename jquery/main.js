const header=$("h1")
console.log(header)

$("h1").css("color","blue")
$(".red-div").css("color","red")
$("#brown-div").css("color","brown")
$("li:nth-child(1)").css("color","green")
$("li:nth-child(2)").css("color","pink")

$("#b1").addClass("box1")
$("#b2").addClass("box1")


$("#my-input").val("Terabyte")

const data = $("#a").data()
console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) 

$("#b1").hover(function(){
  $("#b1").css("background-color","blue")
})

/*$("button").click(function(){
 alert( $("#my-input").val())
})*/

$(".box").hover(function(){
  $(this).css("background-color","blue")
})


$(".feedme").on("click", function(){
  let divCopy = "<div class=feedme> " +$(this).text()+ "</div>" //use template literals and $(this)
  
  $("body").append(divCopy)
})

const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" }
]
for(let name of names){
  $("body").append("<div class='human'>"+name.first+"-"+name.last+"</div>")
}

$("#a").hover(function(){
  $("div").remove("#a")
  $("body").prepend("<h1>poof its magic!</h1>")
})

$("button").click(function(){
  $("#blogs").append("<div class='blog'>ma khra?!</div>")
})

$("#blogs").on("click",".blog",function(){
  $(this).text("blargh")
})


$("#ul").append("<input id='in' type='text'>")
$("#ul").append("<button id='but'>add human</button>")
$("#but").click(function(){
  $("#ul").prepend("<li class='li'>"+$("#in").val()+"</li>")
})

$("#ul").on("click",".li",function(){
  $(this).remove(".li")
})

/*eExercise 3 */
$("body").prepend("<div class='box2'></div>")
$("body").prepend("<div class='box2'></div>")




$(".item").click(function(){ 
  if($(this).data().instock){ 
$("#cart").prepend("<div class='cart'>"+$(this).text()+"</div>")
  }
})


const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" }
]

for (let fruit=0;fruit<fruits.length;fruit++){
  $("#basket").prepend("<div class="+fruits[fruit].color+">"+fruits[fruit].name+"</div>")
}
