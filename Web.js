const input = document.querySelector("input"),
      btns = document.querySelectorAll("button"),
      error = "internet connection failed"

input.addEventListener("click", () => {
    alert(error)
})

btns.forEach((item) => {
    item.addEventListener("click", () => {
        alert(error)
    })
})