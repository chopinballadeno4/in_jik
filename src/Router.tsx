import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
