class HeaderComponent extends React.Component{
    render(){
        return(
            <> 
             <h1 className="bg-primary text-center text-white p-2">FlipKart Shopping</h1>
            </>
        )
    }
}
class NavigationComponent extends React.Component{
    render(){
        return(
            <>
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
             </ul>
            </>
        )
    }
}
class FooterComponent extends React.Component{
    render(){
        return(
            <>
             <div className="bg-dark text-center text-white mt-3 p-3">&copy; CopyRight 2023</div>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
        <>
        <div className="container-fluid">
            <HeaderComponent/>
         <div className="row mt-3">
            <div className="cols-5">
             <NavigationComponent/>
            </div>
            <div className="cols-12">
              <p>Hi This Is FlipKart</p>
            </div>
         </div>
         <FooterComponent/>
        </div>
        </>
    )    
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)