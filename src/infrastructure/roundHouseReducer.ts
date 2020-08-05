import { IAction, ActionTypes } from './martialActions';

export const initState: IState = {
  loading: false,
  chuckJoke: 'Chuck Norris once fetched a joke by roundhouse kicking a button.',
  errorMessage: undefined
};

export function roundHouseReducer(state: IState = initState, action: IAction) {
  switch (action.type) {
    case (action.type = ActionTypes.FETCHING):
      return {
        ...state,
        loading: true,
      };
    case (action.type = ActionTypes.FINISHED):
      return {
        ...state,
        loading:false,
        chuckJoke:action.payload
      }
    case (action.type = ActionTypes.ERROR):
      return {
        ...state,
        loading: false,
        errorMessage: action.message
      }

    default:
      return state;
  }
}

export interface IState {
  loading: boolean;
  chuckJoke?: string;
  errorMessage?: string
}
