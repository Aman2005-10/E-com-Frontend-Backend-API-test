import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';
import PrivateRoute from './components/route/PrivateRoute';
import Dashboard from './pages/Dashboard';
import PublicRoute from './components/route/PublicRoute';
import DashboardLayout from './components/layout/DashboardLayout';

import PageNotFound from './pages/PageNotFound';




function App() {






  return (
    <>



<BrowserRouter>

<Routes>
   <Route  element={<PublicRoute />} >
  
  <Route path='/' element={<Home />}  />
  <Route path='/login' element={<Home />}  />
   </Route>


  <Route   element={<PrivateRoute />} >
  <Route element={<DashboardLayout />} >
  
  <Route path='/dashboard' element={<Dashboard />} ></Route>

  <Route path='*' element={<PageNotFound /> } ></Route>
  
</Route>

  </Route>

</Routes>
</BrowserRouter>



    


   

  





    



    </>
  )
}

export default App
