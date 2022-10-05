import React, {Component} from "react";

class StatefulComp extends React.Component{
    constructor(){
        super()
        this.state = {users:[]}
    }

    componentDidMount(){
        console.log("INSIDE THE COMPONENT DID MOUNT")
        console.log("INSIDE THE COMPONENT DID MOUNT1")
        console.log("INSIDE THE COMPONENT DID MOUNT2")
        console.log("INSIDE THE COMPONENT DID MOUNT3")
    }

    render(){
        return(
            <div>
                inside the statefulComp
            </div>
        )
    }
}

export default StatefulComp