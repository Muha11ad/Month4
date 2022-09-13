// let count = 0; 
// const btns = document.querySelectorAll(".btn")
// const Value = document.querySelector(".text")
/*increament*/
// btns.forEach(function (btn){
//     btn.addEventListener("click", function (a){
//         const styles = a.currentTarget.classList;
//         if(styles.contains("increase")){
//             count++;
//         } else if (styles.contains("reset")){
//             count= 0;
//         } else if (styles.contains("decrease")){
//             count--
//         }
//         Value.textContent = count
//     })
// })

/*Random*/
// const array = ['bisque', 'green', 'black', 'yellow', 'blue']
// const btns = document.querySelector(".increase")
// btns.addEventListener("click", function(evt) {
//     evt.preventDefault()
//     document.body.style.backgroundColor = array[Math.floor(array.length*Math.random())]
// })

const btn = document.querySelector(".fa")
let images = ["first.png", "second.jpg", "third.png","fourth.jpg", "fifth.png", "sixth.jpg" ]

function getRandom() {
  let random =   Math.floor(Math.random() * images.length)
   let showImg = images[random]
   document.body.style.background= `url(../images/${showImg})`
}
    var count = 0
btn.addEventListener("click", function(evt){
    evt.preventDefault()
    count++;
    console.log(count);
    if(count > 5){
    alert("Boldi ye")
} 
})
