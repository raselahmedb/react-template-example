
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import Error from './pages/Error';
import Documentation from './pages/Documentation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AdminPanel />}>
      {/* <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
       <Route path='/documentation' element={<Documentation />} />
       <Route path='*' element={<Error />} />
    </Route>
  )
)

export default function App() {
  return (
    <>
      
    <RouterProvider router={router} />
    </>
  );
}
