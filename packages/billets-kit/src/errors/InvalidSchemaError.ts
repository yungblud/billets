import { ZodError } from "zod";

export default class InvalidSchemaError extends Error {

    public message: string;

    public zodError: ZodError

    constructor({
        zodError
    }: {
        zodError: ZodError
    }) {
        const message = 'InvalidSchemaError'
        super(message)
        this.message = message
        this.zodError = zodError
    }

    static isValidError(error: unknown): error is InvalidSchemaError {
        return error instanceof InvalidSchemaError;
    }
}