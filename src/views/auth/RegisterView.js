import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "../../components/ErrorMessage";
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from "../../api/AuthAPI";
import { toast } from "react-toastify";
export default function RegisterView() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    };
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues: initialValues });
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: createAccount,
        onError: (error) => {
            console.log(error.message);
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success('Usuario Creado');
            navigate('/auth/login');
        }
    });
    const password = watch('password');
    const handleRegister = (formData) => mutate(formData);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-5xl font-black text-white", children: "Crear Cuenta" }), _jsxs("p", { className: "text-2xl font-light text-white mt-5", children: ["Llena el formulario para ", '', _jsx("span", { className: " text-fuchsia-500 font-bold", children: " crear tu cuenta" })] }), _jsxs("form", { onSubmit: handleSubmit(handleRegister), className: "space-y-8 p-10  bg-white mt-10", noValidate: true, children: [_jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("label", { className: "font-normal text-2xl", htmlFor: "email", children: "Email" }), _jsx("input", Object.assign({ id: "email", type: "email", placeholder: "Email de Registro", className: "w-full p-3  border-gray-300 border" }, register("email", {
                                required: "El Email de registro es obligatorio",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "E-mail no válido",
                                },
                            }))), errors.email && (_jsx(ErrorMessage, { children: errors.email.message }))] }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("label", { className: "font-normal text-2xl", children: "Nombre" }), _jsx("input", Object.assign({ type: "name", placeholder: "Nombre de Registro", className: "w-full p-3  border-gray-300 border" }, register("name", {
                                required: "El Nombre de usuario es obligatorio",
                            }))), errors.name && (_jsx(ErrorMessage, { children: errors.name.message }))] }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("label", { className: "font-normal text-2xl", children: "Password" }), _jsx("input", Object.assign({ type: "password", placeholder: "Password de Registro", className: "w-full p-3  border-gray-300 border" }, register("password", {
                                required: "El Password es obligatorio",
                                minLength: {
                                    value: 8,
                                    message: 'El Password debe ser mínimo de 8 caracteres'
                                }
                            }))), errors.password && (_jsx(ErrorMessage, { children: errors.password.message }))] }), _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("label", { className: "font-normal text-2xl", children: "Repetir Password" }), _jsx("input", Object.assign({ id: "password_confirmation", type: "password", placeholder: "Repite Password de Registro", className: "w-full p-3  border-gray-300 border" }, register("password_confirmation", {
                                required: "Repetir Password es obligatorio",
                                validate: value => value === password || 'Los Passwords no son iguales'
                            }))), errors.password_confirmation && (_jsx(ErrorMessage, { children: errors.password_confirmation.message }))] }), _jsx("input", { type: "submit", value: 'Registrarme', className: "bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer" })] }), _jsx("nav", { className: "mt-10 flex flex-col space-y-4", children: _jsx(Link, { to: '/auth/login', className: "text-center text-gray-300 font-normal", children: "\u00BFYa tienes cuenta? Iniciar Sesi\u00F3n" }) })] }));
}
