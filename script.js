// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");


const table = document.createElement("table");
const tr = document.createElement("tr");
tr.innerHTML = `<th>Name</th><th>Score</th>`
table.append(tr);
// Save score to Local Storage
function saveScore() {
  // complete the code here
	scores.append(table);
    let nameInput = document.getElementById("name").value;
    let scoreInput = document.getElementById("score").value;
    if(scoreInput==""){
        scoreInput= "No scores yet";
    }
    let tr = document.createElement("tr");
    tr.innerHTML= `<td>${nameInput}</td><td>${scoreInput}</td>`
    table.appendChild(tr); 
    localStorage.setItem("table",JSON.stringify(table));

  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
	let tableData = JSON.parse(localStorage.getItem("table")) 
    // scores.innerText = table 	
}