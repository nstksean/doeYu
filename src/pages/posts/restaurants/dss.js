import { useEffect, useState } from 'react'
import { getScenicSpotUrl } from "../../../api/apiClient"
import { citys as citydata } from '../../../data/CityItems';




export function DemoScenicSpot({ restaurants }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [querycity, setquerycity] = useState('')

    const query = ({
        $top: '12',
        $format: 'JSON'
    })
    const scenicSpotUrl = getScenicSpotUrl(querycity, query)

    useEffect(() => {
        setquerycity(restaurants)
        console.log("urlok"), [isLoaded]
    })
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(scenicSpotUrl)
            // .then(  res => res.json() )
            .then(
                (res) => {
                    console.log("res", res)
                    return res.json()
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
            ).then(() => console.log('fetchok'))

    }, [querycity])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {Array.from(items)
                    .map(item => (
                        <li key={item?.ScenicSpotID}>
                            {item?.ScenicSpotID}{item?.ScenicSpotName}{<br />}{item.DescriptionDetail}
                        </li>
                    ))}
            </ul>
        );
    }

};

export const items = DemoScenicSpot.items

console.log(items)