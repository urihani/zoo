let animals = [
  {
    nom: "Eléphant",
    imgUrl: "img/elephant.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    nom: "Lion",
    imgUrl: "img/lion.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    nom: "Tigre",
    imgUrl: "img/tiger.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    nom: "Rhynocéros",
    imgUrl: "img/rhynoceros.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    nom: "Zèbre",
    imgUrl: "img/zebre.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
];

function initTable() {
  let table = document.querySelector(".animals_table");

  animals.forEach((animal) => {
    let tr = document.createElement("tr");

    let tdNom = createNameColumn(animal);
    tr.appendChild(tdNom);

    let tdDesc = createDescription(animal);
    tr.appendChild(tdDesc);

    let tdPays = createCountry(animal);
    tr.appendChild(tdPays);

    let tdBtns = createButtons();
    tr.appendChild(tdBtns);

    table.appendChild(tr);
  });
}

function createCountry(animal) {
  let tdPays = document.createElement("td");
  tdPays.setAttribute("data-label", "Pays");
  let tdPaysText = document.createTextNode(animal.pays);
  tdPays.appendChild(tdPaysText);
  return tdPays;
}

function createDescription(animal) {
  let tdDesc = document.createElement("td");
  tdDesc.classList.add("start");
  tdDesc.setAttribute("data-label", "Description");

  let span = document.createElement("span");
  span.classList.add("desc");
  let spantext = document.createTextNode(animal.description);
  span.appendChild(spantext);
  tdDesc.appendChild(span);
  return tdDesc;
}

function createNameColumn(animal) {
  let tdNom = document.createElement("td");
  tdNom.setAttribute("scope", "row");
  tdNom.setAttribute("data-label", "Nom");

  let figure = document.createElement("figure");
  figure.classList.add("img");
  tdNom.appendChild(figure);

  let img = document.createElement("img");
  img.setAttribute("src", animal.imgUrl);
  img.setAttribute("width", "130px");
  img.setAttribute("alt", "Elephant");
  figure.appendChild(img);

  let figCaption = document.createElement("figcaption");
  let figCaptionText = document.createTextNode(animal.nom);
  figCaption.classList.add("center");
  figCaption.appendChild(figCaptionText);
  figure.appendChild(figCaption);
  return tdNom;
}

function createButtons() {
  let tdBtns = document.createElement("td");
  tdBtns.classList.add("center");
  tdBtns.classList.add("btn_row");
  tdBtns.setAttribute("data-label", "");

  let agrandirBtn = document.createElement("button");
  agrandirBtn.classList.add("primary-button");
  agrandirBtn.classList.add("ripple");
  agrandirBtn.appendChild(document.createTextNode("Agrandir"));
  tdBtns.appendChild(agrandirBtn);

  let modifierBtn = document.createElement("button");
  modifierBtn.classList.add("primary-button");
  modifierBtn.classList.add("ripple");
  modifierBtn.appendChild(document.createTextNode("Modidier"));
  tdBtns.appendChild(modifierBtn);

  let supprimerBtn = document.createElement("button");
  supprimerBtn.classList.add("primary-button");
  supprimerBtn.classList.add("ripple");
  supprimerBtn.classList.add("danger");
  supprimerBtn.appendChild(document.createTextNode("Supprimer"));
  tdBtns.appendChild(supprimerBtn);
  return tdBtns;
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function addAnimal() {}
