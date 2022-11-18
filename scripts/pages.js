const homepageData = [
  {
    element: "section",
    className: "description-generale",
    children: [
      {
        element: "h2",
        className: "title",
        text: "Description générale",
      },
      {
        element: "p",
        className: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In molestiae culpa placeat, sunt quod minus hic? Quidem eaque explicabo obcaecati libero, architecto facere itaque, tempora officia odio beatae pariatur dolore dignissimos adipisci. Iusto facere aliquid soluta laudantium impedit deserunt deleniti necessitatibus beatae, excepturi aperiam quibusdam repellendus distinctio suscipit ducimus labore, consectetur sed nihil odio. Aspernatur nesciunt dolorum hic modi reprehenderit error labore praesentium cum ea beatae tenetur laborum libero, porro nam, perspiciatis deserunt in, omnis accusamus delectus earum facere? Voluptatem.",
      },
    ],
  },
  {
    element: "hr",
    className: "separator",
  },
  {
    element: "section",
    className: "infos-pratiques",
    children: [
      {
        element: "h2",
        className: "title",
        text: "Infos pratiques",
      },
      {
        element: "p",
        className: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In molestiae culpa placeat, sunt quod minus hic? Quidem eaque explicabo obcaecati libero, architecto facere itaque, tempora officia odio beatae pariatur dolore dignissimos adipisci. Iusto facere aliquid soluta laudantium impedit deserunt deleniti necessitatibus beatae, excepturi aperiam quibusdam repellendus distinctio suscipit ducimus labore, consectetur sed nihil odio. Aspernatur nesciunt dolorum hic modi reprehenderit error labore praesentium cum ea beatae tenetur laborum libero, porro nam, perspiciatis deserunt in, omnis accusamus delectus earum facere? Voluptatem.",
      },
    ],
  },
];

