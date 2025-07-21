import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="https://daniel1024-maker.github.io/TD-2-Web/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
