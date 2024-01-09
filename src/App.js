import Header from "./Com/header/";
import "./App.css";
import { ConfigProvider } from "antd";
import Bannar from "./Com/bannar";
import Contant from "./Com/contant";

function App() {
  return (
    <ConfigProvider>
      <div className="main">
        <Header />
        <Bannar/>
      </div>
      <Contant/>
    </ConfigProvider>
  );
}

export default App;
