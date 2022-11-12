let menuContent = {
  animaux: {
    text: "Animaux",
    url: "animalsPage()",
    children: {},
  },
  audio: {
    text: "Visite virtuelle audio",
    url: "virtuelAudioPage()",
    children: {},
  },
  video: {
    text: "Visite virtuelle video",
    url: "virtuelVideoPage()",
    children: {},
  },
  contact: {
    text: "Contact",
    url: "contactPage()",
    children: {},
  },
  espacePerso: {
    text: "Espace perso.",
    url: "#",
    children: {
      connexion: {
        text: "Connexion",
        url: "",
        children: {},
      },
      messagerie: {
        text: "Messagerie",
        url: "",
        children: {},
      },
      historique: {
        text: "Historique",
        url: "",
        children: {},
      },
      informations: {
        text: "Mes informations",
        url: "#",
        children: {
          nom: {
            text: "Nom & prénom",
            url: "",
            children: {},
          },
          telephone: {
            text: "Numéro de téléphone",
            url: "",
            children: {},
          },
          email: {
            text: "Email",
            url: "",
            children: {},
          },
        },
      },
    },
  },
};

let topNav = document.getElementById("myTopnav");

Object.entries(menuContent).forEach(([key, value]) => {
  let dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  let button = document.createElement("a");
  button.setAttribute("onclick", value.url);
  let buttonText = document.createTextNode(value.text);
  let icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-caret-down");
  button.classList.add("dropbtn");
  button.appendChild(buttonText);
  dropdown.appendChild(button);
  topNav.appendChild(dropdown);

  if (Object.keys(value.children).length) {
    button.appendChild(icon);
    dropdown.appendChild(button);
    topNav.appendChild(dropdown);

    let dropDownContent = document.createElement("div");
    dropDownContent.classList.add("dropdown-content");
    dropdown.appendChild(dropDownContent);

    let listContainerLev1 = document.createElement("ul");
    listContainerLev1.classList.add("list-container-lev1");
    dropDownContent.appendChild(listContainerLev1);

    Object.entries(value.children).forEach(([key, value]) => {
      let subItem = document.createElement("li");
      subItem.classList.add("list-element");
      let link = document.createElement("a");
      link.setAttribute("onclick", value.url);
      let linkText = document.createTextNode(value.text);
      link.appendChild(linkText);
      subItem.appendChild(link);

      listContainerLev1.appendChild(subItem);

      // on vérifie si le lien a des enfants
      if (Object.keys(value.children).length) {
        let icon = document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add("fa-caret-down");
        link.appendChild(icon);

        let listContainerLev2 = document.createElement("ul");
        listContainerLev2.classList.add("list-container-lev2");
        subItem.classList.add("hover-drop");
        subItem.appendChild(listContainerLev2);

        Object.entries(value.children).forEach(([key, value]) => {
          let subItem = document.createElement("li");
          subItem.classList.add("list-element");
          let link = document.createElement("a");
          link.setAttribute("onclick", value.url);
          let linkText = document.createTextNode(value.text);
          link.appendChild(linkText);
          subItem.appendChild(link);

          listContainerLev2.appendChild(subItem);
        });
      }
    });
  }
});

// activation du lien cliqué
let links = document.querySelectorAll(".dropbtn");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.querySelector(".active");
    if (current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
}

/**
 * Permet de dérouler le menu en mode mobile
 */
function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
