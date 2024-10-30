import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

export default function RootLayout() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Daya Sagar | Software Engineer</title>
        <meta name="description" content="Portfolio of Daya Sagar, a passionate software engineer specializing in web development." />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}