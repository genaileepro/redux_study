// 중앙 데이터 관리소(store)를 설정하는 부분
// 리덕스로 부터 두가지 State가 필요함

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';
import users from '../modules/users';

const rootReducer = combineReducers({
    counter: counter,
    users: users, 
});
const store = createStore(rootReducer);

export default store;
