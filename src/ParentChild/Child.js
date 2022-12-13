import { Component } from "react";

export default class Child extends Component{
    render(){
        return(
            <div>
                <h1>First Name : {this.props.firstname}</h1>
                <h1>Last Name : {this.props.lastname}</h1>
            </div>
        )
    }
}