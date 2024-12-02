interface ProductName{
    abstract function PrintName() : void;
}
abstract class ProductPrice{
    function PrintPrice():void{
        log "20.00";
    }
}
class Product extends ProductPrice implements ProductName{
    override function PrintName():void(){
        log "Choclate";
    }
}
class _Main {
    static function main(args:String[]):void {
        var product = new Product();
        product.PrintName;
        product.PrintPrice;
    }
}