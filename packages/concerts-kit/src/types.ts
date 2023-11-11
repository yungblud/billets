import { AxiosInterceptorOptions, InternalAxiosRequestConfig } from "axios"

export type ConcertsKitCommonHeaders = {
    Authorization?: string
}

export type AddAxiosRequestInterceptorParams = {
    onFulfilled: (
        // eslint-disable-next-line no-unused-vars
        config: InternalAxiosRequestConfig<any>
    ) =>
        | InternalAxiosRequestConfig<any>
        | Promise<InternalAxiosRequestConfig<any>>
    // eslint-disable-next-line no-unused-vars
    onRejected?: (error: any) => void
    options?: AxiosInterceptorOptions
}