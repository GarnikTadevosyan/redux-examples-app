import { loadCurrentUser } from "./currentUserAPI";

export function currentUserReducer (state={},action) {                //stexcum en reducer amen slice-i hamar
    if(action.type === 'edit-current-user-name') {
      return {
          ...state,
          name:action.payload.name
      }
    } 
    return state;
    //state talisenq havasare datark obyket,vor yete
    //hankarc dispatch@ chashxati naxnakan arjeq@ lini datark obyekt
    //ayl voch te "UNDEFINED" 
    //espes ete dispatch@ chashxati return state-@ mez kveradarcni datarak obyket 
  }

  export const initialCurrentUser = {
    name:'Jhon Shmoe'
 }

 export function selectName(state) {
   return state.currentUser.name
 }

 export function editName(newName) {   //editName ajs funkcian redux-um kochvum e actionCreator,aysinqn
                                      //funkcia vor@ stexcum e iren
   return {                          //ayspisov editName-@ actionn e isk return arvox obyekt@ action@
    type:'edit-current-user-name',
          payload:{
            name:newName
          }
   }
 }

 //QANI OR loadUser funkcian chi veradarcnum obyekt ayl veradarcnum e funkcia dra hamarel komponentic
//dispatch aneluc menk kstananq error ev ays xndric xuapleu hamar ogtagorcum en redux-i thunk@
 export function loadUser () {                          //loadUser-@ actionCreatore vor@ veradarcnume thunk
   return (dispatch,getState) => {                      //vor@ kanchume asynchron funkciayin ev erb asyncchron
     return loadCurrentUser().then( (loadedUser) => {   //funkcian qashum e serveric ayd anun@ dispatchenq editName-in
       dispatch(editName(loadedUser.name))              //ev poxum enq currentUser-in
     } )                                                //getState-@ veradarcnum e amenaverjin amenatarm state@
   }
 }