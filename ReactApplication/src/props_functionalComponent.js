const ProductComponent = (props) => (    
    <>
       <div className="card m-2">
         <div className="card-header text-center bg-dark text-white">
           <h2>{props.Name}</h2>
         </div>
         <div className="card-body text-center">
           <img width="200" height="300" src={props.Photo}/>
         </div>
         <div className="card-footer text-center">
           <h4>{props.Price}</h4>
         </div>
       </div>
    </> 
)
var element = 1000;
const MainComponent = () => (
    <>
      <h2 className="text-center">
        Prodcuts List
      </h2>
      <div className="d-flex">
        <ProductComponent Name={'Boat'} Price={element}  Photo={'../asserts/Boat.jpg'}/>
        <ProductComponent Name={'JBL'} Price={5000}  Photo={'../asserts/JBL.jpg'}/>
      </div>
    </>
)
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)