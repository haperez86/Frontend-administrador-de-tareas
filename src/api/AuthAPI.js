var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import api from "../lib/axios";
import { isAxiosError } from "axios";
import { userSchema } from "../types";
export function createAccount(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = '/register';
            const { data } = yield api.post(url, formData);
            return data;
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
        }
    });
}
export function authenticateUser(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = '/login';
            const { data } = yield api.post(url, formData); // Especificamos que la respuesta tiene un campo 'token'
            console.log(data.token);
            // Verifica que 'data.token' es un string antes de guardar
            if (typeof data.token === 'string') {
                localStorage.setItem('AUTH_TOKEN', data.token);
            }
            else {
                throw new Error('El token recibido no es válido');
            }
            return data; // Retorna el objeto completo si necesitas usarlo en otra parte
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error; // Lanza otros errores no relacionados con Axios
        }
    });
}
export function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api('/user');
            const response = userSchema.safeParse(data);
            if (response.success) {
                return response.data;
            }
        }
        catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
        }
    });
}
