let users = []


const getData = function (x) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        x()
    }, 3000);
}

const displayData1 = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData1)

  
 /* setInterval(function(){
    console.log(new Date())
  }, 1000) */

  const square= number => console.log(number*number)
  square(4) // should print 16

  const getFormalTitle= (title,name)=>{
return title + " " +name
  }
  const formalTitle = getFormalTitle("Madamme", "Lellouche")
  console.log(formalTitle)


 
  const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }

  const pushPull=function(x){
x()
 }

  
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"


  const getTime=function(x){
    const time = new Date()
    x(time)
  }
  const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  
  getTime(returnTime)

  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data)
  };
  const logData= x => console.log(x)
  
  displayData(alert, logData, "I like to party")

  const sum=(x,y,z)=> {return x+y+z}
  console.log(sum(1,2,3))

  const capitalize=(name)=>{console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())}
capitalize("bOb")// returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

  
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
  const commentOnWeather=(x)=>{
     const a= determineWeather(x) 
     console.log("it's "+ a)
    }

  commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"
