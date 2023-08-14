import './App.css';
import Body from './Components/Body';
import Header from "./Components/Header";
import {Provider} from "react-redux";
import store from "../src/Utils/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from "./Components/WatchPage";


const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]

  }

])
function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <RouterProvider router={AppRouter}/>
      </Provider>
    </>
  );
}

export default App;
