import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import TaskForm from "../../components/tasks/TaskForm"
import { TaskFormData } from "../../types"
import { createTask } from "../../api/TaskApi"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"

export default function CreateTaskView() {

    const navigate = useNavigate()
    const initialValues: TaskFormData = {
        title: "",
        description: "",
        due_date: "",
        status: "",
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const {mutate} = useMutation({
        mutationFn: createTask,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: () => {
            toast.success('Tarea Creda')
            navigate('/')
        }
    })

    const handleForm = async (formData: TaskFormData) => mutate(formData)
    

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black">Crear Tareas</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Diligencia el siguiente formulario</p>

                <nav className="my-5">
                    <Link
                        className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                        to='/'>
                        Volver a Home
                    </Link>
                </nav>
                <form
                    className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <TaskForm
                        register={register}
                        errors={errors}
                    />

                    <input
                        type="submit"
                        value='Crear Tarea'
                        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white text-center uppercase font-bold cursor-pointer transition-colors"
                    />
                </form>
            </div>
        </>
    )
}
