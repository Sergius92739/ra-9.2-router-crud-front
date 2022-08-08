import { Routes, Route } from 'react-router-dom';
import List from '../List/List';
import NewPost from '../NewPost/NewPost';
import PostEdit from '../PostEdit/PostEdit';
import PostView from '../PostView/PostView';

export default function MainPage() {

  return (
    <div className="app">
      <Routes>
        <Route path='/ra-9.2-router-crud-front/' element={<List />} />
        <Route path='/ra-9.2-router-crud-front/posts/new' element={<NewPost />} />
        <Route path='/ra-9.2-router-crud-front/posts/:id' element={<PostView />} />
        <Route path='/ra-9.2-router-crud-front/posts/edit' element={<PostEdit />} />
      </Routes>
    </div>
  )
}