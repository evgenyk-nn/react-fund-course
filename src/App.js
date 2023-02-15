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


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'Javascript', body: 'Description'},
    {id:2, title: 'Javascript-1', body: 'Description'},
    {id:3, title: 'Javascript-2', body: 'Description'},
  ])   
  
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState ('')
  
  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОИАЛА ФУНКЦИЯ СОРТЕД ПОСТ')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // получение post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)) 
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App"> 
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>  
      <div>
        <MyInput 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}            
        />
      </div>

      {/* условная отрисовка */}
      {posts.length
        ? 
        <PostList remove={removePost} posts={sortedPosts} title="Список постов про JS"/>
        :
        <h1 style={{textAlign: 'center', color: 'teal'}}>
          Посты не найдены
        </h1>
      }
    </div>           
  )
}

export default App;