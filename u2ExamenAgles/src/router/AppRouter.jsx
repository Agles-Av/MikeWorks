/*auxilair que aydua administrar las paths que significan NO ES EL ROUTER
se llama variable de entorno :
es una varible general a la que se puede acceder a todo el protyecto
tiene la configuracion para usar las paths, crea las paths
*/
import React, { useContext } from 'react'
import SignInPage from '../modules/auth/SignInPage';
import AuthContext from '../config/context/auth-context';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from '../modules/temp/Error';
import AdminLayout from '../modules/admin /users/AdminLayout';

function AppRouter() {
  const userRole = localStorage.getItem("userRole");
  const username = localStorage.getItem("username");
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter( // es el diagrama q me enseño const router crea el elemeto grande aun sin usarse 
    createRoutesFromElements( //hacer comparacion con aside
      <>

        {
          //pubico, no tiene paths 
        }
        {
          user.signed ? ( //😱 😱? se llama banderas pq indican el como funciona un booleano cuando no se pone ningun signo 

            <>
              <Route path='/' element={<AdminLayout username={username} userRole={userRole} />}>
                <Route path='admin' element={<> ADMIN HOME </>} />
                <Route path='user' element={<>Usuarios</>} />
              </Route>
            </>
          ) : <Route path='/' element={<SignInPage />} />
        }
        <Route path='/*' element={<Error />} />
      </>
    )

  )
  return <RouterProvider router={router} /> //router es un prop 😭 que manda el router cosnt
}

export default AppRouter
