import { SET_PENDING_ENTRIES, SET_ERROR } from '../actions/styles'
import { Wildcards } from '../../models/wildcards'

import { SET_WILDCARD_SUCCESS, WildcardAction } from '../actions/wildcards'

export interface WildcardState {
  wildcardLoading: boolean
  wildcardError: string | undefined
  wildcardData: Wildcards | Wildcards[]
}

const initialState: WildcardState = {
  wildcardLoading: false,
  wildcardError: undefined,
  wildcardData: [],
}

const wildcardReducer = (
  state = initialState,
  action: WildcardAction
): WildcardState => {
  switch (action.type) {
    case SET_PENDING_ENTRIES:
      return {
        wildcardLoading: true,
        wildcardError: undefined,
        wildcardData: [],
      }
    case SET_ERROR:
      return {
        wildcardLoading: false,
        wildcardError: action.payload,
        wildcardData: [],
      }
    case SET_WILDCARD_SUCCESS:
      return {
        wildcardLoading: false,
        wildcardError: undefined,
        wildcardData: action.payload,
      }
    default:
      return state
  }
}

export default wildcardReducer
