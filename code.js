

let title = document.getElementById("anim");
let count = 0;
let word = "Hello! I'm Maram Khaled.";

function typing() {
    if (count < word.length) {
        title.textContent += word[count];
        count++;

        setTimeout(typing, 100);
    }
}

typing();


let hire = document.getElementById("hire-me");
hire.addEventListener("click",function(){
    window.location.href="https://www.linkedin.com/in/maram-khaled-963a66358/?isSelfProfile=true";
})

