import { combineReducers } from 'redux'

import subjectReducer from './subjects'
import styleReducer from './styles'
import wildcardReducer from './wildcards'

export default combineReducers({
  subjects: subjectReducer,
  styles: styleReducer,
  wildcards: wildcardReducer,
})
