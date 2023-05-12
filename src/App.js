import './App.css';
import reduxImage  from './assets/images/redux-lifeCykle.png'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const name = useSelector(function(state) {
    return state.currentUser.name      // rect-reduxi huk e vori der@ veredarcnel state-i en mas@ vor@ mez hetaqrqire
  });  
  
  const dispatch = useDispatch();     // poxancume object type-ov,type-@ aysinqn inch petq e ani,ev payload nor
                                      // informacian
  return (
    <div className="App">
       <img src={reduxImage}  style={{width:'1000px',height:"500px"}}/>
      <h1>{name}</h1>
      <input value={name} onChange={ (event) => {
         dispatch({
          type:'edit-current-user-name',
          payload:{
            name:event.target.value
          }
         })
      } } /> 
    
    </div>
  );
}

export default App;
