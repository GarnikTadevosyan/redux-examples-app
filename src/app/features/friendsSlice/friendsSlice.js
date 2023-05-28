export function frinedsReducer (state=[],action) {
    if(action.type === 'friend-add') {
      return [
         //...
      ]
    } 
    return state;
  }

  export const initialFriends = [                                  
    {
      id:Math.random(),
      name:'Stiven',
      age:24,
    },
    { 
      id:Math.random(),
      name:'Stiven',
      age:32,
    },
    { 
      id:Math.random(),
      name:'Stiven',
      age:35,
    },
 ]