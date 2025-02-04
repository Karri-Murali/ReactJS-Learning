import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-redux-ced58-default-rtdb.firebaseio.com/cart.json');
            
            if(!response){
                throw new Error('Could Not Fetch Data');
            }
            const data = await response.json();

            return data;
        };
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items : cartData.items || [],
                totalQuantity : cartData.totalQuantity
            }));

        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...!',
                message: 'Fetching Cart Data..Failed!'
            }))
        }
    }
}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart Data..!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-redux-ced58-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items : cart.items,
                    totalQuantity : cart.totalQuantity
                }),
            });

            if (!response) {
                throw new Error('Sending cart Data Failed');
            }
        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sent Cart Data Successfully..!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...!',
                message: 'Sending Cart Data..Failed!'
            }))
        }

    };
}