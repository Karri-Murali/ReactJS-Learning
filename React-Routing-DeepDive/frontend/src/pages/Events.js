import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function Events() {
    const response = useLoaderData();

    if (response.isError) {
        return <p>{response.isError}</p>
    }
    const events = response.events;
    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default Events;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {
        //     isError : true,
        //     message : 'Could not Fetch the Events'
        // }
        // throw new Response(JSON.stringify({
        //     message: 'Could not Fetch the events'
        // }),
        // {status: 500});
        return json(
            { message: 'Could not Fetch the events' },
            { status: 500 }
        )

    } else {
        const resData = await response.json();
        return resData;
    }
}