let animals = [
  {
    id: "0",
    nom: "Eléphant",
    imgUrl: "img/elephant.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    id: "1",
    nom: "Lion",
    imgUrl: "img/lion.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    id: "2",
    nom: "Tigre",
    imgUrl: "img/tiger.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    id: "3",
    nom: "Rhynocéros",
    imgUrl: "img/rhynoceros.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
  {
    id: "4",
    nom: "Zèbre",
    imgUrl: "img/zebre.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis?",
    pays: "France",
  },
];

const virtuelAudio = [
  {
    name: "Eléphant",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    src: "audio/elephant.mp3",
  },
  {
    name: "Lion",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    src: "audio/lion.mp3",
  },
  {
    name: "Tigre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    src: "audio/tiger.mp3",
  },
  {
    name: "Zèbre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    src: "audio/zebra.mp3",
  },
];

const virtuelVideo = [
  {
    src: "video/elephant.mp4",
    subtitle: "Eléphant",
  },
  {
    src: "video/lion.mp4",
    subtitle: "Lion",
  },
];

const contactData = [
  {
    label: "nom",
    labelText: "Nom :",
    inputType: "text",
  },
  {
    label: "prenom",
    labelText: "Prénom :",
    inputType: "text",
  },
  {
    label: "mail",
    labelText: "Email :",
    inputType: "email",
  },
  {
    label: "tel",
    labelText: "Numéro de téléphone :",
    inputType: "tel",
  },
];

const animalsFormData = [
  {
    label: "name",
    labelText: "Name",
    inputType: "text",
  },
  {
    label: "country",
    labelText: "Pays natal",
    inputType: "text",
  },
];

let image = null;
let selectedRowId = null;

const mainContainer = document.querySelector(".content");

mainContainer.appendChild(homePage());

function homePage() {
  const container = document.createElement("container");
  removeChildren();

  homepageData.forEach((data) => {
    const element1 = document.createElement(data.element);
    container.appendChild(element1);
    element1.classList.add(data.className);

    if (data.children) {
      data.children.forEach((child) => {
        const element2 = document.createElement(child.element);
        if (child.className) {
          element2.classList.add(child.className);
        }

        const text = document.createTextNode(child.text);
        element2.appendChild(text);

        element1.appendChild(element2);
      });
    }

    container.appendChild(element1);
  });

  return container;
}

function animalsPage() {
  removeChildren();

  const addButton = document.createElement("button");
  addButton.classList.add("primary-button");
  addButton.classList.add("ripple");
  addButton.appendChild(document.createTextNode("Ajouter"));
  addButton.addEventListener("click", openModal);
  mainContainer.appendChild(addButton);

  const table = createTable();

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  animals.forEach((animal) => {
    const tr = document.createElement("tr");

    const id = document.createElement("input");
    id.classList.add("id");
    id.setAttribute("type", "hidden");
    id.value = animal.id;
    tr.appendChild(id);

    const tdNom = createNameColumn(animal);
    tr.appendChild(tdNom);

    const tdDesc = createDescription(animal);
    tr.appendChild(tdDesc);

    const tdPays = createCountry(animal);
    tr.appendChild(tdPays);

    const tdBtns = createButtons();
    tr.appendChild(tdBtns);

    tbody.appendChild(tr);
  });

  mainContainer.appendChild(table);

  createModal();

  const modal = document.querySelector("#modal-close");
  modal.onclick = function () {
    document.querySelector("#modal").style.display = "none";
  };
}

function virtuelAudioPage() {
  removeChildren();

  const section = document.createElement("section");
  section.classList.add("audio-container");

  virtuelAudio.forEach((line) => {
    const div = document.createElement("div");
    div.classList.add("audio-line");
    section.appendChild(div);

    const h3 = document.createElement("h3");
    h3.classList.add("subtitle");
    h3.appendChild(document.createTextNode(line.name));
    div.appendChild(h3);

    const span = document.createElement("span");
    span.appendChild(document.createTextNode(line.text));
    div.appendChild(span);

    const audio = document.createElement("audio");
    audio.controls = true;
    div.appendChild(audio);

    const source = document.createElement("source");
    source.setAttribute("src", "audio/lion.mp3");
    source.setAttribute("type", "audio/mpeg");
    audio.appendChild(source);

    const hr = document.createElement("hr");
    hr.classList.add("separator");
    section.appendChild(hr);
  });

  mainContainer.appendChild(section);

  document.querySelector("audio").autoplay = true;
}

function virtuelVideoPage() {
  removeChildren();

  const div = document.createElement("div");
  div.classList.add("video-container");

  virtuelVideo.forEach((line) => {
    const videoLine = document.createElement("div");
    videoLine.classList.add("video-line");
    div.appendChild(videoLine);

    const video = document.createElement("video");
    video.controls = true;
    video.setAttribute("width", "100%");
    video.setAttribute("height", "100%");
    videoLine.appendChild(video);

    const source = document.createElement("source");
    source.setAttribute("src", line.src);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    const h3 = document.createElement("h3");
    h3.classList.add("subtitle");
    videoLine.appendChild(h3);
  });

  mainContainer.appendChild(div);

  document.querySelector("video").autoplay = true;
}

function contactPage() {
  removeChildren();

  const form = document.createElement("form");
  form.classList.add("form");

  contactData.forEach((row) => {
    const div = document.createElement("div");
    div.classList.add("row");
    form.appendChild(div);

    const label = document.createElement("label");
    label.setAttribute("for", row.label);
    label.appendChild(document.createTextNode(row.labelText));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));

    const input = document.createElement("input");
    input.setAttribute("type", row.inputType);
    input.setAttribute("id", row.label);
    input.setAttribute("name", row.label);
    div.appendChild(input);
  });

  const div = document.createElement("div");
  div.classList.add("row");
  form.appendChild(div);

  const label = document.createElement("label");
  label.setAttribute("for", "message");
  label.appendChild(document.createTextNode("Message :"));
  div.appendChild(label);
  div.appendChild(document.createElement("br"));

  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "message");
  textarea.setAttribute("id", "message");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("rows", "10");
  form.appendChild(textarea);

  const button = document.createElement("button");
  button.classList.add("primary-button");
  button.classList.add("form-button");
  button.setAttribute("type", "submit");
  button.appendChild(document.createTextNode("Envoyer"));
  form.appendChild(button);

  mainContainer.appendChild(form);
}

function createTable() {
  const titles = ["Nom", "Description", "Pays natal", ""];

  const table = document.createElement("table");
  table.classList.add("animals_table");
  const thead = document.createElement("thead");
  table.appendChild(thead);
  const tr = document.createElement("tr");
  thead.appendChild(tr);

  titles.forEach((title) => {
    const th = document.createElement("th");
    th.classList.add("cell-title");
    th.setAttribute("scope", "col");
    th.appendChild(document.createTextNode(title));
    tr.appendChild(th);
  });

  return table;
}

