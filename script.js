
const submitButton = document.getElementById("submitUser");
const testButton = document.getElementById("testButton");
const tableVar = document.getElementById("table")


let users = 
[
    {
        "Username": "Mobambi",
        "Rank": "Challenger",
        "MMR": "2500"
    },
    {
        "Username": "Gforce",
        "Rank": "Dirty Napkin",
        "MMR": "3"
    },

    {
        "Username": "Koolk",
        "Rank": "Diamond",
        "MMR": "750"
    }
]




function testbutton() {
    console.log("User Submitted")
}


function addRow() {
    
    let table = document.getElementById("table");
    
    var length = Object.keys(users).length;
    
    for (let i = 0; i < length; i++) {
        console.log(i)

        let row = table.insertRow(-1);

        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);

        c1.innerText = users[i].Username
        c2.innerText = users[i].MMR
      }
    
    
    
 }

 

