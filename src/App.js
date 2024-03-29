import  React, { Suspense, lazy }  from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import AboutUS from './components/AboutUS';
import ContactUS from './components/ContactUS';
import { RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error.JS';
import RestroMenu from './components/RestroMenu';
// import Grocerry from './components/Grocerry';

const Grocerry = lazy(()=>import('./components/Grocerry'));

const AppHolder = () => {
    return (
        <div className='app'>
            <Header/>
            <Outlet />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const routeOptions = createBrowserRouter([
    {
        path: '/',
        element: <AppHolder/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: 'aboutus',
                element: <AboutUS/>
            },
            {
                path: 'contactus',
                element: <ContactUS/>
            },
            {
                path: 'grocerry',
                element: <Suspense fallback={<h1>Loading</h1>}><Grocerry/></Suspense>
            },
            {
                path: 'restaurant/:restroID',
                element: <RestroMenu />
            }
        ],
        errorElement: <Error/>
    },
])

root.render(<RouterProvider router={routeOptions}/>);