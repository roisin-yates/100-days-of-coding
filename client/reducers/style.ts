import {
  SET_PENDING_ENTRIES,
  SET_ERROR,
  SET_STYLE_SUCCESS,
  StyleAction,
} from '../actions/styles'
import { Styles } from '../../models/styles'

export interface StyleState {
  styleLoading: boolean
  styleError: string | undefined
  styleData: Styles | Styles[]
}

const initialState: StyleState = {
  styleLoading: false,
  styleError: undefined,
  styleData: [],
}

const styleReducer = (
  state = initialState,
  action: StyleAction
): StyleState => {
  switch (action.type) {
    case SET_PENDING_ENTRIES:
      return {
        styleLoading: true,
        styleError: undefined,
        styleData: [],
      }
    case SET_ERROR:
      return {
        styleLoading: false,
        styleError: action.payload,
        styleData: [],
      }
    case SET_STYLE_SUCCESS:
      return {
        styleLoading: false,
        styleError: undefined,
        styleData: action.payload,
      }
    default:
      return state
  }
}

export default styleReducer
