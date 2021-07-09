let Test = document.getElementById("Test")
console.log(Test)
Test.onclick = function(e) {
    console.log(e.offsetX, e.offsetY)
}
