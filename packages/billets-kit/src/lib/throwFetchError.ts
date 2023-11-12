import { z } from "zod";
import InvalidSchemaError from "../errors/InvalidSchemaError";
import { isAxiosError } from "axios";
import NetworkError from "../errors/NetworkError";

export default function throwFetchError(error: unknown) {
    const e = error
    const isInvalidSchemaError = e instanceof z.ZodError
    if (isInvalidSchemaError) {
      throw new InvalidSchemaError({
        zodError: e
      })
    }
    const isNetworkError = isAxiosError(e)
    if (isNetworkError) {
        throw new NetworkError({
            axiosError: e
        })
    }
    throw error
}