function createCountry(animal) {
  const tdPays = document.createElement("td");
  tdPays.setAttribute("data-label", "Pays");
  tdPays.setAttribute("id", "pays");
  const tdPaysText = document.createTextNode(animal.pays);
  tdPays.appendChild(tdPaysText);
  return tdPays;
}

function createDescription(animal) {
  const tdDesc = document.createElement("td");
  tdDesc.classList.add("start");
  tdDesc.setAttribute("data-label", "Description");

  const span = document.createElement("span");
  span.classList.add("desc");
  const spantext = document.createTextNode(animal.description);
  span.appendChild(spantext);
  tdDesc.appendChild(span);
  return tdDesc;
}

function createNameColumn(animal) {
  const tdNom = document.createElement("td");
  tdNom.setAttribute("scope", "row");
  tdNom.setAttribute("data-label", "Nom");

  const figure = document.createElement("figure");
  figure.classList.add("img");
  tdNom.appendChild(figure);

  const img = document.createElement("img");
  img.setAttribute("src", animal.imgUrl);
  img.setAttribute("width", "130px");
  img.setAttribute("alt", "Elephant");
  figure.appendChild(img);

  const figCaption = document.createElement("figcaption");
  const figCaptionText = document.createTextNode(animal.nom);
  figCaption.classList.add("center");
  figCaption.appendChild(figCaptionText);
  figure.appendChild(figCaption);
  return tdNom;
}

function createButtons() {
  const tdBtns = document.createElement("td");
  tdBtns.classList.add("center");
  tdBtns.classList.add("btn_row");
  tdBtns.setAttribute("data-label", "");

  const agrandirBtn = document.createElement("button");
  agrandirBtn.classList.add("primary-button");
  agrandirBtn.classList.add("ripple");
  agrandirBtn.appendChild(document.createTextNode("Agrandir"));
  tdBtns.appendChild(agrandirBtn);

  const modifierBtn = document.createElement("button");
  modifierBtn.classList.add("primary-button");
  modifierBtn.classList.add("ripple");
  modifierBtn.appendChild(document.createTextNode("Modifier"));
  modifierBtn.addEventListener("click", openModal);
  tdBtns.appendChild(modifierBtn);

  const supprimerBtn = document.createElement("button");
  supprimerBtn.classList.add("primary-button");
  supprimerBtn.classList.add("ripple");
  supprimerBtn.classList.add("danger");
  supprimerBtn.addEventListener("click", deleteAnimal);
  supprimerBtn.appendChild(document.createTextNode("Supprimer"));
  tdBtns.appendChild(supprimerBtn);
  return tdBtns;
}

function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "modal");

  const modalBack = document.createElement("div");
  modalBack.classList.add("modal-back");
  modal.appendChild(modalBack);

  // contenu de la modale
  const modalContainer = createInputInModal();

  // Textarea
  createTextArea(modalContainer);

  // image upload
  manageImageUpload(modalContainer);

  // bouton ajouter
  createAddButton(modalContainer);

  // close button
  createCloseButton(modalContainer);

  modal.appendChild(modalContainer);
  mainContainer.appendChild(modal);
}

function createInputInModal() {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  animalsFormData.forEach((row) => {
    const div = document.createElement("div");
    div.classList.add("row-animals");
    modalContainer.appendChild(div);

    const label = document.createElement("label");
    label.setAttribute("for", row.label);
    label.appendChild(document.createTextNode(row.labelText));
    div.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", row.inputType);
    input.setAttribute("id", row.label);
    input.setAttribute("name", row.label);
    div.appendChild(input);

    modalContainer.appendChild(div);
  });
  return modalContainer;
}

function createTextArea(modalContainer) {
  const div = document.createElement("div");
  div.classList.add("row-animals");
  modalContainer.appendChild(div);

  const label = document.createElement("label");
  label.setAttribute("for", "description");
  label.appendChild(document.createTextNode("Description :"));
  div.appendChild(label);

  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", "description");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("rows", "10");
  div.appendChild(textarea);
}

