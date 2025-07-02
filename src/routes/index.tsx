import { RouteObject } from "react-router-dom";
import  Home  from "../pages/Home";
import  CharacterList  from "../pages/CharacterList";
import  CharacterDetails  from "../pages/CharacterDetails";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/characters',
    element: <CharacterList />,
  },
  {
    path: '/details/:id',
    element: <CharacterDetails />,
  },
]

export default routes;

