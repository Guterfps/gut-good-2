const posts=[
  {name:"itay",text:"ma ahi?"},
  {name:"itay",text:"ma ahi?"},
  {name:"itay",text:"ma ahi?"},
]

const render=function(){
  for(let post of posts){
    $("body").append("<div>"+ post.name+" : "+post.text+"</div>")
  }
}

$("button").click(function(){
  const n=$("#name").val()
  const t=$("#text").val()
posts.push({name:n,text:t})
$("div").empty()
render(this)
})