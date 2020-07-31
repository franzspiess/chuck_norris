import { IAction, ActionTypes } from './martialActions';

export const initState: IState = {
  loading: false,
  chuckJoke: undefined,
};

export function roundHouseReducer(state: IState = initState, action: IAction) {
  switch (action.type) {
    case (action.type = ActionTypes.FETCHING):
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

interface IState {
  loading: boolean;
  chuckJoke?: string;
}
