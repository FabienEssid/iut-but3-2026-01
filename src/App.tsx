import { useState } from "react";
import blueEyesImg from "./assets/images/blue-eyes-white-dragon-7485.jpg";
import darkMagicianImg from "./assets/images/dark-magician-4003.jpg";
import redEyesImg from "./assets/images/red-eyes-black-dragon-6276.jpg";
import cyberEndDragonImg from "./assets/images/cyber-end-dragon-133.jpg";
import cyberJarImg from "./assets/images/cyber-jar-2900.jpg";
import decodeTalkerImg from "./assets/images/decode-talker-8433.jpg";
import earthboundImmortalWiraqochaRascaImg from "./assets/images/earthbound-immortal-wiraqocha-rasca-3511.jpg";
import elementalHeroFlameWingmanImg from "./assets/images/elemental-hero-flame-wingman-3033.jpg";
import exodiaTheForbiddenOneImg from "./assets/images/exodia-the-forbidden-one-2835.jpg";
import gyroidImg from "./assets/images/gyroid-1591.jpg";
import junkWarriorImg from "./assets/images/junk-warrior-5160.jpg";
import mokeyMokeyImg from "./assets/images/mokey-mokey-2332.jpg";
import morphtronicMagnenImg from "./assets/images/morphtronic-magnen-2537.jpg";
import redDragonArchfiendImg from "./assets/images/red-dragon-archfiend-5955.jpg";
import stardustDragonImg from "./assets/images/stardust-dragon-3794.jpg";
import superConductorTyrannoImg from "./assets/images/super-conductor-tyranno-7168.jpg";
import theWingedDragonOfRaImg from "./assets/images/the-winged-dragon-of-ra-850.jpg";
import uriaLordOfSearingFlamesImg from "./assets/images/uria-lord-of-searing-flames-527.jpg";
import wingedKuribohImg from "./assets/images/winged-kuriboh-4869.jpg";
import yubelImg from "./assets/images/yubel-6585.jpg";
import { YugiohCard } from "./components/YugiohCard";
import { RadioFilter } from "./components/RadioFilter";
import type { YugiohCardProps } from "./types/YugiohCard";

type AttributeFilterValue = "ALL" | "LIGHT" | "DARK";

