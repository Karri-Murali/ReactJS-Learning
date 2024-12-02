class ComponentLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg : 'Welcome'
        }
        this.changeSate = this.changeSate.bind(this);
    }
    changeSate(SyntheticEvent){
        this.setState({
            msg : 'Welcome Prabhas'
        })
    }
    render(){
        return(
            <>
             <h1>React Component Life Cycle Demo</h1>
             <h3>Hello {this.state.msg}</h3>
             <button onClick={this.changeSate}>Click Here</button>
            </>
        )
    }
    componentWillMount(){
        console.log('Component Will Mount')
    }
    componentDidMount(){
        console.log('Component Did Mount')
    }
    componentWillReceiveProps(){
        console.log('Component Will Receive Props')
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUpdate(){
        console.log('Component Will Update')
    }
    componentDidUpdate(){
        console.log('Component Did Update')
    }
    componentWillUpdate(){
        console.log('Componenet Will UnMount')
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <ComponentLifeCycle/>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById('container')
)