import { createRoot } from "react-dom/client";
 
import Video from "../Component/Video";
import Header from "../Component/Header";
import Main from "../Component/Main";
import Table from "../Component/Table";
import Rocket from "../Component/Rocket";
import Footer from "../Component/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Header />
    <Main />
    <Video />
    <Table /> 
    <Rocket />
    <Footer />
  </>
);
