import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function AppRoutes(){
    return(
        <HashRouter>
            <Routes>
                <Route path="https://daniel1024-maker.github.io/TD-2-Web/home" element={<Home />}></Route>
                <Route path="https://daniel1024-maker.github.io/TD-2-Web" element={<Home />}></Route>
            </Routes>
        </HashRouter>
    );
}
export default AppRoutes;
