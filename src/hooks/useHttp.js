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

export default function useHttp(url, config, initialData = null) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    function clearData() {
        setData(initialData);
    }

    const sendRequest = useCallback(
        async function sendRequest(data) {
            setIsLoading(true);
            try {
                const data = await sendHttpRequest(url, config);
                // const xamp = { ...config }
                // console.log(`${url}, ${config.method}`);

                setData(data);
                return data;
            } catch (err) {
                setError(err.message || "Something went wrong!");
            } finally {
                setIsLoading(false);
            }
        },
        [url, config]
    );


    useEffect(() => {
        if (config && config.method === 'GET') {
            sendRequest();
        }
    }, []);


    return { data, isLoading, error, sendRequest, clearData };
};