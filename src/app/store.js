import { applyMiddleware, combineReducers, createStore } from 'redux'
import { currentUserReducer, initialCurrentUser } from './features/currentUser/currentUserSlice';
import { todosReducer,initialTodos } from './features/todos/todosSlice';
import { frinedsReducer,initialFriends } from './features/friendsSlice/friendsSlice';
import { postsReducer,initialPosts } from './features/posts/postsSlice';

function logger (store) {                     //middlwear@ funkciaye vor nstace reducerneri araj
  return function (next) {                   //ev kanchvum e minchev reducerner@,na karoxe poxel action@
    return function (action) {               //middlweare createstore-i errord parametr
      action.payload.name += 'z'              //dispatch arac action@ mtnum e middlveri mej mej bayc stat@ chi
      return next(action);                    //poxvum qani or vor menq next@ chenq kanchel,next nshanakum e
    }                                       //hajord qayl,next@ chkancheluc reducer@ chi kanchvum
  }
}

const logger2 = (store) => (next) => (action) => {
  action.payload.name += 'u'
  return next(action);
}

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
  applyMiddleware(logger,logger2)                                //kanchum enq applyMiddleware ev nran poxancum
);                                                       //mer midlver@
                                                         
export default store;
