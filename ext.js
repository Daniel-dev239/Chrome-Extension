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
    /* So the issue with the delete button not working was you where not updating the 
    
       ul element when you double click so your renderLeads(myLeads) call on line 41 was just 
       rendering an empty array which means that the for loop will not run since the condition
       i < myLeads.length will fail , (myLeads is empty) . So an easy work around is to create a 
       condition around the loop to run only if myLeads is not empty otherwise the ul element 
       should be emptied, ulEl.innerHTML = ""
     */
    if(myLeads.length){
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

    }else{
        ulEl.innerHTML = ""
    }
}
//localStorage.setItem("myLeads", "www.oct.com")
console.log(localStorage.getItem("myLeads"))

console.log(inputEl.value);

inputBtn.addEventListener("click", function(){
    //collects value from the field 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    renderLeads(myLeads)
})

