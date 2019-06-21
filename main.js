const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())


const post=()=>{
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
}
$(".delete").click(function(){
   const id=$(this).closest(".post").attr("data-id")
    tweeter.removePost(id)
    console.log(id)
    renderer.renderPosts(tweeter.getPosts())
})

