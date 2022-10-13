import Link from 'next/link'
import { useRouter } from 'next/router'
import SpotCards from '../../../components/SpotCards/SpotCards'
import { DemoScenicSpot } from './dss'


const Post = () => {

    console.log('router:', useRouter().query)
    const router = useRouter()
    const { restaurants } = router.query
    console.log('router:', restaurants, typeof restaurants)
    return <>
        {/* Optional chaining (?.) */}
        {restaurants?.includes('ddd') && 'Shows'}
        <p>Post: {restaurants}</p>


        <DemoScenicSpot restaurants={restaurants} />
        <SpotCards />
    </>

}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}

