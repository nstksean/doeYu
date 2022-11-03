import Layout from '../view/Layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
