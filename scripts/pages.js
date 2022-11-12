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

const animals = [
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

let mainContainer = document.querySelector(".content");

mainContainer.appendChild(homePage());

function homePage() {
  let container = document.createElement("container");
  removeChildren();

  homepageData.forEach((data) => {
    let element1 = document.createElement(data.element);
    container.appendChild(element1);
    element1.classList.add(data.className);

    if (data.children) {
      data.children.forEach((child) => {
        let element2 = document.createElement(child.element);
        if (child.className) {
          element2.classList.add(child.className);
        }

        let text = document.createTextNode(child.text);
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

  let table = createTable();

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

  mainContainer.appendChild(table);
}

function virtuelAudioPage() {
  removeChildren();

  let section = document.createElement("section");
  section.classList.add("audio-container");

  virtuelAudio.forEach((line) => {
    let div = document.createElement("div");
    div.classList.add("audio-line");
    section.appendChild(div);

    let h3 = document.createElement("h3");
    h3.classList.add("subtitle");
    h3.appendChild(document.createTextNode(line.name));
    div.appendChild(h3);

    let span = document.createElement("span");
    span.appendChild(document.createTextNode(line.text));
    div.appendChild(span);

    let audio = document.createElement("audio");
    audio.controls = true;
    div.appendChild(audio);

    let source = document.createElement("source");
    source.setAttribute("src", "audio/lion.mp3");
    source.setAttribute("type", "audio/mpeg");
    audio.appendChild(source);

    let hr = document.createElement("hr");
    hr.classList.add("separator");
    section.appendChild(hr);
  });

  mainContainer.appendChild(section);

  document.querySelector("audio").autoplay = true;
}

function virtuelVideoPage() {
  removeChildren();

  let div = document.createElement("div");
  div.classList.add("video-container");

  virtuelVideo.forEach((line) => {
    let videoLine = document.createElement("div");
    videoLine.classList.add("video-line");
    div.appendChild(videoLine);

    let video = document.createElement("video");
    video.controls = true;
    video.setAttribute("width", "100%");
    video.setAttribute("height", "100%");
    videoLine.appendChild(video);

    let source = document.createElement("source");
    source.setAttribute("src", line.src);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    let h3 = document.createElement("h3");
    h3.classList.add("subtitle");
    videoLine.appendChild(h3);
  });

  mainContainer.appendChild(div);

  document.querySelector("video").autoplay = true;
}

function contactPage() {
  removeChildren();

  let form = document.createElement("form");
  form.classList.add("form");

  contactData.forEach((row) => {
    let div = document.createElement("div");
    div.classList.add("row");
    form.appendChild(div);

    let label = document.createElement("label");
    label.setAttribute("for", row.label);
    label.appendChild(document.createTextNode(row.labelText));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));

    let input = document.createElement("input");
    input.setAttribute("type", row.inputType);
    input.setAttribute("id", row.label);
    input.setAttribute("name", row.label);
    div.appendChild(input);
  });

  let textarea = document.createElement("textarea");
  textarea.setAttribute("name", "message");
  textarea.setAttribute("id", "message");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("rows", "10");
  form.appendChild(textarea);

  let button = document.createElement("button");
  button.classList.add("primary-button");
  button.classList.add("form-button");
  button.setAttribute("type", "submit");
  button.appendChild(document.createTextNode("Envoyer"));
  form.appendChild(button);

  mainContainer.appendChild(form);
}

function createTable() {
  const titles = ["Nom", "Description", "Pays natal", ""];

  let table = document.createElement("table");
  table.classList.add("animals_table");
  let thead = document.createElement("thead");
  table.appendChild(thead);
  let tr = document.createElement("tr");
  thead.appendChild(tr);

  titles.forEach((title) => {
    let th = document.createElement("th");
    th.classList.add("cell-title");
    th.setAttribute("scope", "col");
    th.appendChild(document.createTextNode(title));
    tr.appendChild(th);
  });

  return table;
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

function removeChildren() {
  while (mainContainer.firstChild) {
    mainContainer.firstChild.remove();
  }
}
