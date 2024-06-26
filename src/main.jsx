import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

//tanstack

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   
   <RouterProvider router={router} /> 
  
  </QueryClientProvider>
  </AuthProvider>
   
   
  </React.StrictMode>,
)
