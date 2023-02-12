import React, {useState} from 'react';
// import ClassCounter from './components/ClassesCounter';
import './styles/App.css';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Javascript-1', body: 'Description'},
    {id:3, title: 'Javascript-2', body: 'Description'},
   ])
   
    // const [posts2, setPosts2] = useState([
    //   {id:1, title: 'Python', body: 'Description'},
    //   {id:2, title: 'Python-1', body: 'Description'},
    //   {id:5, title: 'Python-2', body: 'Description'},
    // ])

    // function increment(){
    //   setLikes(likes + 1)
    // }

    // function decrement(){
    //   setLikes(likes - 1)
    // }

  return (
    <div className="App"> 
      <form>
        <MyInput type="text" placeholder="Название поста"/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton disabled> Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов про JS"/>
    </div>           
  );
}

export default App;
