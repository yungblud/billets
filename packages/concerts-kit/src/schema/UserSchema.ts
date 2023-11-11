import { z } from "zod";

const UserSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    created_at: z.date()
})

export type UserSchemaType = z.infer<typeof UserSchema>

export default UserSchema