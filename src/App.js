/* 추가 설치해야 하는 패키지 목록
  react-router-dom
  redux
  react-redux
  redux-actions
  redux-thunk
  redux-logger
  redux-devtools-extension
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./page/Main";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>

        <Route path="/dash" element={<AdminLayout />}>
          <Route index element={<Main />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


