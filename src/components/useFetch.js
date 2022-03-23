import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setPending] = useState(true);


    useEffect(() => {

        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error("can not fetch data from server!");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setPending(false);
                })
                .catch((err) => {
                    if (err.name !== 'AbortError') {
                        setError(err.message);
                        setPending(false);
                    }
                });
        }, 1000);
        return () => abortController.abort();
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;