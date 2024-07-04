import { render, screen } from "@testing-library/react";
import ModalEvent from "./index";


const data = {
  type: "soirée entreprise",
  date: "2022-04-29T20:28:45.744Z",
  title: "Conférence #productCON",
  cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
  description:
    "Présentation des outils analytics aux professionnels du secteur",
  nb_guesses: 1300,
  periode: "24-25-26 Février",
  prestations: [
    "1 espace d’exposition",
    "1 scéne principale",
    "2 espaces de restaurations",
    "1 site web dédié",
  ],
};


// Début du bloc de tests pour la création des données du Modal
describe("When Modal data is created", () => {
  // Test pour vérifier si une liste de données obligatoires est affichée
  it("a list of mandatories data is displayed", async () => {
    // Rendu du composant ModalEvent avec un objet de données en prop
    render(<ModalEvent event={data} />);
    // Recherche des textes "1 espace d’exposition", "24-25-26 Février", "Présentation des outils analytics aux professionnels du secteur" et "Conférence #productCON" dans le document
    // Ces opérations sont asynchrones car elles attendent que les textes apparaissent
    await screen.findByText("1 espace d’exposition");
    await screen.findByText("24-25-26 Février");
    await screen.findByText(
      "Présentation des outils analytics aux professionnels du secteur"
    );
    await screen.findByText("Conférence #productCON");
  });
});
