import {
  SET_WILDCARDS_SUCCESS,
  SET_WILDCARD_SUCCESS,
  WildcardAction,
} from '../actions/wildcards'
import { SET_PENDING_ENTRIES, SET_ERROR } from '../actions/styles'
import { Wildcards } from '../../models/wildcards'

export interface WildcardState {
  wildcardLoading: boolean
  wildcardError: string | undefined
  wildcardData: Wildcards[]
}

const initialState: WildcardState = {
  wildcardLoading: false,
  wildcardError: undefined,
  wildcardData: [],
}

const wildcardsReducer = (
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
    case SET_WILDCARDS_SUCCESS:
      return {
        wildcardLoading: false,
        wildcardError: undefined,
        wildcardData: action.payload,
      }
    default:
      return state
  }
}

export default wildcardsReducer
