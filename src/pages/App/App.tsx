import { Popup } from "../../components/PopupWindow/Popup";
import { AuthPage } from "../AuthPage/AuthPage";
import { ClientPage } from "../ClientPage/ClientPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/client/:id" element={<ClientPage />}/>
        <Route path="*" element={<Popup><p>Такой страницы не существует</p></Popup>} />
      </Routes>
    </>
  );
}

export default App;
