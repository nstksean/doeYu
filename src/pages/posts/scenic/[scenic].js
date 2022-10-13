import { useRouter } from 'next/router'

const Post = () => {
    console.log('router:', useRouter().query)
    const router = useRouter()
    const { scenic } = router.query
    console.log('router:', scenic, typeof scenic)

    return <>
        {/* Optional chaining (?.) */}
        {scenic?.includes('ddd') && 'Shows'}
        <p>Post: {scenic}</p>
    </>

}
export default Post
//{slug && slug.includes('ddd') && 'Shows'}