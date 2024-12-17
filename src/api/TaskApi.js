var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isAxiosError } from "axios";
import api from "../lib/axios";
import { dashboardTaskSchema } from "../types";
import { taskSchema } from '../types';
export function createTask(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api.post('/tasks', formData);
            return data; // Devuelve los datos si es necesario.
        }
        catch (error) {
            console.error('Error al crear la tarea:', error);
            throw new Error('No se pudo crear la tarea.');
        }
    });
}
export function getTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api('/tasks');
            console.log('Datos recibidos del servidor:', data);
            // Validación con dashboardTaskSchema para un arreglo de tareas
            const response = dashboardTaskSchema.safeParse(data);
            if (response.success) {
                console.log('Datos validados:', response.data);
                return response.data; // Devuelve los datos validados.
            }
            else {
                console.error('Error de validación de datos:', response.error);
                throw new Error('Error de validación en la lista de tareas.');
            }
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                console.error('Error al obtener las tareas:', error.response.data.error);
                throw new Error(error.response.data.error);
            }
            else {
                console.error('Error desconocido:', error);
                throw new Error('Error desconocido al obtener las tareas.');
            }
        }
    });
}
export function getTaskById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api(`/tasks/${id}`);
            // Validación con taskSchema para un objeto individual
            const response = taskSchema.safeParse(data);
            if (response.success) {
                return response.data; // Devuelve los datos validados.
            }
            else {
                console.error('Error de validación de datos:', response.error);
                throw new Error('Error de validación en la tarea individual.');
            }
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                console.error('Error al obtener la tarea:', error.response.data.error);
                throw new Error(error.response.data.error);
            }
            else {
                console.error('Error desconocido:', error);
                throw new Error('Error desconocido al obtener la tarea.');
            }
        }
    });
}
export function updateTask(_a) {
    return __awaiter(this, arguments, void 0, function* ({ formData, tasksId }) {
        try {
            const { data } = yield api.put(`/tasks/${tasksId}`, formData);
            return data;
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                console.error('Error al obtener la tarea:', error.response.data.error);
                throw new Error(error.response.data.error);
            }
            else {
                console.error('Error desconocido:', error);
                throw new Error('Error desconocido al obtener la tarea.');
            }
        }
    });
}
export function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const { data } = yield api.delete(`/tasks/${id}`);
            // Verifica si la respuesta contiene un mensaje de éxito
            if (typeof data === 'string' || (data && data.message)) {
                return data; // Devuelve el mensaje o dato de éxito.
            }
            throw new Error('Respuesta inesperada del servidor al eliminar la tarea.');
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                console.error('Error al eliminar la tarea:', error.response.data.error);
                throw new Error(error.response.data.error);
            }
            else {
                console.error('Error desconocido:', error);
                throw new Error('Error desconocido al eliminar la tarea.');
            }
        }
    });
}
