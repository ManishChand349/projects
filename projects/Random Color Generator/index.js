const colorCode = document.getElementById("color-code")

const getColor = () =>{
     //
     const randomNumber = Math.floor(Math.random()* 16777211);
     const randomCode = "#" + randomNumber.toString(16);
     document.body.style.backgroundColor = randomCode 
     document.getElementById("color-code").innerText = randomCode
     document.getElementById("btn").style.color = randomCode
}
document.getElementById("btn").addEventListener(
     "click",
     getColor
)
getColor()