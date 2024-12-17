import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ErrorMessage from "../ErrorMessage";
export default function TaskFormProps({ errors, register }) {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-5 space-y-3", children: [_jsx("label", { htmlFor: "title", className: "text-sm uppercase font-bold", children: "Nombre de la tarea" }), _jsx("input", Object.assign({ id: "title", className: "w-full p-3  border border-gray-200", type: "text", placeholder: "Nombre de la tarea" }, register("title", {
                        required: "El Titulo de la tarea es obligatorio",
                    }))), errors.title && (_jsx(ErrorMessage, { children: errors.title.message }))] }), _jsxs("div", { className: "mb-5 space-y-3", children: [_jsx("label", { htmlFor: "description", className: "text-sm uppercase font-bold", children: "Descripci\u00F3n" }), _jsx("textarea", Object.assign({ id: "description", className: "w-full p-3  border border-gray-200", placeholder: "Descripci\u00F3n del Proyecto" }, register("description", {
                        required: "Una descripción del proyecto es obligatoria"
                    }))), errors.description && (_jsx(ErrorMessage, { children: errors.description.message }))] }), _jsxs("div", { className: "mb-5 space-y-3", children: [_jsx("label", { htmlFor: "due_date", className: "text-sm uppercase font-bold", children: "Fecha de Vencimiento" }), _jsx("input", Object.assign({ id: "due_date", className: "w-full p-3 border border-gray-200", type: "date" }, register("due_date", {
                        required: "La fecha de vencimiento es obligatoria",
                        validate: (value) => {
                            const selectedDate = new Date(value);
                            const currentDate = new Date();
                            if (selectedDate < currentDate) {
                                return "La fecha de vencimiento no puede ser anterior a hoy";
                            }
                            return true;
                        },
                    }))), errors.due_date && (_jsx(ErrorMessage, { children: errors.due_date.message }))] }), _jsxs("div", { className: "mb-5 space-y-3", children: [_jsx("label", { htmlFor: "status", className: "text-sm uppercase font-bold", children: "Estado" }), _jsxs("select", Object.assign({ id: "status", className: "w-full p-3 border border-gray-200" }, register("status", {
                        required: "El estado es obligatorio",
                    }), { children: [_jsx("option", { value: "", disabled: true, children: "Selecciona un estado" }), _jsx("option", { value: "pendiente", children: "Pendiente" }), _jsx("option", { value: "en progreso", children: "En progreso" }), _jsx("option", { value: "completada", children: "Completada" })] })), errors.status && (_jsx(ErrorMessage, { children: errors.status.message }))] })] }));
}
