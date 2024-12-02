class EventHandlerDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : ''
        }
        this.databaseOperations = this.databaseOperations.bind(this);
    }
    databaseOperations(SyntheticEvent){
        switch(SyntheticEvent.target.name){
            case "Insert":
                this.setState({msg : 'Record is inserted'});
                break;
            case "Delete":
                this.setState({msg : 'Record is Deleted'});
                break;
            case "Update":
                this.setState({msg : "Record is Updated"});
                break;     
        }
    }
    render(){
        return(
        <>
         <button name = "Insert" onClick={this.databaseOperations}>Insert</button>
         <button name = "Delete" onClick={this.databaseOperations}>Delete</button>
         <button name = "Update" onClick={this.databaseOperations}>Update</button>
         <h2 className="bg-dark text-white text-center">{this.state.msg}</h2>
        </>
        );
    }
}
class MainComponent extends React.Component{
    render(){
        return(
        <>
         <div className="mt-4">
         <EventHandlerDemo/>
         </div>
        </>
        );
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)