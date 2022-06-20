import React from 'react';
import {
  BoxContainer,
  BoxInnerContainer,
  FavoriteRecipe,
  TitleImage,
  BasicDataGrid,
  YieldKey,
  YieldValueDiv,
  YieldValueP,
  TimeKey,
  TimeValueDiv,
  TimeValueP,
  DifficultyKey,
  DifficultyValue,
  TagsDiv,
  StyledTagListRecipe,
} from './styles/componentStyles';

import IconFavorite from './images/IconFavorite.svg';
import IconFavoriteActive from './images/IconFavoriteActive.svg';
import IconCookie from './images/IconCookie.svg';
import IconStopwatch from './images/IconStopwatch.svg';
import IconAmount from './images/IconAmount.svg';

export default function RecipeStage({
  recipe,
  favoriteStatus,
  onToggleFavorite,
}) {
  const { recipeName, time, difficulty, tags, titleImage, amount } = recipe;

  function getCookies() {
    const cookies = new Array(recipe.difficulty);
    return cookies.fill('');
  }

  return (
    <BoxContainer>
      <BoxInnerContainer>
        <TitleImage src={titleImage} alt={recipeName} />
        <FavoriteRecipe
        // TODO
        // onClick={() => {
        //   onToggleFavoriteRecipe(_id, !favoriteStatus);
        // }}
        >
          {favoriteStatus ? (
            <img src={IconFavoriteActive} alt="Icon Favorite Pink" />
          ) : (
            <img src={IconFavorite} alt="Icon Favorite Orange" />
          )}
        </FavoriteRecipe>
        <BasicDataGrid>
          <YieldKey>Amount:</YieldKey>
          <YieldValueDiv>
            <img src={IconAmount} alt="Icon Amount" />
            <YieldValueP>{amount}</YieldValueP>
          </YieldValueDiv>

          <TimeKey>Time:</TimeKey>
          <TimeValueDiv>
            <img src={IconStopwatch} alt="Icon Stopwatch" />
            <TimeValueP>{time} min</TimeValueP>
          </TimeValueDiv>
          <DifficultyKey>Difficulty:</DifficultyKey>
          <DifficultyValue>
            {getCookies(difficulty).map(() => (
              <img src={IconCookie} alt="Icon Cookie" />
            ))}
          </DifficultyValue>
        </BasicDataGrid>
        <TagsDiv>
          <StyledTagListRecipe>{tags.join('  ●  ')}</StyledTagListRecipe>
        </TagsDiv>
      </BoxInnerContainer>
    </BoxContainer>
  );
}
