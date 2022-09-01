import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


 
import Video from "../Component/Video";
import Header from "../Component/Header";
import Main from "../Component/Main";
import Table from "../Component/Table";
import Rocket from "../Component/Rocket";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
 
    <Header />
    <Main />
    <Video />
    <Table />  
    
    <Rocket />
  
  </StrictMode>
);
