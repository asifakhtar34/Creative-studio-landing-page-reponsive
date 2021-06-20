let main = document.querySelector("main");
let navContainer = document.querySelector(".navContainer");
let arrow = document.querySelector(".arrow");
let backTop = document.querySelector(".btTop");

main.addEventListener("click", (e) => {

    // console.log(e.target.closest(".nav"))
    if (e.target.closest(".hamBurg")) {

        navContainer.classList.toggle("hide")
    } else {
        navContainer.classList.add("hide")
    }

});

arrow.addEventListener("click", () => {
    console.log("hello")
    document.documentElement.scrollTop = 800;
})

backTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})