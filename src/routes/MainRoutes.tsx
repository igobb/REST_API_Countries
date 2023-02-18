import { useRoutes } from "react-router-dom";
import CountriesPage from '../pages/CountriesPage/CountriesPage'
import OneCountryPage from '../pages/OneCountryPage/OneCountryPage'

const MainRoutes = () => {
    return useRoutes([
        {path:'/', element: <CountriesPage/>},
        {path:'/country/:name', element: <OneCountryPage/>},
        {path:'/code/:code', element: <OneCountryPage/>},
    ])
}
 
export default MainRoutes;