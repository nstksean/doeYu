import { useRouter } from 'next/router'
import SpotCards from '../../../components/SpotCards/SpotCards'


const Post = () => {
    // console.log('router:', useRouter().query)
    const router = useRouter()
    const { scenic } = router.query
    // console.log('router:', scenic, typeof scenic)

    return <>

        <SpotCards urlQuery={scenic} pageType={useRouter().query} />

    </>

}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}