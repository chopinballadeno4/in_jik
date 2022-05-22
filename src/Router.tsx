import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Signup from "./Routes/Signup";
import Signin from "./Routes/Signin";
import PostInfo from "./Routes/PostInfo";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/Signin" element={<Signin/>} ></Route>
                <Route path="/Signup" element={<Signup/>} ></Route>
                <Route path="/:name/:no" element={<PostInfo/>}></Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
