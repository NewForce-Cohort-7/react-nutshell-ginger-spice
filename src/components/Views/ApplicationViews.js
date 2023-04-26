import { Route, Routes } from 'react-router-dom';
import { ArticleList } from '../Articles/ArticleList';
import { Profile } from '../profile/Profile';
import { ArticleForm } from '../Articles/ArticleForm';

function ApplicationViews() {
  return (
    <Routes>
      <Route path="Profile" element={<Profile />} />
      <Route path="articles/create" element={<ArticleForm />} />
      <Route path="articles/edit/:articleId" element={<ArticleList />} />
    </Routes>
  );
}

export default ApplicationViews;
