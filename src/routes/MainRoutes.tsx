import { useRoutes } from "react-router-dom";
import CountriesPage from '../pages/CountriesPage/CountriesPage'
import OneCountryPage from '../pages/OneCountryPage/OneCountryPage'

const MainRoutes = () => {
    return useRoutes([
        {path:'/REST_API_Countries', element: <CountriesPage/>},
        {path:'/country/:name', element: <OneCountryPage/>},
        {path:'/code/:code', element: <OneCountryPage/>},
    ])
}
 
export default MainRoutes;