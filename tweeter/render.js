const Renderer=function(){
    const renderPosts=function(posts){
$("#posts").empty()
for ( let i=0;i< tweeter.getPosts().length;i++){
    $("#posts").append("<div class='post' data-id="+tweeter.getPosts()[i].id+" >"+tweeter.getPosts()[i].text+"</div>")
    
for(let x=0;x<tweeter.getPosts()[i].comments.length;x++){
   $("[data-id="+tweeter.getPosts()[i].id+"]").append("<div class='comments' data-id="+tweeter.getPosts()[i].comments[x].id+">"+tweeter.getPosts()[i].comments[x].text+"</div>")
}
}
    }
    
    return {
        renderPosts:renderPosts
    }
}

