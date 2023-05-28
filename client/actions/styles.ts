import { ThunkAction } from '../store'
import { Styles } from '../../models/styles'
import { getStyles, getStyle } from '../apis/api'
import { Dispatch } from 'redux'

export const SET_PENDING_ENTRIES = 'SET_PENDING_ENTRIES'
export const SET_ERROR = 'SET_ERROR'
export const SET_STYLES_SUCCESS = 'SET_STYLES_SUCCESS'
export const SET_STYLE_SUCCESS = 'SET_STYLE_SUCCESS'

export type StyleAction =
  | {
      type: typeof SET_PENDING_ENTRIES
      payload: null
    }
  | {
      type: typeof SET_ERROR
      payload: string
    }
  | {
      type: typeof SET_STYLES_SUCCESS
      payload: Styles[]
    }
  | {
      type: typeof SET_STYLE_SUCCESS
      payload: Styles
    }

export function setStylesPending(): StyleAction {
  return {
    type: SET_PENDING_ENTRIES,
    payload: null,
  }
}

export function setError(error: string): StyleAction {
  return {
    type: SET_ERROR,
    payload: error,
  }
}

export function setStylesSuccess(styles: Styles[]): StyleAction {
  return {
    type: SET_STYLES_SUCCESS,
    payload: styles,
  }
}

export function setStyleSuccess(style: Styles): StyleAction {
  return {
    type: SET_STYLE_SUCCESS,
    payload: style,
  }
}

export function getAllStyles(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setStylesPending())
    return getStyles()
      .then((styles) => {
        dispatch(setStylesSuccess(styles))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function getSingleStyle(id: number): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setStylesPending())
    return getStyle(id)
      .then((style) => {
        dispatch(setStyleSuccess(style))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
