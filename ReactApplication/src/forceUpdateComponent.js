class UpdateComponent extends React.Component{
    constructor(){
        super();
        this.forceUpdateState = this.forceUpdateState.bind(this);
    }
    forceUpdateState(){
        this.forceUpdate();
    }
    render(){
        return(
            <>
             <div>
             <div>Random Number : {Math.random()}</div>
             <div><button onClick={this.forceUpdateState}>Update Component</button></div>
             </div>
            </>
        );
    }
}
ReactDOM.render(
    <UpdateComponent/>,
    document.getElementById("container")
)