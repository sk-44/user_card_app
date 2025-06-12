

let innerFlex = document.createElement("div");
innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

let cardDiv = document.createElement("div");
innerFlex.append(cardDiv);

cardDiv.classList.add("d-flex", "col-12", "profile-card");

console.log(innerFlex);