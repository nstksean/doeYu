import { useRouter } from 'next/router'
import ResturantContainer from '../../../Container/ResturantContainer'

const Post = () => {
    // console.log('router:', useRouter().query)
    const router = useRouter()
    const { restaurants } = router.query
    // console.log('router:', restaurants, typeof restaurants)

    return (
        <>
            <ResturantContainer
                urlQuery={restaurants}
                pageType={useRouter().query}
            />
        </>
    )
}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}
