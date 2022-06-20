import React from 'react';
import {
  LinkToSingleRecipe1,
  LinkToSingleRecipe2,
  OverviewContainer,
  GridContainer,
  Favorite,
  Image,
  Name,
  TimeEfford,
  Label,
  Time,
  WatchMinutes,
  Stopwatch,
  Difficulty,
  Cookie,
  StyledTagList,
} from './styles/componentStyles';

import IconFavorite from './images/IconFavorite.svg';
import IconFavoriteActive from './images/IconFavoriteActive.svg';
import IconStopwatch from './images/IconStopwatch.svg';
import IconCookie from './images/IconCookie.svg';

export function SingleRecipeOverview({
  recipe,
  favoriteStatus, // TODO: is coming from redux later
  onToggleFavorite,
}) {
  const { _id, recipeName, time, difficulty, tags, titleImage } = recipe;

  function getCookies() {
    const cookies = new Array(difficulty);
    return cookies.fill('');
  }

  function Tags({ tags }) {
  return <StyledTagList>{tags.join('  ●  ')}</StyledTagList>
}

  return (
    <OverviewContainer>
      <GridContainer>
        <LinkToSingleRecipe1 to={`/recipe/${_id}`}>
          <Name>{recipeName}</Name>
        </LinkToSingleRecipe1>
        <Favorite
          onClick={() => {
            onToggleFavorite(_id, !favoriteStatus);
          }}
        >
          {favoriteStatus ? (
            <img src={IconFavoriteActive} alt="Icon Favorite Pink" />
          ) : (
            <img src={IconFavorite} alt="Icon Favorite Orange" />
          )}
        </Favorite>
        <LinkToSingleRecipe2 to={`/recipe/${_id}`}>
          <Image src={titleImage} alt={recipeName} />
        </LinkToSingleRecipe2>

        <TimeEfford>
          <Time>
            <Label>Time: </Label>
            <WatchMinutes>
              <Stopwatch src={IconStopwatch} />
              <Label>{time} min</Label>
            </WatchMinutes>
          </Time>

          <Difficulty>
            <Label>Level of Effort: </Label>
            {getCookies(difficulty).map(element => (
              <Cookie src={IconCookie} />
            ))}
          </Difficulty>
        </TimeEfford>

        <Tags
          key={tag => {
            const index = tags.indexOf(tag);
            console.log('index', index);
            return index;
          }}
          tags={tags}
        />
      </GridContainer>
    </OverviewContainer>
  );
}
