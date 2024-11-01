//render.js
const bt1 = document.getElementById("bt1")
const bt2 = document.getElementById("bt2")
const input = document.getElementById("input")
const bt3 = document.getElementById("bt3")
const clec1 = document.getElementById("clec1")
const clec2 = document.getElementById("clec2")
const bt4 = document.getElementById("bt4")
const clecAns = document.getElementById("clecAns")

bt1.onclick=()=>{
    alert(myAPI.version)
}

bt2.onclick=()=>{
    myAPI.saveFile(input.value)
}

bt3.onclick=async ()=>{
    let data = await myAPI.readFile()
    alert(data)
}

bt4.onclick=async ()=>{
    let ans = await myAPI.addClec(clec1.value, clec2.value)
    clecAns.innerHTML=ans
}