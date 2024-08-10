const isstatus = document.querySelector("h5");
const btn = document.querySelector("#add");


let flag = 0;


btn.addEventListener("click", function() {
    if (flag === 0) {
        isstatus.innerHTML = "Friends";
        isstatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        flag = 1;
    } else {
        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
});



