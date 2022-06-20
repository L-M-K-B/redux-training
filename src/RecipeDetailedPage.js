import React from 'react';
import { MainArea, ContentContainer } from './styles/componentStyles';

import RecipeStage from './RecipeStage';

export function RecipeDetailedPage({ recipe }) {
  // TODO: Replace with redux
  // function getFavoriteStatus(id) {
  //   const index = getIndex(favoritesList, id);
  //   return index === -1 ? false : favoritesList[index].status;
  // }

  return (
    <MainArea>
      <ContentContainer>
        <RecipeStage
          recipe={recipe}
          // TODO
          // favoriteStatus={getFavoriteStatus(recipe._id)}
          // onToggleFavorite={onToggleFavorite}
        />
      </ContentContainer>
    </MainArea>
  );
}
