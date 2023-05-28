import {
  SET_PENDING_ENTRIES,
  SET_ERROR,
  SET_STYLES_SUCCESS,
  SET_STYLE_SUCCESS,
  StyleAction,
} from '../actions/styles'
import { Styles } from '../../models/styles'

export interface StyleState {
  loading: boolean
  error: string | undefined
  data: Styles[] | Styles
}

const initialState: StyleState = {
  loading: false,
  error: undefined,
  data: [],
}

const styleReducer = (
  state = initialState,
  action: StyleAction
): StyleState => {
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
    case SET_STYLES_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_STYLE_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    default:
      return state
  }
}

export default styleReducer
