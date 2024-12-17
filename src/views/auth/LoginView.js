import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authenticateUser } from "../../api/AuthAPI";
import { toast } from "react-toastify";
export default function LoginView() {
    const initialValues = {
        email: '',
        password: '',
    };
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: authenticateUser,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success('Login exitoso');
            navigate('/');
        }
    });
    const handleLogin = (formData) => mutate(formData);
    return (_jsxs(_Fragment, { children: [_jsxs("form", { onSubmit: handleSubmit(handleLogin), className: "space-y-8 p-10 bg-white", noValidate: true, children: [_jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("label", { className: "font-normal text-2xl", children: "Email" }), _jsx("input", Object.assign({ id: "email", type: "email", placeholder: "Email de Registro", className: "w-full p-3  border-gray-300 border" }, register("email", {
                                required: "El Email es obligatorio",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "E-mail no válido",
                                },
                            }))), errors.email && (_jsx(ErrorMessage, { children: errors.email.message }))] }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("label", { className: "font-normal text-2xl", children: "Password" }), _jsx("input", Object.assign({ type: "password", placeholder: "Password de Registro", className: "w-full p-3  border-gray-300 border" }, register("password", {
                                required: "El Password es obligatorio",
                            }))), errors.password && (_jsx(ErrorMessage, { children: errors.password.message }))] }), _jsx("input", { type: "submit", value: 'Iniciar Sesi\u00F3n', className: "bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer" })] }), _jsx("nav", { className: "mt-10 flex flex-col space-y-4", children: _jsx(Link, { to: '/auth/register', className: "text-center text-gray-300 font-normal", children: "\u00BFNo tienes cuenta? Crea Una" }) })] }));
}
