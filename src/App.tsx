import { useState } from "react";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { YugiohCard } from "./components/YugiohCard";
import { RadioFilter } from "./components/RadioFilter";
import { yugiohCards } from "./constants/yugiohCards";

type AttributeFilterValue = "ALL" | "LIGHT" | "DARK";

function App() {
  const attributeFilters: { value: AttributeFilterValue; label: string }[] = [
    { value: "ALL", label: "Tous" },
    { value: "LIGHT", label: "LIGHT" },
    { value: "DARK", label: "DARK" },
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

        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-2 text-sm font-semibold text-slate-600">Page 1</span>
          <button
            type="button"
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </main>

      <footer className="bg-slate-800 p-4 text-center text-sm text-white">© 2026 iut-but3-2026-01</footer>
    </div>
  );
}

export default App;
