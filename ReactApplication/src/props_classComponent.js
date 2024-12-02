class ProductComponent extends React.Component{
    render(){
        return(
            <>
             <div className="card m-2">
               <div className="card-header bg-dark text-center text-white">
                  <h2>{this.props.Name}</h2>
               </div>
               <div className="card-body">
                  <img width="200" height="200" src={this.props.Photo}/>
               </div>
               <div className="card-footer text-center">
                  <h4>{this.props.Price}</h4>
               </div>
             </div>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
             <div className="d-flex">
               <ProductComponent Name={'Boat'} Photo={'../assets/Boat.jpg'} Price={2000}/>
               <ProductComponent Name={'JBL'} Photo={'../assets/JBL.jpg'} Price={4000}/>
             </div>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)
