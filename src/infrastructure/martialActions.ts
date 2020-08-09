export enum ActionTypes {
  FETCHING = 'FETCHING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

//Standard fetch actions

export const fetchAction = (searchString?:string) : IAction  => ({
  type: ActionTypes.FETCHING,
  searchString
})

export const fetchFinishedAction = (payload:any) :IAction => ({
  type: ActionTypes.FINISHED,
  payload
})

export const fetchErrorAction = (message:string) : IAction => ({
  type: ActionTypes.ERROR,
  message
})

export interface IAction {
  type:ActionTypes
  searchString?: string
  payload?: string
  message?: string
}
