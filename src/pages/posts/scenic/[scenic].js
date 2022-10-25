import { useRouter } from 'next/router'
import ScenicContainer from '../../../Container/ScenicContainer'


const Post = () => {
    // console.log('router:', useRouter().query)
    const router = useRouter()
    const { scenic } = router.query
    // console.log('router:', scenic, typeof scenic)

    return <>

        <ScenicContainer urlQuery={scenic} pageType={useRouter().query} />
    </>

}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}