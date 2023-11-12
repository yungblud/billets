import { UserSchemaType } from "../schema/UserSchema";

export default class User {
    constructor(private readonly data: UserSchemaType) {}

    serialize(): UserSchemaType {
        return {
            id: this.data.id,
            email: this.data.email,
            created_at: this.data.created_at
        }
    }
}