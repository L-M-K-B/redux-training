import React /*, { useState, useEffect }*/ from 'react';
// import { setLocal, getLocal } from '../services';
import { SingleRecipeOverview } from './SingleRecipeOverview';

import {
  GridHeaderSmall,
  MainArea,
  ContentContainer,
} from './styles/componentStyles';

export function OverviewPage({ recipesList, onToggleFavorite }) {
  // TODO: redux
  // const [favFilterStatus, setFavFilterStatus] = useState(
  //   getLocal('favFilterStatus') || false
  // );
  //
  // useEffect(() => {
  //   setLocal('favFilterStatus', favFilterStatus);
  // }, [favFilterStatus]);

  return (
    <GridHeaderSmall>
      <MainArea>
        <ContentContainer>
          {recipesList.map((recipe) => (
            <SingleRecipeOverview
              key={recipe._id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </ContentContainer>
      </MainArea>
    </GridHeaderSmall>
  );
}
