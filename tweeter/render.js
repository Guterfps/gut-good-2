const Renderer=function(){
    const renderPosts=function(posts){
$("#posts").empty()
for ( let i=0;i< posts.length;i++){
    $("#posts").append("<div class='post' data-id="+posts[i].id+" >"+posts[i].text+"</div>")
    $("[data-id="+posts[i].id+"]").append("<button  class='delete' ></button>")
for(let x=0;x<posts[i].comments.length;x++){
    $("[data-id="+posts[i].id+"]").append("<div class='comments' data-id="+posts[i].comments[x].id+">"+posts[i].comments[x].text+"</div>")
    $("[data-id="+posts[i].comments[x].id+"]").append("<button  class='delete-comment' ></button>")
}
$("[data-id="+posts[i].id+"]").append("<input class='comments'>")
$("[data-id="+posts[i].id+"]").append("<button class='comment' >comment</button>")
}
    }
    
    return {
        renderPosts:renderPosts
    }
}
