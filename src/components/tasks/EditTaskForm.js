import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import TaskFormProps from "./TaskForm";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../../api/TaskApi";
import { toast } from "react-toastify";
export default function EditTaskForm({ data, tasksId }) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: {
            title: data.title,
            description: data.description,
            due_date: data.due_date,
            status: data.status,
        } });
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: updateTask,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            queryClient.invalidateQueries({ queryKey: ['editTask', tasksId] });
            toast.success('Tarea Actualizada');
            navigate('/');
        }
    });
    const handleForm = (formData) => {
        const data = {
            formData,
            tasksId
        };
        mutate(data);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h1", { className: "text-5xl font-black", children: "Editar Tareas" }), _jsx("p", { className: "text-2xl font-light text-gray-500 mt-5", children: "Llena el siguiente formulario para editar el proyecto" }), _jsx("nav", { className: "my-5", children: _jsx(Link, { className: "bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors", to: '/', children: "Volver a Home" }) }), _jsxs("form", { className: "mt-10 bg-white shadow-lg p-10 rounded-lg", onSubmit: handleSubmit(handleForm), noValidate: true, children: [_jsx(TaskFormProps, { register: register, errors: errors }), _jsx("input", { type: "submit", value: 'Guardar Cambios', className: "bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white text-center uppercase font-bold cursor-pointer transition-colors" })] })] }) }));
}
