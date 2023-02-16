import React, {useMemo, useRef, useState} from 'react';
// import ClassCounter from './components/ClassesCounter';
import './styles/App.css';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Javascript-1', body: 'Description'},
    {id:3, title: 'Javascript-2', body: 'Description'},
  ])     
  
  const [filter, setfilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОИАЛА ФУНКЦИЯ СОРТЕД ПОСТ')
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo (() =>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // получение post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)) 
  }

  return (
    <div className="App"> 
      <MyButton style={{marginTop: 25}} onClick={() => setModal(true)}>
        Создать пользователя       
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
         <PostForm create={createPost}/>
      </MyModal>
     
      <hr style={{margin: '15px 0'}}/>  
      <PostFilter 
        filter={filter}
        setFilter={setfilter}
      />  
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов про JS"/>         
    </div>   
  );
}

export default App;