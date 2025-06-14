import { RouteObject } from "react-router-dom";
import  Home  from "../pages/Home";
import  CharacterList  from "../pages/CharacterList";


const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/characters',
      element: <CharacterList/>,
    }
]

export default routes;

