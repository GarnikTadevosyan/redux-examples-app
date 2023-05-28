import { editName, selectName } from './app/features/currentUser/currentUserSlice'
import reduxImage  from './assets/images/redux-lifeCykle.png'
import { useDispatch, useSelector } from 'react-redux'

import './App.css';

function App() {

  const name = useSelector(selectName);    //useSelector-@ provideric @ndunum e state-ը ev selectName funkciain poxancume
                                           //ajn vorpes argument
                                           // rect-reduxi huk e vori der@ veredarcnel state-i en mas@ vor@ mez hetaqrqire
  const dispatch = useDispatch();          // poxancume object type-ov,type-@ aysinqn inch petq e ani,ev payload nor
                                           // informacian
                                           
  return (
    <div className="App">
       <img src={reduxImage}  style={{width:'1000px',height:"500px"}}/>
       <h1>{name}</h1>
       <input value={name} onChange={ (event) => {
         dispatch(editName(event.target.value))
      } } /> 
    
    </div>
  );
}

export default App;
