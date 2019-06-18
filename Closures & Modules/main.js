const Family=function(){
  const members=[]
  const birth=function(name){
members.push(name)
console.log(members)
  }
  return birth
}

const giveBirth=Family()
giveBirth("i")
giveBirth("a")
giveBirth("b")


const mathOperations = function () {
  const add = function (x, y) {
      return x + y;
  }

  const subtract = function (x, y) {
      return x - y;
  }

  const multiply = function (x, y) {
      return x * y;
  }

  const divide = function (x, y) {
      return x / y;
  }
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
}
}

const culc=mathOperations()
console.log(culc.add(13,29))
console.log(culc.mult(1.75,24))
console.log(culc.mult(7,culc.div(36,6)))

const StringFormatter=function() {
  const capitalizeFirst=function(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  }
  const skewerCase=function(name){
return name.replace(/\s+/g, '-')
  }
  return {
    cap:capitalizeFirst,
    case:skewerCase,
  }
}

const formatter = StringFormatter()

console.log(formatter.cap("dorothy")) //should print Dorothy
console.log(formatter.case("blue box")) //should print blue-box


const Bank=function(){
  let money=500
  const depositCash=function(cash){
    money +=cash
  }
  const checkBalance=function (){
    console.log(money)
  }
  return{
    deposit:depositCash,
    showBalance:checkBalance
  }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950



const SongsManager=function(){
  const songs ={}
  const addSong=function(name,url){
    
    songs[name]=url.substring(32)

  }
  const getSong=function(name){
    
    console.log("https://www.youtube.com/watch?v=" + songs[name])
  }
  return {
    add: addSong,
    get: getSong,
  }
}

const songsManager = SongsManager()
songsManager.add("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.add("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.add("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.get("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.get("ain't me")

