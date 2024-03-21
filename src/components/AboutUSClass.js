import React from "react";
class AboutUSClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'Dummy name',
                location: 'Default'
            }
        }
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/arunviswam88');
        const user = await data.json();
        this.setState({
            userInfo: user
        });
    }
    componentDidUpdate() {
        console.log("Update");
    }
    render(){
        const {name} = this.props;
        return(
            <div className="aboutus">
                <h1>About US - {this.state.userInfo.name} </h1>
                <img src={this.state.userInfo.avatar_url} width={200} height={200}></img>
                <h3> Location: {this.state.userInfo.location}</h3>
            </div>
        )
    }
}

export default AboutUSClass;