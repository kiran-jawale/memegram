import React, {useState, useEffect} from "react";

export default function useApiRequest(method, url, data = null) {
    const [response, setResponse] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ;(async () => {
            try {
                const options = {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data ? JSON.stringify(data) : null,
                }
                const res = await fetch(url, options);
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = res.json();
                setResponse(data);
            } catch (err) {
                setErrors(err);
            } finally {
                setLoading(false);
            }
        })();
    },[method, url, data]);

    return [response, errors, loading]
}