import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ToastContainer } from 'react-toastify';
import Logo from '../components/Logo';
import { Outlet } from 'react-router-dom';
export default function AuthLayout() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'bg-gray-800 min-h-screen', children: _jsxs("div", { className: 'py-10 lg:py-20 mx-auto w-[450px]', children: [_jsx(Logo, {}), _jsx("div", { className: 'mt-10', children: _jsx(Outlet, {}) })] }) }), _jsx(ToastContainer, { pauseOnHover: false, pauseOnFocusLoss: false })] }));
}
