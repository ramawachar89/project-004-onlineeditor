import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Home from './component/home/home';
import DataProvider from './component/data/context';
import Share from './component/liveshare/share';
import { Toaster } from 'react-hot-toast';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import EditorPage from "./component/editorpage/EditorPage"
import Main from './component/main/main';
function App() {
  return (
    <>
      <Main/> 
    {/* <Toaster
       position='top-right'
       toastOptions={{
        success:{
          theme:{
            primary:"green"
          }
        }
       }}>
        

    </Toaster>
   
 {/* <DataProvider>
 <Home/>
 </DataProvider> */}
 {/* <BrowserRouter>
 <Routes>
  <Route path='/' element={<Share/>}></Route>
  <Route path='/editor' element={<EditorPage/>}></Route>
 </Routes>
 </BrowserRouter> */}
 
    
   
  
    </>
  );
}

export default App;
