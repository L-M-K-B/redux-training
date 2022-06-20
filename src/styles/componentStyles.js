import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  font,
  oShadow,
  orangeBoxShadow,
  borderRadius,
  AppWidthS,
  AppWidthM,
  AppWidthL,
  BoxWidthS,
  BoxWidthM,
} from './styleVariables';

// App
export const App = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
}
  
  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = styled.a`
  color: #61dafb;
`;

// OverviewPage
export const GridHeaderSmall = styled.div`
  display: grid;
  grid-template-rows: 55px auto;
  height: 100vh;
  width: 100vw;
`;

export const MainArea = styled.main`
  grid-row: 2;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 374px) {
    min-width: ${AppWidthS};
  }
  @media (min-width: 375px) and (max-width: 499px) {
    width: ${AppWidthM};
  }
  @media (min-width: ${AppWidthL}) {
    width: ${AppWidthL};
  }
`;

export const ContentContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 65px;

  @media (max-width: 374px) {
    width: ${BoxWidthS};
    margin: 15px 5px 0;
  }
  @media (min-width: 375px) {
    width: ${BoxWidthM};
    margin: 15px 20px 0;
  }
`;

// SingleRecipeOverview
export const OverviewContainer = styled.div`
  margin: 0 0 20px 0;
  border-radius: ${borderRadius};
  box-shadow: ${orangeBoxShadow} ${oShadow};

  @media (min-width: 375px) {
    height: 235px;
  }
`;
export const GridContainer = styled.div`
  @media (max-width: 374px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 5px;
  }
  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 1fr);
    border-radius: ${borderRadius};
    margin: 8px;
  }
`;

export const LinkToSingleRecipe1 = styled(Link)`
  text-decoration: none;

  @media (min-width: 375px) {
    grid-column: 1 / span 10;
    grid-row: 1 / span 2;
    align-self: center;
  }
`;
export const LinkToSingleRecipe2 = styled(Link)`
  @media (min-width: 375px) {
    grid-column: 1 / span 6;
    grid-row: 3 / span 5;
  }
`;
export const Favorite = styled.div`
  @media (min-width: 375px) {
    grid-column: 11 / span 2;
    grid-row: 1 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Image = styled.img`
  width: 125px;
`;
export const Name = styled.p`
  margin: 0;
  font-family: 'Domine', serif;
  font-size: 24px;
  color: ${font};
`;
export const TimeEfford = styled.div`
  @media (max-width: 374px) {
    display: flex;
  }
  @media (min-width: 375px) {
    grid-column: 7 / span 6;
    grid-row: 3 / span 4;
  }
`;
export const Label = styled.p`
  margin: 0 0 2px;
`;
export const Time = styled.div`
  @media (max-width: 374px) {
    margin: 0 10px 15px 0;
  }
  @media (min-width: 375px) {
    margin-bottom: 15px;
  }
`;
export const WatchMinutes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Stopwatch = styled.img`
  margin: 0 5px 0 0;
  @media (min-width: 375px) {
    width: 15%;
  }
`;
export const Difficulty = styled.div`
  margin: 0 0 15px 0;
`;
export const Cookie = styled.img`
  margin: 0 3px 0 0;
  @media (min-width: 375px) {
    height: 18%;
    width: 18%;
  }
`;
export const StyledTagList = styled.div`
  @media (min-width: 375px) {
    margin-bottom: 5px;
  }
  @media (min-width: 375px) {
    grid-column: 1 / span 12;
    grid-row: 7 / span 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: center;
  }
`;
