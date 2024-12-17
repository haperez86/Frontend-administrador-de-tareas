import { z } from 'zod';
/** Auth & Users */
const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string()
});
/** Users */
export const userSchema = authSchema.pick({
    name: true,
    email: true,
}).extend({
    id: z.union([z.string(), z.number()]).transform(String), // Convierte a string si es necesario.
});
/** Tasks */
export const taskSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    due_date: z.string(),
    status: z.string()
});
export const dashboardTaskSchema = z.array(taskSchema.pick({
    id: true,
    title: true,
    description: true,
    due_date: true,
    status: true
}));
