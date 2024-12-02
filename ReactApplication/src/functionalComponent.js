const HeaderComponent = function(){
    return (
        <>
        <h1 className="bg-primary text-white text-center">FlipKart Shopping</h1>
        </>
    )
}
const NavigationComponent = () => (
    <>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </>
)
const Footer = () => (
    <>
     <div className="bg-dark text-white text-center">&copy; copyRight 2022</div>
    </>
)
const MainComponent = () => (
    <>
    <HeaderComponent/>
     <div className="row" style={{height : "400px"}}>
        <div className="col-2">
           <NavigationComponent/>
        </div>
        <div className="col-10">
            Online-Shooping
        </div>
     </div>
     <Footer/>
    </>
)
ReactDOM.render(
   /* <>
     <HeaderComponent/>
     <NavigationComponent/>
     <Footer/>
    </> */
    <MainComponent/>
    ,
    document.getElementById("container")
)