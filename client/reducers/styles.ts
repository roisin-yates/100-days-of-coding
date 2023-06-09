import {
  SET_PENDING_ENTRIES,
  SET_ERROR,
  SET_STYLES_SUCCESS,
  StyleAction,
} from '../actions/styles'
import { Styles } from '../../models/styles'

export interface StyleState {
  styleLoading: boolean
  styleError: string | undefined
  styleData: Styles[]
}

const initialState: StyleState = {
  styleLoading: false,
  styleError: undefined,
  styleData: [],
}

const stylesReducer = (
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
    case SET_STYLES_SUCCESS:
      return {
        styleLoading: false,
        styleError: undefined,
        styleData: action.payload,
      }
    default:
      return state
  }
}

export default stylesReducer
