// <div class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
//     <div class="d-flex align-items-center col-md-7 col-10 m-1">
//         <div class="d-flex col-12 profile-card">
//
//             左半分
//             <div class="col-8 py-3">
//                 <h4>Kaiden Herman</h4>
//                 <div class="py-2">
//                     <p>Job : <br>Software Engineer</p>
//                 </div>
//                 <div class="py-2">
//                     <p>Skill : <br>C++, C#, Java, PHP, JavaScript, Python</p>
//                 </div>
//                 <div class="py-2">
//                     <p>Country :<br>United States</p>
//                 </div>
//             </div>

//         </div>
//     </div>
// </div>

let innerFlex = document.createElement("div");
innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

let cardDiv = document.createElement("div");
innerFlex.append(cardDiv);
cardDiv.classList.add("d-flex", "col-12", "profile-card");

let leftHalf = document.createElement("div");
leftHalf.classList.add("col-8", "py-3");
let nameHeading = document.createElement("h4");
nameHeading.innerHTML = "Kaiden Herman";
leftHalf.append(nameHeading);

let paragraphDiv = document.createElement("div");
paragraphDiv.classList.add("py-2");

let jobParagraphDiv = paragraphDiv.cloneNode(true);
let skillParagraphDiv = paragraphDiv.cloneNode(true);
let countryParagraphDiv = paragraphDiv.cloneNode(true);

let jobParagraphP = document.createElement("p");
jobParagraphP.innerHTML = "Job : <br>Software Engineer";
jobParagraphDiv.append(jobParagraphP);
let skillParagraphP = document.createElement("p");
skillParagraphP.innerHTML = "Skill : <br>C++, C#, Java, PHP, JavaScript, Python";
skillParagraphDiv.append(skillParagraphP);
let countryParagraphP = document.createElement("p");
countryParagraphP.innerHTML = "Country :<br>United States";
countryParagraphDiv.append(countryParagraphP);

leftHalf.append(jobParagraphDiv, skillParagraphDiv, countryParagraphDiv);
cardDiv.append(leftHalf);

console.log(leftHalf);