function App() {
  const attributeFilters: { value: AttributeFilterValue; label: string }[] = [
    { value: "ALL", label: "Tous" },
    { value: "LIGHT", label: "LIGHT" },
    { value: "DARK", label: "DARK" },
  ];

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
    {
      image: cyberEndDragonImg,
      title: "Cyber End Dragon",
      attribute: "LIGHT",
      type: "Fusion Monster / Machine / Effect",
      attack: 4000,
      defense: 2800,
      isSoldOut: false,
    },
    {
      image: cyberJarImg,
      title: "Cyber Jar",
      attribute: "DARK",
      type: "Flip Effect Monster / Rock",
      attack: 900,
      defense: 900,
      isSoldOut: false,
    },
    {
      image: decodeTalkerImg,
      title: "Decode Talker",
      attribute: "DARK",
      type: "Link Monster / Cyberse",
      attack: 2300,
      defense: 0,
      isSoldOut: false,
    },
    {
      image: earthboundImmortalWiraqochaRascaImg,
      title: "Earthbound Immortal Wiraqocha Rasca",
      attribute: "DARK",
      type: "Effect Monster / Winged Beast",
      attack: 100,
      defense: 100,
      isSoldOut: false,
    },
    {
      image: elementalHeroFlameWingmanImg,
      title: "Elemental HERO Flame Wingman",
      attribute: "WIND",
      type: "Fusion Monster / Warrior / Effect",
      attack: 2100,
      defense: 1200,
      isSoldOut: false,
    },
    {
      image: exodiaTheForbiddenOneImg,
      title: "Exodia the Forbidden One",
      attribute: "DARK",
      type: "Effect Monster / Spellcaster",
      attack: 1000,
      defense: 1000,
      isSoldOut: false,
    },
    {
      image: gyroidImg,
      title: "Gyroid",
      attribute: "WIND",
      type: "Effect Monster / Machine",
      attack: 1000,
      defense: 1000,
      isSoldOut: false,
    },
    {
      image: junkWarriorImg,
      title: "Junk Warrior",
      attribute: "DARK",
      type: "Synchro Monster / Warrior",
      attack: 2300,
      defense: 1300,
      isSoldOut: false,
    },
    {
      image: mokeyMokeyImg,
      title: "Mokey Mokey",
      attribute: "LIGHT",
      type: "Normal Monster / Fairy",
      attack: 300,
      defense: 100,
      isSoldOut: false,
    },
    {
      image: morphtronicMagnenImg,
      title: "Morphtronic Magnen",
      attribute: "EARTH",
      type: "Effect Monster / Thunder",
      attack: 800,
      defense: 800,
      isSoldOut: false,
    },
    {
      image: redDragonArchfiendImg,
      title: "Red Dragon Archfiend",
      attribute: "DARK",
      type: "Synchro Monster / Dragon / Effect",
      attack: 3000,
      defense: 2000,
      isSoldOut: false,
    },
    {
      image: stardustDragonImg,
      title: "Stardust Dragon",
      attribute: "WIND",
      type: "Synchro Monster / Dragon",
      attack: 2500,
      defense: 2000,
      isSoldOut: false,
    },
    {
      image: superConductorTyrannoImg,
      title: "Super Conductor Tyranno",
      attribute: "LIGHT",
      type: "Effect Monster / Dinosaur",
      attack: 3300,
      defense: 1400,
      isSoldOut: false,
    },
    {
      image: theWingedDragonOfRaImg,
      title: "The Winged Dragon of Ra",
      attribute: "DIVINE",
      type: "Effect Monster / Divine-Beast",
      attack: 0,
      defense: 0,
      isSoldOut: false,
    },
    {
      image: uriaLordOfSearingFlamesImg,
      title: "Uria, Lord of Searing Flames",
      attribute: "FIRE",
      type: "Effect Monster / Pyro",
      attack: 1800,
      defense: 1000,
      isSoldOut: false,
    },
    {
      image: wingedKuribohImg,
      title: "Winged Kuriboh",
      attribute: "LIGHT",
      type: "Effect Monster / Fairy",
      attack: 300,
      defense: 200,
      isSoldOut: false,
    },
    {
      image: yubelImg,
      title: "Yubel",
      attribute: "DARK",
      type: "Effect Monster / Fiend",
      attack: 0,
      defense: 0,
      isSoldOut: false,
    },
  ];

  const [attributeFilter, setAttributeFilter] = useState<AttributeFilterValue>("ALL");
  const [nameSearch, setNameSearch] = useState("");
  const [favoriteCards, setFavoriteCards] = useState<string[]>([]);

  const toggleFavorite = (cardTitle: string) => {
    setFavoriteCards((previousFavorites) =>
      previousFavorites.includes(cardTitle)
        ? previousFavorites.filter((title) => title !== cardTitle)
        : [...previousFavorites, cardTitle],
    );
  };

  const filteredCards = yugiohCards.filter(
    (card) =>
      (attributeFilter === "ALL" || card.attribute === attributeFilter) &&
      card.title.toLowerCase().includes(nameSearch.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-slate-800 p-4 text-center text-xl font-bold text-white">iut-but3-2026-01</header>

      <main className="flex flex-1 flex-col gap-6 bg-slate-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {attributeFilters.map((filter) => (
              <RadioFilter
                key={filter.value}
                name="attribute-filter"
                value={filter.value}
                checked={attributeFilter === filter.value}
                onChange={() => setAttributeFilter(filter.value)}
              >
                {filter.label}
              </RadioFilter>
            ))}
          </div>

          <p className="text-sm font-semibold text-slate-600">Favoris : {favoriteCards.length}</p>
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
              <YugiohCard
                key={card.title}
                {...card}
                isFavorite={favoriteCards.includes(card.title)}
                onToggleFavorite={() => toggleFavorite(card.title)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-slate-800 p-4 text-center text-sm text-white">© 2026 iut-but3-2026-01</footer>
    </div>
  );
}

export default App;
