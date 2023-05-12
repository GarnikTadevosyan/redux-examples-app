import {createStore} from 'redux'

const store = createStore( function(state,action) {   //createStore-@ yndunum e erku paramter.1in reducer funkcian
    // action: dispatchic uxarkvox inforacian
    if(action.type === 'edit-current-user-name') {
      return {
        ...state,
        currentUser:{
            name:action.payload.name
        }
      }
    } 
    return state;
}, {                                                 //erkrord@ naxnakan state-@
     currentUser:{
        name:'Jhon Shmoe'
     }
   }
); 

export default store;