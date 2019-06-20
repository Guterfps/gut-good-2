$("button").click(function(){
 const print= $(this).closest("div").find("span").text()
 $("body").append("<div>"+print+"</div>")
 
})


$("button").click(function(){
  $("body").append("<div>"+$(this).closest("body").find(".container").text()+"</div>")
})


$(".generator").click(function(){
  const arr=[]
  console.log($(this).closest(".processor").attr("id"))
  console.log($(this).closest(".computer").attr("data-id"))
arr.push({camp_id:$(this).closest(".computer").attr("data-id")})
console.log($(this).closest(".computer").find(".BUS").text())
console.log(arr)
})

$(".validator").click(function(){
  console.log($(this).closest(".computer").find(".generator").text())
  console.log($(this).closest(".computer").find(".MB").text())
  console.log($(this).closest(".computer").find(".QR").text())
})