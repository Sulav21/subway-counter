
let countPeople = document.getElementById("counter")
document.getElementById("#incrementbtn")
document.getElementById("#saveBtn")
let saveEL = document.getElementById("save-el")

let count = 0
// incrementbtn.onclick = 
function increment(){
    
count += 1
countPeople.innerText = count 
}

function save(){
// let totalCount = count
saveEL.innerHTML += count+" "+"-"
count = 0 
countPeople.innerText = count 
}

