import React, {useState} from 'react';
import Counter from './components/Counter';

function App() {
    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')
   
    // function increment(){
    //   setLikes(likes + 1)
    // }

    // function decrement(){
    //   setLikes(likes - 1)
    // }

    return (
      <div className="App">
        <Counter/>        
        <Counter/>
        <Counter/>
        <Counter/>

      </div>           
    );
}

export default App;
