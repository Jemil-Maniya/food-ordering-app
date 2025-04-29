import React from "react";


// class based component
class UserClass extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        userInfo: {
            name: "dummyName",

        }
        
    };
        console.log("child constructor")
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json =  await data.json();

        this.setState({
            userInfo: json,
        })

    }
    render () {
        const {name, avatar_url} = this.state.userInfo;
        
        console.log("child render")
        return ( 
            <div className="user-card">
            <img src={avatar_url} />
            <h2> {name}  </h2>
            <h2>Location: India </h2>
            <h2>Contact: @abc </h2>
        </div>
        )
    }
}

export default UserClass;