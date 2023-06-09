import { SET_SUBJECTS_SUCCESS, SubjectAction } from '../actions/subjects'
import { SET_PENDING_ENTRIES, SET_ERROR } from '../actions/styles'
import { Subjects } from '../../models/subjects'

export interface SubjectState {
  subjectLoading: boolean
  subjectError: string | undefined
  subjectData: Subjects[]
}

const initialState: SubjectState = {
  subjectLoading: false,
  subjectError: undefined,
  subjectData: [],
}

const subjectsReducer = (
  state = initialState,
  action: SubjectAction
): SubjectState => {
  switch (action.type) {
    case SET_PENDING_ENTRIES:
      return {
        subjectLoading: true,
        subjectError: undefined,
        subjectData: [],
      }
    case SET_ERROR:
      return {
        subjectLoading: false,
        subjectError: action.payload,
        subjectData: [],
      }
    case SET_SUBJECTS_SUCCESS:
      return {
        subjectLoading: false,
        subjectError: undefined,
        subjectData: action.payload,
      }

    default:
      return state
  }
}

export default subjectsReducer
