import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'
import notificationReducer from './reducers/notificationReducer'
import usersReducer from './reducers/usersReducer'

const reducers = combineReducers({
  blogs: blogReducer,
  user: loginReducer,
  users: usersReducer,
  notifications: notificationReducer,
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
