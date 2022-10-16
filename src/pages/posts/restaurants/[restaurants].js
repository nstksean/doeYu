import Link from 'next/link'
import { useRouter } from 'next/router'
import SpotCards from '../../../components/SpotCards/SpotCards'
import { DemoScenicSpot, items } from '../../../components/DemoData/dss'


const Post = () => {

    // console.log('router:', useRouter().query)
    const router = useRouter()
    const { restaurants } = router.query
    // console.log('router:', restaurants, typeof restaurants)
    return <>
        <SpotCards urlQuery={restaurants} pageType={useRouter().query} />
    </>

}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}

