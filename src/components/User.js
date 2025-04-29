import { useState } from "react";

const User = ({name}) => {
    const [count] = useState((0));
    const [count1] = useState((1))
    return (
        <div className="user-card">
            <h1> count = {count} </h1>
            <h1> count = {count1} </h1>
            <h2> {name} </h2>
            <h2>Location: India </h2>
            <h2>Contact: @abc </h2>
        </div>
        
    );
};

export default User;