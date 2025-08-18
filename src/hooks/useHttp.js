import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    try {
        const response = await fetch(url, config);
        const resData = await response.json();

        if (!response.ok) {
            throw new Error(resData.message || `Something went wrong`);
        }
        return resData;
    } catch (error) {
        throw new Error("Failed to send HTTP request: " + error.message);
    }
};

export default function useHttp(url, config) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await sendHttpRequest(url, config);
            setData(data);
        } catch (err) {
            setError(err.message || "Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest();

        };
    }, [], config);

    return { data, isLoading, error, sendRequest };
};