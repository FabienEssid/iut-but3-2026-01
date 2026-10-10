import type { YugiohCardProps } from "./YugiohCard";

export type YugiohCardsFilters = {
  attributeFilter: string;
  nameSearch: string;
  page: number;
};

export type YugiohCardsResponse = {
  data: YugiohCardProps[];
  meta: {
    page: number;
    pageSize: number;
    totalCount: number;
  };
};
