import React from "react";
import '../index.css';
import { useNavigate } from "react-router";

const Body = (() => {
    let navigate = useNavigate();
    return(
        <div className="bg-red-300">
            <div>
                <h3>Urban problem Mapper</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae, sequi cum quae sed a ipsam unde corporis odit id cupiditate numquam optio totam omnis alias tempora obcaecati? Sint odio fugiat a modi eveniet ipsum tempora porro blanditiis similique voluptatem. Doloribus, accusamus. Ratione autem, repellendus aliquam alias quae necessitatibus aut!</p>
            </div>
            <div>
                <h3>Create an Account</h3>
                <div>
                    <button onClick={() => navigate("/signup")}>Resident Sign Up</button>
                </div>
            </div>
        </div>
    );
});

export default Body;