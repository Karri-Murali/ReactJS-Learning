class App extends React.Component{
    constructor(){
        super();
        this.state = {displayBio : false};
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio(){
        this.setState({displayBio : !this.state.displayBio});
    }
    render(){
        return(
            <>
             <h1 className="bg-primary text-center"> React Sate Change Demo </h1>
             {this.state.displayBio ? 
             (<div>
               <div><h4>Welcome to ReactJS</h4></div>
               <button onClick={this.toggleDisplayBio}>Read Less</button>
             </div>)
             :
              (<div>
               <button onClick={this.toggleDisplayBio}>Read More</button>
              </div>)
             }
            </>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("container")
)