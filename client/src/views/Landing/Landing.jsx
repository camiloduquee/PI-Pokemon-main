import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { allTypes } from "../../redux/actions";

const Landing = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const handleGoToHome = () => {
        navigation('/home');
    }
    dispatch(allTypes("http://localhost:3001/types"));
    return (
        <div>
            <h1>Esta es la vista de Landing</h1>
            <button onClick={handleGoToHome}>Home</button>
        </div>
    )
}
export default Landing;