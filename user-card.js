// <div class="bg-dark d-flex flex-column justify-content-center align-items-center">
//     <div class="d-flex align-items-center col-md-7 col-10 m-1">
//         <div class="d-flex col-12 profile-card">
//             <div class="col-8 py-3">
//                 <h4>Kaiden Herman</h4>
//                 <div class="py-2">
//                     <p>Job :</p>
//                     <p>Software Engineer</p>
//                 </div>
//                 <div class="py-2">
//                     <p>Skill :</p>
//                     <p>C++, C#, Java, PHP, JavaScript, Python</p>
//                 </div>
//                 <div class="py-2">
//                     <p>Country :</p>
//                     <p>United States</p>
//                 </div>
//             </div>
//             <div class="col-4 d-flex justify-content-center align-items-center">
//                 <div>
//                     <img class="avatar" src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg">
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// 関数名：createEmployeeCard
// 入力：employeeName, job, skills, country, avatarUrl
// 出力：カードが含まれる要素(div)
function createEmployeeCard(employee) {
    let innerFlex = document.createElement("div");
    innerFlex.classList.add("d-flex", "align-items-center", "col-md-7", "col-10", "m-1");

    let cardDiv = document.createElement("div");
    innerFlex.append(cardDiv);
    cardDiv.classList.add("d-flex", "col-12", "profile-card");

    let leftHalf = document.createElement("div");
    leftHalf.classList.add("col-8", "py-3");
    let nameHeading = document.createElement("h4");
    nameHeading.innerHTML = employee.getFullName();
    leftHalf.append(nameHeading);

    let paragraphDiv = document.createElement("div");
    paragraphDiv.classList.add("py-2");

    let jobParagraphDiv = paragraphDiv.cloneNode(true);
    let skillParagraphDiv = paragraphDiv.cloneNode(true);
    let countryParagraphDiv = paragraphDiv.cloneNode(true);

    let jobParagraphP = document.createElement("p");
    jobParagraphP.innerHTML = "Job : <br>" + employee.job;
    jobParagraphDiv.append(jobParagraphP);
    let skillParagraphP = document.createElement("p");
    skillParagraphP.innerHTML = "Skill : <br>" + employee.skills;
    skillParagraphDiv.append(skillParagraphP);
    let countryParagraphP = document.createElement("p");
    countryParagraphP.innerHTML = "Country :<br>" + employee.country;
    countryParagraphDiv.append(countryParagraphP);

    leftHalf.append(jobParagraphDiv, skillParagraphDiv, countryParagraphDiv);
    cardDiv.append(leftHalf);

    let rightHalf = document.createElement("div");
    rightHalf.classList.add("col-4", "d-flex", "justify-content-center", "align-items-center");
    let avatarDiv = document.createElement("div");
    rightHalf.append(avatarDiv);
    let avatarImg = document.createElement("img");
    avatarImg.classList.add("avatar");
    avatarImg.src = employee.avatarUrl;
    avatarDiv.append(avatarImg);
    cardDiv.append(rightHalf);
    
    return innerFlex;
}

class Employee {
    constructor (firstName, lastName, job, skills, country, avatarUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = skills;
        this.country = country;
        this.avatarUrl = avatarUrl;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const profile_card = document.getElementById("profiles")

let employee1 = new Employee(
    "Kaiden",
    "Herman",
    "Software Engineer",
    "C++, C#, Java, PHP, JavaScript, Python",
    "United States",
    "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);
let employee2 = new Employee(
    "Elizabeth",
    "Dunn",
    "Accountant",
    "Excel, Word, Quickbooks",
    "England",
    "https://randomuser.me/api/portraits/women/76.jpg"
);
let employee3 = new Employee(
    "Duan",
    "Moreno",
    "Teacher",
    "Working with children, History, Word",
    "Argentina",
    "https://randomuser.me/api/portraits/med/men/93.jpg"
);

employee1 = createEmployeeCard(employee1);
employee2 = createEmployeeCard(employee2);
employee3 = createEmployeeCard(employee3);
profile_card.append(employee1, employee2, employee3);