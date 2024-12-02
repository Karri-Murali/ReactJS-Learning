class PreventDefaultFunctionalityOfElement extends React.Component{
    constructor(){
        super();
        this.state = { msg : ''}
        this.RegisterClick = this.RegisterClick.bind(this);
    }
    RegisterClick(SyntheticEvent){
        SyntheticEvent.preventDefault();
        this.setState({msg : 'Form Submitted...'});
    }
    render(){
        return(
            <>
             <form onSubmit={this.RegisterClick}>
             <input type="text" name="UserName"/>
             <button>Register</button>
             <h2>{this.state.msg}</h2>
             </form>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
        <>
         <PreventDefaultFunctionalityOfElement/>
        </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById('container')
)