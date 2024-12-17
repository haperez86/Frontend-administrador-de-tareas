import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, Navigate } from 'react-router-dom';
import Logo from '../components/Logo';
import NavMenu from '../components/NavMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../hooks/useAuth';
export default function AppLayout() {
    const { data, isError, isLoading } = useAuth();
    if (isLoading)
        return 'Cargando...';
    if (isError) {
        return _jsx(Navigate, { to: '/auth/login' });
    }
    if (data)
        return (_jsxs(_Fragment, { children: [_jsx("header", { className: 'bg-gray-800 py-5', children: _jsxs("div", { className: 'max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center', children: [_jsx("div", { className: 'w-64', children: _jsx(Logo, {}) }), _jsx(NavMenu, { name: data.name })] }) }), _jsx("section", { className: 'max-w-screen-lg mx-auto mt-10 p-5', children: _jsx(Outlet, {}) }), _jsx("footer", { className: 'py-5', children: _jsxs("p", { className: 'text-center', children: ["Todos los derechos reservados ", new Date().getFullYear()] }) }), _jsx(ToastContainer, { pauseOnHover: false, pauseOnFocusLoss: false })] }));
}
