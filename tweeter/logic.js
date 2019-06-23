const Tweeter=function(){
  const posts=[ {
    text: "First post!",
    id: "p1",
    comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" }
    ]
},
{
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
        { id: "c4", text: "Don't wory second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." }
    ]
}]
const getPosts=function(){
  return posts
}
const addPost=function(text){
const num= posts.length +1
   const l="p"+num
  
  posts.push({id: l,"text": text,comments:[]})
}
const removePost=function(a){
for(let i=0;i<posts.length;i++){
  if(posts[i].id===a){
     posts.splice(i,1)
  }
}
for(let x=0;x<posts.length;x++){
    posts[x].id="p"+(x+1)
}
}
const addComment=function(postid,text){
  let num=1
  for(let x of posts){
    num+=x.comments.length
 }
  for(let i=0;i<posts.length;i++){
    if(posts[i].id===postid){
       posts[i].comments.push({id:"c"+num,"text":text})
    }
}
}
const removeComment=function(postID,commentID){
  for(let i=0;i<posts.length;i++){
    if(posts[i].id===postID){
      for(let x=0;x<posts[i].comments.length;x++){
        if(posts[i].comments[x].id===commentID){
       posts[i].comments.splice(x,1)
        }
      }
  }
  }
  let  num=0
  for(let i=0;i<posts.length;i++){
      for(let x=0;x<posts[i].comments.length;x++){
          num++
          posts[i].comments[x].id="c"+(num)
      } 
  }
}

return {
  addPost:addPost,
  getPosts:getPosts,
  removePost:removePost,
  addComment:addComment,
  removeComment:removeComment,
} 
}

/*const tweeter=Tweeter()
 tweeter.addPost("123")
tweeter.addPost("123")
tweeter.addPost("123")
console.log(tweeter.getPosts())
tweeter.removePost("p1")
console.log(tweeter.getPosts())
tweeter.addComment("p1","qwe")
console.log(tweeter.getPosts())
tweeter.addComment("p1","123")
console.log(tweeter.getPosts())
tweeter.removeComment("p1","c2")
*/