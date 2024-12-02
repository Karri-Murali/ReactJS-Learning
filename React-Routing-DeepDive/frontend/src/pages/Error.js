import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent.js'
import MainNavigation from '../components/MainNavigation.js';

export default function ErrorPage() {

    const error = useRouteError();

    let title = "An Error Occurred..!";
    let message = 'Something Went Wrong';

    if (error.status === 500) {
        //message = JSON.parse(error.data).message;
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not Found!';
        message = "Counld Not Found The Page";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}