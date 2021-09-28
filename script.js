document.addEventListener("keydown", function(event){
    let temp = event.key;
    
        
        var x =document.getElementById(temp);
        console.log(x);
        x.currentTime =0;
        x.play();
        let ele = document.getElementsByClassName(event.key)[0];
        // console.log(ele);
        ele.classList.add("animate");
        x.onended = () => {
            ele.classList.remove("animate");
        }        
    
})

let button = document.querySelectorAll(".button");
let aud = document.querySelectorAll("Audio");

// for(a in button){
//     if(a.id === "d" )
//     a.play();
// }
// button[0].play();
button.forEach(element => {
    element.addEventListener("click", () =>{
        // aud[button.indexOf(element)].play();


    })
});

console.log(button)