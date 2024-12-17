import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
export default function NavMenu({ name }) {
    const queryClient = useQueryClient();
    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN');
        queryClient.invalidateQueries({ queryKey: ['user'] });
    };
    return (_jsxs(Popover, { className: "relative", children: [_jsx(Popover.Button, { className: "inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-purple-400", children: _jsx(Bars3Icon, { className: 'w-8 h-8 text-white ' }) }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1", children: _jsx(Popover.Panel, { className: "absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48", children: _jsxs("div", { className: "w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5", children: [_jsxs("p", { className: 'block p-2', children: ["Hola: ", name] }), _jsx(Link, { to: '/', className: 'block p-2 hover:text-purple-950', children: "Mis Tareas" }), _jsx("button", { className: 'block p-2 hover:text-purple-950', type: 'button', onClick: logout, children: "Cerrar Sesi\u00F3n" })] }) }) })] }));
}
