import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "../../api/TaskApi";
import EditTaskForm from "../../components/tasks/EditTaskForm";
export default function EditTaskView() {
    const params = useParams();
    const tasksId = parseInt(params.tasksId);
    const { data, isLoading, isError } = useQuery({
        queryKey: ['editTask', tasksId],
        queryFn: () => getTaskById(tasksId),
        retry: false
    });
    if (isLoading)
        return 'Cargando...';
    if (isError)
        return _jsx(Navigate, { to: '/404' });
    if (data)
        return _jsx(EditTaskForm, { data: data, tasksId: tasksId });
}
