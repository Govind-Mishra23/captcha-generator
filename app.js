let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    let ranNum = Math.floor(Math.random()*9000)+1000;
   let input = document.querySelector("input");
   input.value = ranNum ;
   checkVal();
   clear ();
});

function checkVal(){
    let checkBtn = document.querySelector(".done")
    checkBtn.addEventListener("click", ()=>{
        let res = document.querySelector(".result");
        let input = document.querySelector("input");

        if (res.value == input.value) {
            let info = document.querySelector(".info")
            info.innerHTML = "Go Ahead"
            info.style.color = "green"
                
        }  else{
            let info = document.querySelector(".info")
                info.innerHTML = "wrong input Try again !"
                info.style.color = "red" ;
        }
          
    })

}

function clear(){
    let clrBtn = document.querySelector(".clear");
    clrBtn.addEventListener("click",()=> {
        let input = document.querySelector("input");
        input.value = "";
        let res = document.querySelector(".result");
        res.value = "";
        let info = document.querySelector(".info")
        info.innerHTML = ""
    })
 
}


