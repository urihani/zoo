let menuContent = {
  accueil: {
    text: "PZG",
    url: "",
    iconClass: "fa-solid fa-house",
    children: {},
  },
  animaux: {
    text: "Animaux",
    url: "",
    iconClass: "",
    children: {},
  },
  audio: {
    text: "Visite virtuelle audio",
    url: "",
    iconClass: "",
    children: {},
  },
  video: {
    text: "Visite virtuelle video",
    url: "",
    iconClass: "",
    children: {},
  },
  contact: {
    text: "Contact",
    url: "",
    iconClass: "",
    children: {},
  },
  espacePerso: {
    text: "Espace perso.",
    url: "#",
    iconClass: "fa fa-caret-down",
    children: {
      connexion: {
        text: "Connexion",
        url: "",
        iconClass: "",
        children: {},
      },
      messagerie: {
        text: "Messagerie",
        url: "",
        iconClass: "",
        children: {},
      },
      historique: {
        text: "Historique",
        url: "",
        iconClass: "",
        children: {},
      },
      informations: {
        text: "Mes informations",
        url: "#",
        iconClass: "",
        children: {
          nom: {
            text: "Nom & prénom",
            url: "",
            iconClass: "",
            children: {},
          },
          telephone: {
            text: "Numéro de téléphone",
            url: "",
            iconClass: "",
            children: {},
          },
          email: {
            text: "Email",
            url: "",
            iconClass: "",
            children: {},
          },
        },
      },
    },
  },
};

window.addEventListener("load", init, false);

/**
 * Génération du menu - Maximum 2 niveaux d'imbrication
 */
function init() {
  let topNav = document.getElementById("myTopnav");

  Object.entries(menuContent).forEach(([key, value]) => {
    // console.log("------------------------------------");
    // console.log("Key : ", JSON.stringify(key, null, 4));
    // console.log("Value : ", JSON.stringify(value, null, 4));

    let dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    let button = document.createElement("a");
    button.href = value.url;
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
        // console.log("------------------------------------");
        // console.log("Key : ", JSON.stringify(key, null, 4));
        // console.log("Value : ", JSON.stringify(value, null, 4));

        let subItem = document.createElement("li");
        subItem.classList.add("list-element");
        let link = document.createElement("a");
        link.href = value.url;
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
            console.log("------------------------------------");
            console.log("Key : ", JSON.stringify(key, null, 4));
            console.log("Value : ", JSON.stringify(value, null, 4));

            let subItem = document.createElement("li");
            subItem.classList.add("list-element");
            let link = document.createElement("a");
            link.href = value.url;
            let linkText = document.createTextNode(value.text);
            link.appendChild(linkText);
            subItem.appendChild(link);

            listContainerLev2.appendChild(subItem);
          });
        }
      });
    }
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
