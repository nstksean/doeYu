import { useEffect, useState } from 'react'

export default function TrySomeApi() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const tourApi = "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/NewTaipei?%24filter=contains%28Address%2C%27%E4%B8%89%E9%87%8D%27%29&%24top=5&%24format=JSON"

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(tourApi)
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
                    <li key={item.ScenicSpotID}>
                        {item.ScenicSpotID}{item.ScenicSpotName}{<br />}{item.DescriptionDetail}
                    </li>
                ))}
            </ul>
        );
    }

}