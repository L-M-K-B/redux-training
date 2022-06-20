import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  App as AppStyle,
  AppLogo,
  AppHeader,
  AppLink,
} from './styles/componentStyles';
import { OverviewPage } from './OverviewPage';
import { recipesList } from './mockdata';

function App() {
  return (
    <Router>
        <Route
          exact
          path="/"
          render={() => (
            <AppStyle>
              <AppHeader>
                <AppLogo src={logo} alt="logo" />
                <AppLink
                  href="/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enter App
                </AppLink>
              </AppHeader>
            </AppStyle>
          )}
        />

        <Route
          exact
          path="/overview"
          render={() => (
            <OverviewPage
              recipesList={recipesList}
              // favoritesList={favorites}
              // onToggleFavorite={handleToggleFavorite}
            />
          )}
        />
    </Router>
  );
}

export default App;
