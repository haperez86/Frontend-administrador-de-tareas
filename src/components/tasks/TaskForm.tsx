import { UseFormRegister, FieldErrors} from 'react-hook-form'
import ErrorMessage from "../ErrorMessage"
import { TaskFormData } from '../../types'


type TaskFormProps = {
    register: UseFormRegister<TaskFormData>
    errors: FieldErrors<TaskFormData>
}

export default function TaskFormProps({errors, register} : TaskFormProps) {
    return (
        <>
            <div className="mb-5 space-y-3">
                <label htmlFor="title" className="text-sm uppercase font-bold">
                    Nombre de la tarea
                </label>
                <input
                    id="title"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre de la tarea"
                    {...register("title", {
                        required: "El Titulo de la tarea es obligatorio",
                    })}
                />

                {errors.title && (
                    <ErrorMessage>{errors.title.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                    Descripción
                </label>
                <textarea
                    id="description"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Descripción del Proyecto"
                    {...register("description", {
                        required: "Una descripción del proyecto es obligatoria"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="due_date" className="text-sm uppercase font-bold">
                    Fecha de Vencimiento
                </label> 

                <input
                    id="due_date"
                    className="w-full p-3 border border-gray-200"
                    type="date"
                    {...register("due_date", {
                        required: "La fecha de vencimiento es obligatoria",
                        validate: (value) => {
                            const selectedDate = new Date(value);
                            const currentDate = new Date();
                            if (selectedDate < currentDate) {
                                return "La fecha de vencimiento no puede ser anterior a hoy";
                            }
                            return true;
                        },
                    })}
                />

                {errors.due_date && (
                    <ErrorMessage>{errors.due_date.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="status" className="text-sm uppercase font-bold">
                    Estado
                </label>
                
                <select
                    id="status"
                    className="w-full p-3 border border-gray-200"
                    {...register("status", {
                        required: "El estado es obligatorio",
                    })}
                >
                    <option value="" disabled>
                        Selecciona un estado
                    </option>
                    <option value="pendiente">Pendiente</option>
                    <option value="en progreso">En progreso</option>
                    <option value="completada">Completada</option>
                </select>

                {errors.status && (
                    <ErrorMessage>{errors.status.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}