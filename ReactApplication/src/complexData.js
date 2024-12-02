var categories = ["itemA","itemB","itemC"];
var Data = [
    {Name : "JBL Speaker",Price : 20000, Preview : "../asserts/Boat.jpg"},
    {Name : "Boat",Price : 10000 , Preview : "../asserts/JBL.jpg"}      
]
// Present Categories Using Traditional Map and Lambda function
const element = (
    <>
    <h2 className="text-center bg-primary text-white mt-3">Categories List</h2>
    <ol>
        {
            categories.map(function(category){
                return <li>{category}</li>
            })
        }
    </ol>

    <ol>
        {
            categories.map(category => <li>{category}</li>)
        }
    </ol>
    <table className="table table-hover">
     <thead>
        <tr>
         <th>Name</th>
         <th>Price</th>
         <th>Preview</th>
        </tr>
     </thead>
     <tbody>
        {
            Data.map(object => 
                <tr>
                    <td>object.Name</td>
                    <td>object.Price</td>
                    <td><img src={object.Preview} width="60" height="60"/></td>
                </tr>)
        }
     </tbody>
    </table>
    <div className="row row-cols-3">
        {
           Data.map(product => 
            <div className="card mr-4">
            <div className="card-header">
               <h3>{product.Name}</h3>
            </div>
            <div className="card-body">
               <img src={product.Preview} width="200" height="200"/>
            </div>
            <div className="card-footer">
               <h4>{product.Price}</h4>
            </div>
            </div>
           )
        }
    </div>
    </>

);
ReactDOM.render(element,document.getElementById("container"));
