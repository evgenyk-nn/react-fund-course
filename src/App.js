import React, {useEffect, useMemo, useRef, useState} from 'react';
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
import { useSortedPosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PosrService';
import Loader from './components/UI/Loader/Loader';


function App() {
  const [posts, setPosts] = useState([])  
  const [filter, setfilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = useSortedPosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    // console.log('USE EFFECT')
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(() => {
      // console.log(response.data)
      setPosts(posts)
      setIsPostLoading(false);
    }, 1000)

    const posts = await PostService.getAll(); 
    
  }

  // получение post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)) 
  }

  return (
    <div className="App"> 
      <button onClick={fetchPosts}>GET POSTS</button>
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
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов про JS"/>
      }               
    </div>   
  );
}

export default App;