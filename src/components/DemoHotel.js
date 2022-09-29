import { useEffect, useState } from 'react'
import { getHotelUrl } from "../api/apiClient";


export default function DemoHotel() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const query = ({ $top: '5', $format: 'JSON' })
    const hotelSpotUrl = getHotelUrl('NewTaipei', query)


    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(hotelSpotUrl)
            // .then(  res => res.json() )
            .then(
                (res) => {
                    console.log("res", res)
                    return res
                        .json()
                }
            )

            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.HotelID}>
                        "ID":{item.HotelID}"Name":{item.HotelName}{<br />}"Adress":{item.Address}
                    </li>
                ))}
            </ul>
        );
    }

}