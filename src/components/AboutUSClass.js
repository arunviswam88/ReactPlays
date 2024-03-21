import React from "react";
class AboutUSClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Mount");
    }
    componentDidUpdate() {
        console.log("Update");
    }
    render(){
        const {name} = this.props;
        return(
            <div className="aboutus">
                <h1>About US - {name} - {this.state.count}</h1>
                <h3> Here we are going to show the about us sectiop</h3>
                <button onClick={()=>{this.setState({count: this.state.count +1})}}>Increment</button>
            </div>
        )
    }
}

export default AboutUSClass;