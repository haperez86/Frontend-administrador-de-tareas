import { jsx as _jsx } from "react/jsx-runtime";
export default function ErrorMessage({ children }) {
    return (_jsx("div", { className: "text-center my-4 bg-red-100 text-red-600 font-bold p-3 uppercase text-sm", children: children }));
}
