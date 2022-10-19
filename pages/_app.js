import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { UserContextProvider } from '../context/UserContext'

export default function App ({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  )
}
