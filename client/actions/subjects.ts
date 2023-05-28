import { ThunkAction } from '../store'
import { getSubjects, getSubject } from '../apis/api'
import { Dispatch } from 'redux'
import { SET_PENDING_ENTRIES, SET_ERROR } from './styles'
import { Subjects } from '../../models/subjects'

export const SET_SUBJECTS_SUCCESS = 'SET_SUBJECTS_SUCCESS'
export const SET_SUBJECT_SUCCESS = 'SET_SUBJECT_SUCCESS'

export type SubjectAction =
  | {
      type: typeof SET_PENDING_ENTRIES
      payload: null
    }
  | {
      type: typeof SET_ERROR
      payload: string
    }
  | {
      type: typeof SET_SUBJECTS_SUCCESS
      payload: Subjects[]
    }
  | {
      type: typeof SET_SUBJECT_SUCCESS
      payload: Subjects
    }

export function setSubjectsPending(): SubjectAction {
  return {
    type: SET_PENDING_ENTRIES,
    payload: null,
  }
}

export function setError(error: string): SubjectAction {
  return {
    type: SET_ERROR,
    payload: error,
  }
}

export function setSubjectsSuccess(subjects: Subjects[]): SubjectAction {
  return {
    type: SET_SUBJECTS_SUCCESS,
    payload: subjects,
  }
}

export function setSubjectSuccess(subject: Subjects): SubjectAction {
  return {
    type: SET_SUBJECT_SUCCESS,
    payload: subject,
  }
}

export function getAllSubjects(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setSubjectsPending())
    return getSubjects()
      .then((subjects) => {
        dispatch(setSubjectsSuccess(subjects))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function getSingleSubject(id: number): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setSubjectsPending())
    return getSubject(id)
      .then((subject) => {
        dispatch(setSubjectSuccess(subject))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
