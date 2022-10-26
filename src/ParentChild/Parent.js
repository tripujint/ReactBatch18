import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{
    state = {
        firstName: 'Tri Puji',
        lastName: 'Ning Tyas'
    }

    render(){
        return(
            <div>
                <Child
                    firstname = {this.state.firstName}
                    lastname = {this.state.lastName}
                />
            </div>
        )
    }

}