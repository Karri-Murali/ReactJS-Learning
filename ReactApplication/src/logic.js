var product = {
    Name : "IPhone",
    Price : 90000,
    Stock : true
}
var styles = "effects";
const element = (
    <>
    <dl className={styles}>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>{product.Price}</dd>
        <dt>Stock</dt>
        <dd>{(product.Stock==true)?"Avialable":"Out Of Stock"}</dd>
    </dl>
    </>);
    ReactDOM.render(element,
    document.getElementById("container"))