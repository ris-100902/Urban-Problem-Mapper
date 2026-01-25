import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ResidentSignUp = (() => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/users", {name, email, password}   );
            navigate("/login");
        } catch(error: any) {
            if (error.response) {
              console.error('Server responded with status code:', error.response.status);
              console.error('Response data:', error.response.data);
              console.error('Response headers:', error.response.headers);
            } else {
              console.error('Error creating request:', error.message);
            }   
        }
    }
    return (
        <div>
            <div>
                <p>SignUp</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="string" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
        
    );
});

export default ResidentSignUp;