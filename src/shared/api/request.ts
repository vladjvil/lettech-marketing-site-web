import { CandidateFormData, ClientFormData } from "../types/contact";

const BASE_URL = 'http://localhost:8080';

type HeaderType = "application/json" | "multipart/form-data";

async function postForm<T>(endpoint: string, data: T, header: HeaderType): Promise<Response> {
    let response;
    if (header === "multipart/form-data" && data instanceof FormData) {
        response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            body: data,
        });
    } else {
        response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        });
    }

    if (!response.ok) {
        const errorDetails = await response.text();
        console.error(`[POST] Ошибка запроса на ${endpoint}. Статус: ${response.status}, Детали: ${errorDetails}`);
        throw new Error(`Ошибка отправки данных на ${endpoint}: ${response.status}`);
    }

    return response;
}

export function postCandidateForm(candidate: CandidateFormData | FormData): Promise<Response> {
    return postForm('candidates', candidate, "multipart/form-data");
}

export function postClientForm(client: ClientFormData): Promise<Response> {
    return postForm('clients', client, "application/json");
}

export function postSubscriber(subscriberEmail: string): Promise<Response> {
    return postForm('subscribers', { email: subscriberEmail }, "application/json");
}