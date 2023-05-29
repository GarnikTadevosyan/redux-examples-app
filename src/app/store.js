import { applyMiddleware, combineReducers, createStore } from 'redux'
import { currentUserReducer, initialCurrentUser } from './features/currentUser/currentUserSlice';
import { todosReducer,initialTodos } from './features/todos/todosSlice';
import { frinedsReducer,initialFriends } from './features/friendsSlice/friendsSlice';
import { postsReducer,initialPosts } from './features/posts/postsSlice';
import thunk from 'redux-thunk';

const store = createStore( combineReducers({      //combineReducers-@ @ndunum e mihat obyket
  friends:frinedsReducer,
  posts:postsReducer,
  todos:todosReducer,                             //vori hatkutyunner@ slicerneri anunner en
  currentUser:currentUserReducer,                  //ayspisov 
}),                                                  
  { 
     friends:initialFriends,                                   //sranq kochvum en slice-er  
     posts:initialPosts,                                     //amen mek@ arandzin slice 
     todos:initialTodos,                                            //erkrord@ naxnakan state-@
     currentUser:initialCurrentUser
   },
   applyMiddleware(thunk)                                 //kanchum enq applyMiddleware ev nran poxancum
);                                                        //mer midlver@
                                                         
export default store;
