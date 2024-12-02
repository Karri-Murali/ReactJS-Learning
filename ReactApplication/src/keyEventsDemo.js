class KeyEventsDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            users : [ {Username :'Murali'},
                      {Username :'Pavan'}],
            userMsg : '',
            passwordMsg : '',
            regExp : /(?=.*[A-Z])\w{4,15}/
        }
        this.verifyUser = this.verifyUser.bind(this);
        this.verifyPassword = this.verifyPassword.bind(this);
    }
    verifyUser(SyntheticEvent){
       for(var user of this.state.users){
        if(user.Username == SyntheticEvent.target.value){
            this.setState({
                userMsg : 'UserName is Already Taken'
            })
            break;
        }
        else{
            this.setState({
                userMsg : 'UserName is Available'
            })
        }
       }
    }
    verifyPassword(SyntheticEvent){
        if(SyntheticEvent.target.value.match(this.state.regExp)){
            this.setState({
                passwordMsg : 'Strong Password'
            })
        }
        else{
            if(SyntheticEvent.target.value.length < 4){
                this.setState({
                    passwordMsg : 'Poor Password'
                })
            }
            else{
                this.setState({
                    passwordMsg : 'Week Password'
                })
            }
        }
    }
    render(){
        return(
            <>
             <dl>
                <dt>Username:</dt>
                <dd><input type="text" onKeyUp={this.verifyUser}/></dd>
                <dd>{this.state.userMsg}</dd>
                <dt>Password:</dt>
                <dd><input type="password" onKeyUp={this.verifyPassword}/></dd>
                <dd>{this.state.passwordMsg}</dd>
             </dl>
            </>
        )
    }
}
ReactDOM.render(
    <KeyEventsDemo/>,
    document.getElementById('container')
)