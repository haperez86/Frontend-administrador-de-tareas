import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from './views/auth/LoginView';
import RegisterView from "./views/auth/RegisterView";
import CreateTaskView from "./views/task/CreateTaskView";
import EditTaskView from "./views/task/EditTaskView";
export default function Router() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(AppLayout, {}), children: [_jsx(Route, { path: '/', element: _jsx(DashboardView, {}), index: true }), _jsx(Route, { path: '/tasks/create', element: _jsx(CreateTaskView, {}) }), _jsx(Route, { path: '/tasks/:tasksId/edit', element: _jsx(EditTaskView, {}) })] }), _jsxs(Route, { element: _jsx(AuthLayout, {}), children: [_jsx(Route, { path: '/auth/login', element: _jsx(LoginView, {}) }), _jsx(Route, { path: '/auth/register', element: _jsx(RegisterView, {}) })] })] }) }));
}
