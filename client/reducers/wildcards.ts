import {
  SET_WILDCARDS_SUCCESS,
  SET_WILDCARD_SUCCESS,
  WildcardAction,
} from '../actions/wildcards'
import { SET_PENDING_ENTRIES, SET_ERROR } from '../actions/styles'
import { Wildcards } from '../../models/wildcards'

export interface WildcardState {
  loading: boolean
  error: string | undefined
  data: Wildcards[] | Wildcards
}

const initialState: WildcardState = {
  loading: false,
  error: undefined,
  data: [],
}

const wildcardReducer = (
  state = initialState,
  action: WildcardAction
): WildcardState => {
  switch (action.type) {
    case SET_PENDING_ENTRIES:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    case SET_WILDCARDS_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_WILDCARD_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    default:
      return state
  }
}

export default wildcardReducer
