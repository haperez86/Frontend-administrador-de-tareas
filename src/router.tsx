import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from './views/auth/LoginView';
import RegisterView from "./views/auth/RegisterView";
import CreateTaskView from "./views/task/CreateTaskView";
import EditTaskView from "./views/task/EditTaskView";

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index />
                    <Route path='/tasks/create' element={<CreateTaskView />}  />
                    <Route path='/tasks/:tasksId/edit' element={<EditTaskView />}  />
                </Route>
                
                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}