import React from "react";

export default class ComponentLifeCycleDemo1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            msg : ''
        }
        this.timer = this.timer.bind(this)
    }

    timer(){
        this.setState({
            date : new Date(),
            msg : ''
        })
    }

    displayTime;
    componentDidMount(){
        this.displayTime = setInterval(() => this.timer(),1000);
        this.setState({
            msg : 'Component Mounted'
        })
        alert('Component Mounted')
    }
    componentWillUnmount(){
        clearInterval(this.displayTime);
        this.setState({
            msg : 'Component is Unmounted'
        })
    }

    render(){
        return(
            <div className="container-fluid mt-3">
               <button onClick={this.componentWillUnmount}>Unmount Component</button>
               <p>{this.state.date.toLocaleTimeString()}</p>
               <p>{this.msg}</p>
            </div>
        )
    }
}
