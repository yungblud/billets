import { AxiosError } from "axios";

export default class NetworkError extends Error {
    public message: string;

    public axiosError: AxiosError

    constructor({
        axiosError
    }: {
        axiosError: AxiosError
    }) {
        const message = 'NetworkError'
        super(message)
        this.message = message
        this.axiosError = axiosError
    }

    static isValidError(error: unknown): error is NetworkError {
        return error instanceof NetworkError;
    }
}