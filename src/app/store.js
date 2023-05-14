import { combineReducers, createStore } from 'redux'
import { currentUserReducer, initialCurrentUser } from './features/currentUser/currentUserSlice';
import { todosReducer,initialTodos } from './features/todos/todosSlice';

const store = createStore( combineReducers({      //combineReducers-@ @ndunum e mihat obyket
  todos:todosReducer,                             //vori hatkutyunner@ slicerneri anunner en
  currentUser:currentUserReducer                 //ayspisov 
}),                                                  
  { 
     friends:[],                                   //sranq kochvum en slice-er  
     posts:[],                                     //amen mek@ arandzin slice 
     todos:initialTodos,                                            //erkrord@ naxnakan state-@
     currentUser:initialCurrentUser
   }
); 

export default store;
