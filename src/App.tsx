import { useEffect, useState } from "react";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { YugiohCard } from "./components/YugiohCard";
import { RadioFilter } from "./components/RadioFilter";
import { getYugiohCards } from "./services/yugiohCards";
import type { YugiohCardProps } from "./types/YugiohCard";
import type { YugiohCardsResponse } from "./types/YugiohCardsApi";

type AttributeFilterValue = "ALL" | "LIGHT" | "DARK";

function App() {
  const attributeFilters: { value: AttributeFilterValue; label: string }[] = [
    { value: "ALL", label: "Tous" },
    { value: "LIGHT", label: "LIGHT" },
    { value: "DARK", label: "DARK" },
  ];

  const [attributeFilter, setAttributeFilter] = useState<AttributeFilterValue>("ALL");
  const [nameSearch, setNameSearch] = useState("");
  const [page, setPage] = useState(1);
  const [favoriteCards, setFavoriteCards] = useState<string[]>([]);
  const [cards, setCards] = useState<YugiohCardProps[]>([]);
  const [meta, setMeta] = useState<YugiohCardsResponse["meta"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleFavorite = (cardTitle: string) => {
    setFavoriteCards((previousFavorites) =>
      previousFavorites.includes(cardTitle)
        ? previousFavorites.filter((title) => title !== cardTitle)
        : [...previousFavorites, cardTitle],
    );
  };

  const handleAttributeFilterChange = (value: AttributeFilterValue) => {
    setAttributeFilter(value);
    setPage(1);
  };

  const handleNameSearchChange = (value: string) => {
    setNameSearch(value);
    setPage(1);
  };

  const resetFilters = () => {
    setAttributeFilter("ALL");
    setNameSearch("");
    setPage(1);
  };

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);

    getYugiohCards({ attributeFilter, nameSearch, page }).then((response) => {
      if (!isCancelled) {
        setCards(response.data);
        setMeta(response.meta);
        setIsLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [attributeFilter, nameSearch, page]);

  const totalPages = meta ? Math.max(1, Math.ceil(meta.totalCount / meta.pageSize)) : 1;

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
                onChange={() => handleAttributeFilterChange(filter.value)}
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
          onChange={(e) => handleNameSearchChange(e.target.value)}
          placeholder="Rechercher une carte..."
          className="bg-white w-64 rounded border border-slate-300 px-3 py-2"
        />

        {isLoading ? (
          <p className="text-center text-slate-600">Chargement...</p>
        ) : cards.length === 0 ? (
          <div className="flex flex-col items-center">
            <p>Aucune carte trouvée. Veuillez réessayer avec de nouveaux filtres.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="cursor-pointer mt-2 rounded bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-start justify-start gap-6">
            {cards.map((card) => (
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
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
            disabled={page === 1}
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-2 text-sm font-semibold text-slate-600">
            Page {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))}
            disabled={page === totalPages}
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="cursor-pointer rounded border border-slate-300 bg-white p-2 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
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
