import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InjikHeader from "./Components/InjikHeader";
import InjikFooter from "./Components/InjikFooter";
import Home from "./Routes/Home";
import Signup from "./Routes/Signup";
import Signin from "./Routes/Signin";
import PostInfo from "./Routes/PostInfo";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <InjikHeader/>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home/>} ></Route>
                            <Route path="/Signin" element={<Signin/>} ></Route>
                            <Route path="/Signup" element={<Signup/>} ></Route>
                            <Route path="/:cata/:no" element={<PostInfo/>}></Route>
                        </Routes>
                    </div>
                <InjikFooter/>
            </div>
        </Router>
    );
}

export default AppRouter;
