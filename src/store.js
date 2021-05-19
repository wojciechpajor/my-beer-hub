import { createStore, combineReducers} from 'redux';
import currentUserReducer from './Components/reducers';

const reducers = combineReducers({ currentUserReducer });

export default createStore(reducers);