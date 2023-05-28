import { ThunkAction } from '../store'
import { getWildcards, getWildcard } from '../apis/api'
import { Dispatch } from 'redux'
import { SET_PENDING_ENTRIES, SET_ERROR } from './styles'
import { Subjects } from '../../models/subjects'
import { Wildcards } from '../../models/wildcards'

export const SET_WILDCARDS_SUCCESS = 'SET_WILDCARDS_SUCCESS'
export const SET_WILDCARD_SUCCESS = 'SET_WILDCARD_SUCCESS'

export type WildcardAction =
  | {
      type: typeof SET_PENDING_ENTRIES
      payload: null
    }
  | {
      type: typeof SET_ERROR
      payload: string
    }
  | {
      type: typeof SET_WILDCARDS_SUCCESS
      payload: Wildcards[]
    }
  | {
      type: typeof SET_WILDCARD_SUCCESS
      payload: Wildcards
    }

export function setWildcardsPending(): WildcardAction {
  return {
    type: SET_PENDING_ENTRIES,
    payload: null,
  }
}

export function setError(error: string): WildcardAction {
  return {
    type: SET_ERROR,
    payload: error,
  }
}

export function setWildcardsSuccess(wildcards: Wildcards[]): WildcardAction {
  return {
    type: SET_WILDCARDS_SUCCESS,
    payload: wildcards,
  }
}

export function setWildcardSuccess(wildcard: Wildcards): WildcardAction {
  return {
    type: SET_WILDCARD_SUCCESS,
    payload: wildcard,
  }
}

export function getAllWildcards(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setWildcardsPending())
    return getWildcards()
      .then((wildcards) => {
        dispatch(setWildcardsSuccess(wildcards))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function getSingleWildcard(id: number): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setWildcardsPending())
    return getWildcard(id)
      .then((wildcard) => {
        dispatch(setWildcardSuccess(wildcard))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
