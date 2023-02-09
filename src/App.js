import React, {useState} from 'react';
// import ClassCounter from './components/ClassesCounter';
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
        <div className='post'>
          <div className='post_content'>
            <strong>1. Javascript</strong>
            <div>
              Javascript - язык программирования
            </div>
          </div>
          <div className='post_btns'>
            <button>Удалить</button>

          </div>


        </div>
        <Counter/>

      </div>           
    );
}

export default App;
