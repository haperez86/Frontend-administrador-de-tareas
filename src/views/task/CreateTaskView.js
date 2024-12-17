var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import TaskForm from "../../components/tasks/TaskForm";
import { createTask } from "../../api/TaskApi";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
export default function CreateTaskView() {
    const navigate = useNavigate();
    const initialValues = {
        title: "",
        description: "",
        due_date: "",
        status: "",
    };
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });
    const { mutate } = useMutation({
        mutationFn: createTask,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success('Tarea Creda');
            navigate('/');
        }
    });
    const handleForm = (formData) => __awaiter(this, void 0, void 0, function* () { return mutate(formData); });
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h1", { className: "text-5xl font-black", children: "Crear Tareas" }), _jsx("p", { className: "text-2xl font-light text-gray-500 mt-5", children: "Diligencia el siguiente formulario" }), _jsx("nav", { className: "my-5", children: _jsx(Link, { className: "bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors", to: '/', children: "Volver a Home" }) }), _jsxs("form", { className: "mt-10 bg-white shadow-lg p-10 rounded-lg", onSubmit: handleSubmit(handleForm), noValidate: true, children: [_jsx(TaskForm, { register: register, errors: errors }), _jsx("input", { type: "submit", value: 'Crear Tarea', className: "bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white text-center uppercase font-bold cursor-pointer transition-colors" })] })] }) }));
}
