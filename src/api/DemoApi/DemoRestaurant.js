import { useEffect, useState } from 'react'
import { getRestaurantUrl } from '../apiClient'

export default function DemoRestaurantSopt() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    const query = { $top: '5', $format: 'JSON' }
    const restaurantSpotUrl = getRestaurantUrl('NewTaipei', query)

    useEffect(() => {
        async function asyncFunc() {
            console.log('async start')
            async function A() {
                function timeout(ms) {
                    return new Promise((resolve) => setTimeout(resolve, ms))
                }
                await timeout(2000)
                return 'A'
            }
            console.log('老闆拿蘋果')
            await A()
                .then((ansA) => {
                    console.log(ansA)
                })
                .catch(() => {
                    console.log('error')
                })
            console.log('B')
        }
        asyncFunc()
    }, [])

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(restaurantSpotUrl, {})
            // .then(  res => res.json() )
            .then((res) => {
                console.log('res', res)
                return res.json()
            })

            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.RestaurantID}>
                        {item.RestaurantName}
                        {item.Address}
                        {<br />}
                        {item.Class}
                    </li>
                ))}
            </ul>
        )
    }
}
;[
    {
        RestaurantID: '',
        RestaurantName: '',
        Address: '',
        Class: '',
    },
]
