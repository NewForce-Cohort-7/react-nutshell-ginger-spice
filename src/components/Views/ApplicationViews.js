import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../Profile/Profile"
import { Tasklist } from "../Tasks/TaskList"
import { TaskForm } from "../Tasks/TaskForm"
import { MessageEdit } from "../Messages/MessageEdit"
import { ArticleForm } from "../Articles/ArticleForm"
import { EditArticleForm } from "../Articles/ArticleEdit"
import { ArticleList } from "../Articles/ArticleList"
import { MessageContainer } from "../Messages/MessageContainer"
import { ImageForm } from "../images/ImageForm"
import { Images } from "../images/Image"
import { ImageEdit } from "../images/ImageEdit"
import { FriendsList } from "../friends/Friends"





export const ApplicationViews = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="title--main">Nutshell</h1>
              <div>Your one-stop-shop to get all stuff.</div>
              <div className="images-container"></div>
              <Outlet />
            </>
          }
        >
          <Route path="profile" element={<Profile />} />
           <Route path="tasks" element={ <Tasklist /> } />
            <Route path="tasks/create" element={ <TaskForm /> } />
           <Route path="friends" element={ <FriendsList /> } />
          <Route path="Messages/:messageId/edit" element={<MessageEdit />} />
          <Route path="messages" element={ <MessageContainer />} />
          <Route path="image/create" element={<ImageForm />} />
          <Route path="images" element={<Images />} />
          <Route path="image/edit/:imageId" element={<ImageEdit />} />
          <Route path="articles/create" element={ <ArticleForm /> } />
          <Route path="/articles/:articleId/edit" element={<EditArticleForm />} />
          <Route path="/articles/" element={<ArticleList/>} />
        </Route>
      </Routes>
    );
  };
        
   
