import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { AuthContextProvider } from '../context/AuthContext'

export default function App ({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}
