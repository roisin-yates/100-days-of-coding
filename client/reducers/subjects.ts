import {
  SET_SUBJECTS_SUCCESS,
  SET_SUBJECT_SUCCESS,
  SubjectAction,
} from '../actions/subjects'
import { SET_PENDING_ENTRIES, SET_ERROR } from '../actions/styles'
import { Subjects } from '../../models/subjects'

export interface SubjectState {
  loading: boolean
  error: string | undefined
  data: Subjects[] | Subjects
}

const initialState: SubjectState = {
  loading: false,
  error: undefined,
  data: [],
}

const subjectReducer = (
  state = initialState,
  action: SubjectAction
): SubjectState => {
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
    case SET_SUBJECTS_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_SUBJECT_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    default:
      return state
  }
}

export default subjectReducer
