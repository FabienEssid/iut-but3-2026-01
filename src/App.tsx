import { useState } from "react";
import blueEyesImg from "./assets/images/blue-eyes-white-dragon-7485.jpg";
import darkMagicianImg from "./assets/images/dark-magician-4003.jpg";
import redEyesImg from "./assets/images/red-eyes-black-dragon-6276.jpg";
import { YugiohCard } from "./components/YugiohCard";
import { RadioFilter } from "./components/RadioFilter";
import type { YugiohCardProps } from "./types/YugiohCard";

function App() {
  const yugiohCards: YugiohCardProps[] = [
    {
      image: blueEyesImg,
      title: "Blue-Eyes White Dragon",
      attribute: "LIGHT",
      type: "Normal Monster / Dragon",
      attack: 3000,
      defense: 2500,
      isSoldOut: false,
    },
    {
      image: darkMagicianImg,
      title: "Dark Magician",
      attribute: "DARK",
      type: "Normal Monster / Spellcaster",
      attack: 2500,
      defense: 2100,
      isSoldOut: true,
    },
    {
      image: redEyesImg,
      title: "Red-Eyes Black Dragon",
      attribute: "DARK",
      type: "Normal Monster / Dragon",
      attack: 2400,
      defense: 2000,
      isSoldOut: false,
    },
  ];

  const [attributeFilter, setAttributeFilter] = useState<"ALL" | "LIGHT" | "DARK">("ALL");
  const [nameSearch, setNameSearch] = useState("");

  const filteredCards = yugiohCards.filter(
    (card) =>
      (attributeFilter === "ALL" || card.attribute === attributeFilter) &&
      card.title.toLowerCase().includes(nameSearch.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-slate-800 p-4 text-center text-xl font-bold text-white">iut-but3-2026-01</header>

      <main className="flex flex-1 flex-col gap-6 bg-slate-100 p-4">
        <div className="flex gap-4">
          <RadioFilter
            name="attribute-filter"
            value="ALL"
            checked={attributeFilter === "ALL"}
            onChange={() => setAttributeFilter("ALL")}
          >
            Tous
          </RadioFilter>
          <RadioFilter
            name="attribute-filter"
            value="LIGHT"
            checked={attributeFilter === "LIGHT"}
            onChange={() => setAttributeFilter("LIGHT")}
          >
            LIGHT
          </RadioFilter>
          <RadioFilter
            name="attribute-filter"
            value="DARK"
            checked={attributeFilter === "DARK"}
            onChange={() => setAttributeFilter("DARK")}
          >
            DARK
          </RadioFilter>
        </div>

        <input
          type="text"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          placeholder="Rechercher une carte..."
          className="bg-white w-64 rounded border border-slate-300 px-3 py-2"
        />

        {filteredCards.length === 0 ? (
          <div className="flex flex-col items-center">
            <p>Aucune carte trouvée. Veuillez réessayer avec de nouveaux filtres.</p>
            <button
              type="button"
              onClick={() => {
                setAttributeFilter("ALL");
                setNameSearch("");
              }}
              className="cursor-pointer mt-2 rounded bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-start justify-start gap-6">
            {filteredCards.map((card) => (
              <YugiohCard key={card.title} {...card} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-slate-800 p-4 text-center text-sm text-white">© 2026 iut-but3-2026-01</footer>
    </div>
  );
}

export default App;
