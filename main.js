const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())


const post=()=>{
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
}

$("body").on("click",".delete",function(){
   let id=$(this).closest(".post").attr("data-id")
    tweeter.removePost(id)
    console.log(id)
    renderer.renderPosts(tweeter.getPosts())

})


$("body").on("click",".comment",function(){
   let id=$(this).closest(".post").attr("data-id")
   let text=$(this).siblings("input.comments").val()
    tweeter.addComment(id,text)
    renderer.renderPosts(tweeter.getPosts())
    })



    $("body").on("click",".delete-comment",function(){
    let ID=$(this).closest(".post").attr("data-id")
   let id=$(this).closest("div.comments").attr("data-id")
    tweeter.removeComment(ID,id)
    renderer.renderPosts(tweeter.getPosts())
    })




