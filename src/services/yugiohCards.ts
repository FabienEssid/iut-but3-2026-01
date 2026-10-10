import { yugiohCards } from "../constants/yugiohCards";
import type { YugiohCardsFilters, YugiohCardsResponse } from "../types/YugiohCardsApi";

const PAGE_SIZE = 5;
const MOCK_DELAY_MS = 1000;

export const getYugiohCards = ({ attributeFilter, nameSearch, page }: YugiohCardsFilters): Promise<YugiohCardsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredCards = yugiohCards.filter(
        (card) =>
          (attributeFilter === "ALL" || card.attribute === attributeFilter) &&
          card.title.toLowerCase().includes(nameSearch.toLowerCase()),
      );

      const totalCount = filteredCards.length;
      const start = (page - 1) * PAGE_SIZE;
      const data = filteredCards.slice(start, start + PAGE_SIZE);

      resolve({
        data,
        meta: {
          page,
          pageSize: PAGE_SIZE,
          totalCount,
        },
      });
    }, MOCK_DELAY_MS);
  });
};
