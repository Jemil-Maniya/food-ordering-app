import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props)
        console.log("parent constructor")
    }

    componentDidMount() {
        console.log("parent component did mount");

        //API Calls
    }

    render () {
        console.log("parent render")
        return (
                <div>
                    <h1> This is my About us page </h1>
                    {/* <User name={"name: Jemil maniya (functional)"} /> */}
                    <UserClass  name={"name: Jemil Maniya (class)"}/>
                </div>
        )
    }   
}  // this is class based component

export default About ;





// const About = () => {
//     return (
//         <div>
//             <h1> This is my About us page </h1>
//             {/* <User name={"name: Jemil maniya (functional)"} /> */}
//             <UserClass  name={"name: Jemil Maniya (class)"}/>
//         </div>
        
//     );
  
// }; // functional based component