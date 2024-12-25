const BASE_URL = 'http://localhost:8080';

async function postRequest(endpoint, data) {
    const isFormData = data instanceof FormData;

    const options = {
        method: 'POST',
        body: isFormData ? data : JSON.stringify(data),
    };

    if (!isFormData) {
        options.headers = {
            'Content-Type': 'application/json',
        };
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
        const errorDetails = await response.text();
        console.error(`[POST] Ошибка запроса на ${endpoint}. Статус: ${response.status}, Детали: ${errorDetails}`);
        throw new Error(`Ошибка отправки данных на ${endpoint}: ${response.status}`);
    }

    return response;
}

function postCandidateForm(candidate) {
    return postRequest('candidates', candidate);
}

function postClientForm(client) {
    return postRequest('clients', client);
}

function postSubscriber(subscriberEmail) {
    return postRequest('subscribers', { email: subscriberEmail });
}

export { postCandidateForm, postClientForm, postSubscriber };
