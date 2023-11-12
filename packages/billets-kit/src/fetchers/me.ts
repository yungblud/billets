import HttpRequest from "../lib/HttpRequest";
import throwFetchError from "../lib/throwFetchError";
import User from "../models/User";
import UserSchema, { UserSchemaType } from "../schema/UserSchema";

export default class Me {
    async getMe() {
        try {
            const res = await new HttpRequest().request<UserSchemaType>({
                method: "GET",
                url: '/me'
            })
            const data = UserSchema.parse(res.data)
            const user = new User({
                ...data
            })
            return user.serialize()
        } catch (e) {
            throwFetchError(e)
        }
    }
}