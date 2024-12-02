class MouseEventsDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            shirtSource : '../assets/whiteShirt.jpeg'
        }
        this.PickColor = this.PickColor.bind(this);
    }
    PickColor(event){
        switch(event.target.name){
            case "red": this.setState({shirtSource : '../assets/RedShirt.jpeg'});
                        break;
            case "white": this.setState({shirtSource : '../assets/WhiteShirt.jpeg'});
                        break;    
            case "green": this.setState({shirtSource : '../assets/GreenShirt.jpeg'});
                        break;                   
        }
    }
    startScroll(event){
        event.target.start();
    }
    stopScroll(event){
        event.target.stop();
    }
    render(){
        return(
            <>
             <div className="mt-3 mb-3">
                <ul className="d-flex list-unstyled">
                 <li className="me-4"><button className="bg-danger" name="red" onMouseOver={this.PickColor}>&nbsp;</button></li>
                 <li className="me-4"><button className="bg-light" name="white" onMouseOver={this.PickColor}>&nbsp;</button></li>
                 <li className="me-4"><button className="bg-success" name ="green" onMouseOver={this.PickColor}>&nbsp;</button></li>
                </ul>
             </div>
             <div>
                <img src={this.state.shirtSource} width="200" height="200"/>
             </div>
             <div>
                <marquee scrollamount = "10" onMouseOver={this.stopScroll} onMouseOut={this.startScroll}>
                  <img src='../assets/RedShirt.jpeg' width="100" height="100"/>
                  <img src='../assets/WhiteShirt.jpeg' width="100" height="100"/>
                  <img src='../assets/GreenShirt.jpeg' width="100" height="100"/>
                </marquee>
             </div>
            </>
        )
    }
}
ReactDOM.render(
    <MouseEventsDemo/>,
    document.getElementById('container')
)