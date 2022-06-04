import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Signup from "./Routes/Signup";
import Signin from "./Routes/Signin";
import PostInfo from "./Routes/PostInfo";
import DrawResume from "./Routes/DrawResume";
import DrawPost from "./Routes/DrawPost";
import SearchInfo from "./Routes/SearchInfo";
import Contract from "./Routes/Contract";
import MyPage from "./Routes/MyPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/Signup" element={<Signup/>} ></Route>
                <Route path="/Signin" element={<Signin/>} ></Route>
                <Route path="/DrawResume" element={<DrawResume/>}></Route>
                <Route path="/DrawPost" element={<DrawPost/>}></Route>
                <Route path="/:cata/:no" element={<PostInfo/>}></Route>
                <Route path="/:brandname" element={<SearchInfo/>}></Route>
                <Route path="/MyPage" element={<MyPage/>}></Route>
                <Route path="/:cata/:no/Contract" element={<Contract/>}></Route>
            </Routes>        
        </Router>
    );
}

export default AppRouter;
