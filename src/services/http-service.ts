import apiClient from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  authUser<T>(data: object) {
    const controller = new AbortController();
    const request = apiClient.put<T>(this.endpoint, data, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
