import { createContext, useContext } from "react";

export type PageContextType = {
  page: string;
  setPage: (newPage: string) => void;
}

export const PageContext = createContext<PageContextType>({
  page: 'home',
  setPage: () => { }
})

export const usePageContext = () => useContext(PageContext);