import { useReducer, useCallback } from 'react';
import { roundHouseReducer, initState, IState } from './roundHouseReducer';
import { fetchAction, fetchFinishedAction, fetchErrorAction } from './martialActions';

const apiRoutes = {
  baseUrl: 'https://api.chucknorris.io/jokes',
  appendRandom: '/random',
  appendSearchString: '/search?query=',
};

export default function useFetchChuck(): [
  IState,
  (searchString: string) => void
] {
  const [state, dispatch] = useReducer(roundHouseReducer, initState);
  const fetchChuck = useCallback((searchString: string) => {
    dispatch(fetchAction());
    const route = getRoute(searchString);
    fetch(route)
      .then((response) => response.json())
      .then((parsedData) => getJokeFromResponse(parsedData))
      .then((joke) => dispatch(fetchFinishedAction(joke)))
      .catch(error => fetchErrorAction(error.message) )
  }, []);

  return [state, fetchChuck];
}

function getRoute(searchString: string) {
  const { baseUrl, appendRandom, appendSearchString } = apiRoutes;

  return (
    baseUrl +
    (searchString.length > 3 ? appendSearchString + searchString : appendRandom)
  );
}
function getJokeFromResponse(parsedData: IServerResult | IJoke) {
  if ('result' in parsedData) {
    const {result} = parsedData
    const joke = result[Math.floor(result.length*Math.random())]
    return joke?.value  || 'No joke found for your query.'
  }
  if ('value' in parsedData) {
    return parsedData.value
  }
  throw new Error('Unknown Fornat')
}

interface IServerResult {
  result: IJoke[];
}

interface IJoke {
  value: string;
}
