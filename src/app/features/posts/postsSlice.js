export function postsReducer (state=[],action) {
  if(action.type === 'post-add') {
    return [
       //...
    ]
  } 
  return state;
}

export const initialPosts = [                                  
  {
    id:Math.random(),
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit nsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam nnostrum rerum est autem sunt rem eveniet architecto"
  },
  { 
    id:Math.random(),
    title: "qui est esse",
    body: "est rerum tempore vitae nsequi sint nihil reprehenderit dolor beatae ea dolores neque nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis"
  },
  { 
    id:Math.random(),
    title:'ea molestias quasi exercitationem',
    body:'et iusto sed quo iure nvoluptatem occaecati omnis eligendi'
  },
]