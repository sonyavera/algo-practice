const button1 = document.getElementById("click-me-1")
const submitBtn = document.querySelector("#submit-btn")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")

const changeColor = (e) =>{
    const btnOneDiv = e.target.parentNode
    btnOneDiv.style.backgroundColor = "green"
}

const validate = (element) =>{
    if(element?.value?.length > 0){
        element.classList.remove("red-border")
        return true
    }else{
        element.classList.add("red-border")
    }
    return false
}

const submitForm = (e)=>{
    e.preventDefault()
    if(validate(firstName) && validate(lastName)){
        console.log("form submitted")
    }
}


submitBtn.addEventListener("click", (event) => submitForm(event))

button1.addEventListener("click", (event) => changeColor(event))
