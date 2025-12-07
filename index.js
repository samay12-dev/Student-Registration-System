
let table=document.querySelector("table")
let tbody=document.querySelector("#tbody")
let btn=document.querySelector("#register")
let instructionsBtn=document.querySelector("#btn1 button")
let instructionsDiv=document.querySelector("#instructions")

// Toggle instructions visibility
instructionsBtn.addEventListener("click", ()=>{
    instructionsDiv.classList.toggle("show")
})

// Register button functionality
btn.addEventListener("click",()=>{
    let name= document.querySelector(".name").value
let email=document.querySelector(".email").value
let studentId=document.querySelector(".studentid").value

let new_tr= document.createElement("tr")
new_tr.classList.add("table_row");
let new_td= document.createElement("td")
let new_td1=document.createElement("td")
let new_td2=document.createElement("td")
new_td.textContent=name
new_td1.textContent=email
new_td2.textContent=studentId
new_tr.appendChild(new_td)
new_tr.appendChild(new_td1)
new_tr.appendChild(new_td2)
tbody.appendChild(new_tr)

})