function createAddButton(modalContainer) {
  const ajouterBtn = document.createElement("button");
  ajouterBtn.classList.add("primary-button");
  ajouterBtn.classList.add("ripple");
  ajouterBtn.setAttribute("id", "addButton");
  ajouterBtn.appendChild(document.createTextNode("Ajouter"));
  ajouterBtn.setAttribute("onclick", "addAnimal()");
  modalContainer.appendChild(ajouterBtn);
}

function createCloseButton(modalContainer) {
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("primary-button");
  closeBtn.classList.add("ripple");
  closeBtn.classList.add("danger");
  closeBtn.setAttribute("id", "modal-close");
  closeBtn.appendChild(document.createTextNode("Annuler"));
  modalContainer.appendChild(closeBtn);
}

function manageImageUpload(modalContainer) {
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("row-animals");

  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("name", "file");
  fileInput.setAttribute("id", "file");
  imgDiv.appendChild(fileInput);

  const img = document.createElement("img");
  img.classList.add("img-div");
  imgDiv.appendChild(img);

  fileInput.addEventListener("change", (e) => {
    let file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      image = fileReader.result;
      img.setAttribute("src", fileReader.result);
    };
  });

  modalContainer.appendChild(imgDiv);
}

function addAnimal() {
  const modalContainer = document.querySelector(".modal-container");
  const nameValue = document.querySelector("#name").value;
  const countryValue = document.querySelector("#country").value;
  const descriptionValue = document.querySelector("#description").value;

  if (nameValue && countryValue && descriptionValue && image) {
    animals.push({
      id: crypto.randomUUID(),
      nom: nameValue,
      imgUrl: image,
      description: descriptionValue,
      pays: countryValue,
    });

    removeChildren();

    animalsPage();

    document.querySelector("#modal").style.display = "none";
  } else {
    const alert = document.createElement("span");
    alert.appendChild(
      document.createTextNode("Tous les champs sont obligatoires")
    );
    modalContainer.appendChild(alert);
  }
}

function deleteAnimal(event) {
  const row = getParentNode(event.target, 2);
  const id = row.querySelector(".id").value;
  removeObjectWithId(animals, id);
  row.remove();
}

function modifyAnimal(event) {
  const modalContainer = document.querySelector(".modal-container");
  const nameValue = document.querySelector("#name").value;
  const countryValue = document.querySelector("#country").value;
  const descriptionValue = document.querySelector("#description").value;

  if (nameValue && countryValue && descriptionValue) {
    const foundIndex = animals.findIndex((x) => x.id == selectedRowId);

    animals[foundIndex] = {
      id: animals[foundIndex].id,
      nom: nameValue,
      imgUrl: image ? image : animals[foundIndex].imgUrl,
      description: descriptionValue,
      pays: countryValue,
    };

    removeChildren();

    animalsPage();

    document.querySelector("#modal").style.display = "none";
  } else {
    const alert = document.createElement("span");
    alert.appendChild(
      document.createTextNode("Tous les champs sont obligatoires")
    );
    modalContainer.appendChild(alert);
  }
}

function openModal(event) {
  const selectedNodes = event.target.parentElement.parentElement;

  const button = document.querySelector("#addButton");
  const name = selectedNodes.querySelector("figcaption").textContent;
  const description = selectedNodes.querySelector(".desc").textContent;
  const pays = selectedNodes.querySelector("#pays").textContent;
  const img = selectedNodes.querySelector("img").src;

  row = getParentNode(event.target, 2);
  selectedRowId = row.querySelector(".id").value;

  if (event.target.textContent === "Modifier") {
    document.querySelector("#name").value = name;

    document.querySelector("#description").value = description;

    document.querySelector("#country").value = pays;

    document.querySelector(".img-div").src = img;

    button.textContent = "Modifier";
    button.removeEventListener("click", addAnimal);
    button.addEventListener("click", modifyAnimal);
  } else {
    document.querySelector("#name").value = "";

    document.querySelector("#description").value = "";

    document.querySelector("#country").value = "";

    document.querySelector(".img-div").src = "";

    button.textContent = "Ajouter";
    button.removeEventListener("click", modifyAnimal);
    button.addEventListener("click", addAnimal);
  }

  document.getElementById("modal").style.display = "block";
}

function removeChildren() {
  while (mainContainer.firstChild) {
    mainContainer.firstChild.remove();
  }
}

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);

  return arr;
}

function getParentNode(element, level = 1) {
  while (level-- > 0) {
    element = element.parentNode;
    if (!element) return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
  }
  return element;
}
