class FindDOMNodeDemo extends React.Component{
    constructor(){
        super();
        this.findDOMNode1 = this.findDOMNode1.bind(this);
        this.findDOMNode2 = this.findDOMNode2.bind(this);
    }
    findDOMNode1(){
        var node = document.getElementById('Node1');
        ReactDOM.findDOMNode(node).style.color = 'red';
    }
    findDOMNode2(){
        var node = document.getElementById('Node2');
        ReactDOM.findDOMNode(node).style.color = 'blue';
    }
    render(){
        return(
        <>
         <div>
         <h2 id="Node1">NODE 1</h2>
         <h2 id="Node2">NODE 2</h2>
         </div>
         <div><button onClick={this.findDOMNode1}>FindDOMNode1</button></div>
         <div><button onClick={this.findDOMNode2}>FindDOMNode2</button></div>
        </>
        );
    }
}
ReactDOM.render(
    <FindDOMNodeDemo/>,
    document.getElementById("container")
)