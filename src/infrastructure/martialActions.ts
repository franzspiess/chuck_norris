export enum ActionTypes {
  FETCHING = 'FETCHING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

export const fetchAction = (searchString?:string) : IAction  => ({
  type: ActionTypes.FETCHING,
  searchString
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
  searchString?: string
  payload?: any
}
