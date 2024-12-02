import PropTypes from 'prop-types';
class PropTypesDemo extends React.Component{
    render(){
        return (
            <>
             <h3 className="bg-dark">React Prop Validations</h3>
             <table>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Valid</th>
                </tr>
                <tr>
                    <td>Array</td>
                    <td>{this.props.propArray}</td>
                    <td>{this.props.propArray ? "true":"false"}</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>{this.props.propString}</td>
                    <td>{this.props.propString ? "true":"false"}</td>
                </tr>
                <tr>
                    <td>Boolean</td>
                    <td>{this.props.propBoolean}</td>
                    <td>{this.props.propBoolean ? "true":"false"}</td>
                </tr>
                <tr>
                    <td>Function</td>
                    <td>{this.props.propFunction(5)}</td>
                    <td>{this.props.propFunction(5)? "true":"false"}</td>
                </tr>
                <tr>
                    <td>Number</td>
                    <td>{this.props.propNumber}</td>
                    <td>{this.props.propNumber ? "true":"false"}</td>
                </tr>
             </table>
            </>
        );
    }
}
PropTypesDemo.PropTypes = {
    propArray : PropTypes.array.isRequired,
    propBoolean : PropTypes.bool.isRequired,
    propString : PropTypes.string.isRequired,
    propFunction : PropTypes.func,
    propNumber : PropTypes.number,
}
PropTypesDemo.defaultProps = {
    propArray: [1,2,3,4,5],  
    propBool: true, 
    propString: "PrabhaS", 
    propFunction: function(x){return x+5},  
    propNumber: 1,  
}
ReactDOM.render(
    <PropTypesDemo propArray={[1,2,3,4,5]} propBoolean = {true} propString = {'Pavan'} propFunction = {function(x) {return x+5}} propNumber = {20}/>,
    document.getElementById("container")
);