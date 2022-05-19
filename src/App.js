import React from "react";
import "./App.css";
import { Link, Route } from 'wouter';
import Home from './pages/Home/index';
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      subscribeteAlCanal: true
    }}>
      <div className="App">
        <section className="App-content row">
          <Link to="/"><h1 className="giffyLogo">App</h1></Link>

          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={() => <h1>404 ERROR :()</h1>}
              path="/gif/404"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
