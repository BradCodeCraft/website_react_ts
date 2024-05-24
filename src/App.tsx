import React, { useState } from "react";
// Components
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/pages/HomePage";
import StorePage from "./components/pages/StorePage";

// Contexts
import { ThemeContext } from "./components/contexts/GlobalThemeContext";
import { PageContext } from "./components/contexts/GlobalPageContext";


const App = () => {
  const [theme, setTheme] = useState<string>('light');
  const [page, setPage] = useState<string>('home');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PageContext.Provider value={{ page, setPage }}>
        <div className="flex flex-col">
          <NavigationBar />

          {
            page === 'home' ?
              <HomePage /> :
              page === 'store' ?
                <StorePage /> :
                "Invalid Page"
          }

        </div>
      </PageContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;