export enum ActionTypes {
  FETCHING = 'FETCHING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

export const fetchAction = () : IAction  => ({
  type: ActionTypes.FETCHING
})

export const fetchFinishedAction = (payload:any) :IAction => ({
  type: ActionTypes.FINISHED,
  payload
})

export const fetchErrorAction = () : IAction => ({
  type: ActionTypes.ERROR
})

export interface IAction {
  type:ActionTypes
  payload?: any
}
