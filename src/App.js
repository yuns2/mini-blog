import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

// Pages
import MainPage from "./component/page/MainPage";
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;