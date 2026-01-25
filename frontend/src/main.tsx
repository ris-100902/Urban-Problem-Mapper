import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
)
