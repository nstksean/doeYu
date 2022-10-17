import Link from 'next/link'
import { useRouter } from 'next/router'
import { DemoScenicSpot, items } from '../../../components/DemoData/dss'
import FoodCards from '../../../components/FoodCards/FoodCards'


const Post = () => {

    // console.log('router:', useRouter().query)
    const router = useRouter()
    const { restaurants } = router.query
    // console.log('router:', restaurants, typeof restaurants)

    return <>
        <FoodCards urlQuery={restaurants} pageType={useRouter().query} />
    </>

}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}

