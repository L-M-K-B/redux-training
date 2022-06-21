import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import './App.css';
import {
  App as AppStyle,
  AppLogo,
  AppHeader,
  AppLink,
} from './styles/componentStyles';

import logo from './logo.svg';
import { OverviewPage } from './OverviewPage';
import { RecipeDetailedPage } from './RecipeDetailedPage';
import { favouriteReducer } from './reducers';

import { recipesList } from './mockdata';

const store = configureStore(favouriteReducer);

function App() {
  function getRecipe(id, recipesList) {
    const index = recipesList.map((recipe) => recipe._id).indexOf(id);
    return recipesList[index];
  }

  return (
    <Provider store={store}>
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
              // TODO: Redux
              // favoritesList={favorites}
              // onToggleFavorite={handleToggleFavorite}
            />
          )}
        />
        <Route
          path="/recipe/:id"
          render={(props) => (
            <RecipeDetailedPage
              recipe={getRecipe(props.match.params.id, recipesList)}
              // TODO: Redux
              // favoritesList={favorites}
              // onToggleFavorite={handleToggleFavorite}
              id={props.match.params.id}
            />
          )}
        />
      </Router>
    </Provider>
  );
}

export default App;
