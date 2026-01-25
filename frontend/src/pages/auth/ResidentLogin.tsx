import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ResidentLogin = (() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useContext(AuthContext);

    const handleSubmit = async (e : {preventDefault: () => void}) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/auth/login", {email, password});
            console.log(res.data);
            const data = res.data;
            setToken(data.access_token);
        } catch (error : any) {
            if (error.response) {
                console.error("Server responded with: "+ error.response.status);
                console.error("Response data: "+ error.response.data);
            } else {
                console.error(error.response.message);
            } 
        }
    };

    return (
        <div>
            <div>
                <p>Login</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="string" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default ResidentLogin;