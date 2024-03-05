import  React  from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import AboutUS from './components/AboutUS';
import ContactUS from './components/ContactUS';
import { RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error.JS';
import RestroMenu from './components/RestroMenu';

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
                path: 'restaurant/:restroID',
                element: <RestroMenu />
            }
        ],
        errorElement: <Error/>
    },
])

root.render(<RouterProvider router={routeOptions}/>);