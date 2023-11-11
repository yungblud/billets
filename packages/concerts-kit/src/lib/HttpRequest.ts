import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosInstance from './axiosInstance'

class HttpRequest {
    private instance: AxiosInstance = axiosInstance

    request<T = any, R = AxiosResponse<T>, D = any>(
        config: AxiosRequestConfig<D>
    ) {
        return this.instance.request<T, R, D>(config)
    }
}

export default HttpRequest
