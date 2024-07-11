import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header} from './components'
import { Outlet } from 'react-router-dom'
import Main from './pages/main'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-[#f1f2f4]'>
      <div className='w-full block'>
        <Header />
        <main>
          <Main />
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App