import axios from 'axios'
import { AddAxiosRequestInterceptorParams, ConcertsKitCommonHeaders } from '../types'

const axiosInstance = axios.create()

export const initAxios = ({ baseURL, headers }: {
    baseURL: string
    headers: ConcertsKitCommonHeaders
}) => {
    axiosInstance.defaults.baseURL = baseURL
    axiosInstance.defaults.headers.common = headers
    axiosInstance.defaults.timeout = 1000 * 10
    axiosInstance.defaults.withCredentials = true
}

export const updateAxiosCommonHeaders = (headers: ConcertsKitCommonHeaders) => {
    axiosInstance.defaults.headers.common = headers
}

export const addAxiosRequestInterceptor = ({
    onFulfilled,
    onRejected,
    options,
}: AddAxiosRequestInterceptorParams) => {
    axiosInstance.interceptors.request.use(onFulfilled, onRejected, options)
}

export default axiosInstance
