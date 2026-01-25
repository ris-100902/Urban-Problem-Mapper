import "../index.css"
import { useNavigate } from "react-router";

const Header = (() => {
    let navigate = useNavigate();
    return (
        <div className="bg-blue-300">
            <div>
                <p>Urban Problem Mapper</p>
            </div>
            <div>
                <button onClick={() => navigate("/login")}>Resident Sign In</button>
                <button onClick={() => navigate("/admin/login")}>Administrator Sign In</button>
            </div>
        </div>
    );
});

export default Header;