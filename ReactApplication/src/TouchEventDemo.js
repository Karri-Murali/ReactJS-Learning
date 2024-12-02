class TouchEventDemo extends React.Component{
    constructor(){
        super();
        this.state={
            styleObject : {
                position : 'fixed',
                left : '',
                top : ''
            }
        }
        this.TouchStart = this.TouchStart.bind(this);
    }
    TouchStart(event){
        this.setState({
            styleObject : {
                position : 'fixed',
                left : event.touches[0].clientX + 'px',
                top : event.touches[0].clientY + 'px'
            }
        })
    }
    render(){
        return(
            <>
             <div onTouchStart={this.TouchStart}>
                <img style={this.state.styleObject} src="../assets/RedShirt.jpeg" width="100" height="100"/>
             </div>
            </>
        )
    }
}
ReactDOM.render(
    <TouchEventDemo/>,
    document.getElementById('container')
)