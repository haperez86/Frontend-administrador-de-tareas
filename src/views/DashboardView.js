import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask, getTasks } from '../api/TaskApi';
import { toast } from 'react-toastify';
export default function DashboardView() {
    const { data, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    });
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: deleteTask,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success('Tarea Eliminada');
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        }
    });
    if (isLoading)
        return 'Cargando...';
    console.log(data);
    if (data)
        return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-5xl font-black", children: " Mis Tareas " }), _jsx("p", { className: "text-2xl font-light text-gray-500 mt-5", children: " Administra tus tareas" }), _jsx("nav", { className: "my-5", children: _jsx(Link, { className: " bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors", to: '/tasks/create', children: "Nueva Tarea" }) }), data.length ? (_jsx("ul", { role: "list", className: "divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg", children: data.map((tasks) => (_jsxs("li", { className: "flex justify-between gap-x-6 px-5 py-10", children: [_jsx("div", { className: "flex min-w-0 gap-x-4", children: _jsxs("div", { className: "min-w-0 flex-auto space-y-2", children: [_jsx(Link, { to: ``, className: "text-gray-600 cursor-pointer hover:underline text-3xl font-bold", children: tasks.title }), _jsxs("p", { className: "text-sm text-gray-400", children: ["Descripcion: ", tasks.description] }), _jsxs("p", { className: "text-sm text-gray-400", children: ["Fecha Vencimiento: ", tasks.due_date] }), _jsxs("p", { className: "text-sm text-gray-400", children: ["Estado: ", tasks.status] })] }) }), _jsx("div", { className: "flex shrink-0 items-center gap-x-6", children: _jsxs(Menu, { as: "div", className: "relative flex-none", children: [_jsxs(Menu.Button, { className: "-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900", children: [_jsx("span", { className: "sr-only", children: "opciones" }), _jsx(EllipsisVerticalIcon, { className: "h-9 w-9", "aria-hidden": "true" })] }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: _jsxs(Menu.Items, { className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [_jsx(Menu.Item, { children: _jsx(Link, { to: `/tasks/${tasks.id}/edit`, className: 'block px-3 py-1 text-sm leading-6 text-gray-900', children: "Editar Tarea" }) }), _jsx(Menu.Item, { children: _jsx("button", { type: 'button', className: 'block px-3 py-1 text-sm leading-6 text-red-500', onClick: () => mutate(tasks.id), children: "Eliminar Tarea" }) })] }) })] }) })] }, tasks.id))) })) : (_jsxs("p", { className: 'text-center py-20', children: [" No hay Tareas a\u00FAn ", '', _jsx(Link, { to: '/tasks/create', className: " text-fuchsia-500 font-bold", children: "Crear Tarea" })] }))] }));
}
