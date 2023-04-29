let myLeads = []
let oldLeads = []

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

// console.log(myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
console.log(deleteBtn)

const leadsfromLocalStorage = JSON.parse(localStorage.getItem(myLeads))
console.log(leadsfromLocalStorage)
const tabBtn = document.getElementById("tab-btn")


 // TO SAVE TABS...
// tabBtn.addEventListener("click", function(){
//     //console.log(tabs[0].url)
//      chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         renderLeads(myLeads)
//      }  
//     )
   
// } )

if(leadsfromLocalStorage){
    myLeads = leadsfromLocalStorage
    renderLeads(myLeads)
}
 
deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

function renderLeads(myLeads){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        // Makes every input to be represented in an a list
        //listItems += "<li><a target ='_blank' href = '"+ myLeads[i] +"'>" + myLeads[i] + " " + "</a></li>"
        listItems += `<li>
                            <a target ='_blank' href = ${myLeads[i]} >
                             ${myLeads[i]} 
                            </a>
                        </li>`
        
        console.log(listItems)
        // represents the HTML elements
        ulEl.innerHTML = listItems  
     
}
}
//localStorage.setItem("myLeads", "www.oct.com")
console.log(localStorage.getItem("myLeads"))



inputBtn.addEventListener("click", function(){
    //collects value from the field 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    renderLeads(myLeads)
})

