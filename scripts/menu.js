let menuContent = {
  accueil: {
    text: "Accueil",
    url: "",
    children: {},
  },
  animaux: {
    text: "Animaux",
    url: "",
    children: {},
  },
  audio: {
    text: "Visite virtuelle audio",
    url: "",
    children: {},
  },
  video: {
    text: "Visite virtuelle video",
    url: "",
    children: {},
  },
  contact: {
    text: "Contact",
    url: "",
    children: {},
  },
  espacePerso: {
    text: "Espace perso.",
    url: "",
    children: {
      connexion: {
        text: "Connexion",
        url: "",
        children: {},
      },
      informations: {
        text: "Mes informations",
        url: "",
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
    },
  },
};

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
