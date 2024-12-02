class AccessFormData extends React.Component{
    constructor(){
        super();
        this.state = {
            product : {
                Name : '',
                Price : ''
            }
        }
        this.NameChanged = this.NameChanged.bind(this);
        this.PriceChanged = this.PriceChanged.bind(this);
    }
    NameChanged(SyntheticEvent){
        this.setState({
            product : {
                Name : SyntheticEvent.target.value,
                Price : this.state.product.Price
            }
        })
    }
    PriceChanged(SyntheticEvent){
        this.setState({
            product : {
                Name : this.state.product.Name,
                Price : SyntheticEvent.target.value
            }
        })
    }
    render(){
        return(
            <>
             <h3>Register Product</h3>
             <dl>
                <dt>ProductName : </dt>
                <dd><input type ="text" onChange={this.NameChanged}/></dd>
                <dt>Price :</dt>
                <dd><input type="text" onChange={this.PriceChanged}/></dd>
             </dl>
             <h3>Product Details :</h3>
             <dl className="row">
               <dt className="cols-2">Name:</dt>
               <dd className="cols-10">{this.state.product.Name}</dd>
               <dt className="cols-2">Price :</dt>
               <dd className="cols-10">{this.state.product.Price}</dd>
             </dl>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <AccessFormData/>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById('container')
)