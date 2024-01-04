import Login from '../containers/Login/index.js'
import Register from '../containers/Register/index.js'
import Home from '../containers/Home/index.js'
import Product from '../containers/Products/index.js'
import Cart from '../containers/Cart/index.js'
import Admin from '../containers/Admin/index.js' 
// import xeckup from './private-routes.js'
import { useEffect,useState } from 'react'
import { useUser } from '../hooks/UserContext.js'
import { PrivateRoute, Root } from './PrivateRouter.js'


import {  // 'Routes' Substituiu o switch
  Navigate,
  Route, 
  Routes, 
  redirect,
  createBrowserRouter,
  NavLink
} from 'react-router-dom'
  // 'createBrowserRouter' Atualiza a rota. ele esta no index.
  // 'Routes' examana as rotas 'route' para verificar qual delas corresponde ao pedido de camilho URL.
  // 'Route' Executa o Componente, Que esta associado a Um caminho Na 'Url', Caso Esse Caminho seja Colocado. 

function RouterPag () {
  // const {userData} = useUser()

  const router = createBrowserRouter([  
    { 
    path: "/login",
    element: <Login />,
    },
    { 
    path: "/register",
    element: <Register />,
    },
    { 
    path: "/",
    element: Root() ? <Home /> : <Navigate to="/login" />
    },
    { 
    path: "/home",
    element: <Navigate to="/" />,
    },
    { 
    path: "/products",
    element: Root() ? <Product /> : <Navigate to="/login" />,
    },
    { 
    path: "/cart",
    element: Root() ? <Cart /> : <Navigate to="/login" />,
    },
    { 
    path: "/admin",
    element: PrivateRoute() ? <Admin /> : <Navigate to="/home" />,
    },
    { 
    path: "/pedidos",
    element: PrivateRoute() ? <Admin Atr="/pedidos" /> : <Navigate to="/home" />,
    },
    { 
    path: "/listar-pedidos",
    element: PrivateRoute() ? <Admin Atr="/listar-pedidos" /> : <Navigate to="/home" />,
    },
    { 
    path: "/novo-produto",
    element: PrivateRoute() ? <Admin Atr="/novo-produto" /> : <Navigate to="/home" />,
    },
    { 
    path: "/editar-produto",
    element: PrivateRoute() ? <Admin Atr="/editar-produto" /> : <Navigate to="/home" />,
    }

    ]);

  
  return router
  //  return (  
  //   <> 
  //     <Routes>
  //       <Route path='/login' element={<Login />} />
  //       <Route path='/register' element={<Register />} />
  //       <Route path='/home' element={localStorage.getItem('NomeDaMykay:paraidentificar') ? <Home /> : <Navigate to="/login" />} /> 
  //       <Route path='/' element={<Navigate to="/home" />} /> 
  //       <Route path='/products' element={localStorage.getItem('NomeDaMykay:paraidentificar') ? <Product /> : <Navigate to="/login" />} /> 
  //       <Route path='/cart' element={localStorage.getItem('NomeDaMykay:paraidentificar') ? <Cart /> : <Navigate to="/login" />} /> 
  //       <Route path='/admin' element={localStorage.getItem('NomeDaMykay:paraidentificar') ? <Admin /> : <Navigate to="/home" />} /> 
  //     </Routes>
  //   </>
  // )
}
  // {!isAdmin && <Header />}  Olha que Jogada boa essa     <Admin /> : <Navigate to="/home" />
export default RouterPag
