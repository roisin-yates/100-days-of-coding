import { combineReducers } from 'redux'
import subjectsReducer from './subjects'
import subjectReducer from './subject'
import stylesReducer from './styles'
import styleReducer from './style'
import wildcardReducer from './wildcard'
import wildcardsReducer from './wildcards'

export default combineReducers({
  subject: subjectReducer,
  subjects: subjectsReducer,
  styles: stylesReducer,
  style: styleReducer,
  wildcard: wildcardReducer,
  wildcards: wildcardsReducer,
})
