// MILESTONE 0
let workers = 
[
    {
        name_surname: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"

    },
    {
        name_surname: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"

    },
    {
        name_surname: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"

    },
    {
        name_surname: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"

    },
    {
        name_surname: "Scott Estrada",
        role: "Developer",
        image:"scott-estrada-developer.jpg"
    },
    {
        name_surname: "Barbara Ramos",
        role: "Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg"
    }
]

let workersList;
let workList = document.getElementById('list');

// BONUS 1

for(let i=0; i<workers.length; i++){
    workersList = document.createElement('p');
    workList.append(workersList);
    workersList.innerHTML = 
    `<h5>${workers[i].name_surname}</h5>
    <div>${workers[i].role}</div>
    <img src="./img/${workers[i].image}">`;
};

