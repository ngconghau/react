import { useState, useEffect } from "react";
import db from "../firebase";
const useFetch = (collection) => {
    const [data, setData] = useState([]);
    const [isPending, setPending] = useState(true);


    useEffect(() => {

        const getDatasFromCollection = []
        const subcriber = db.collection("users").onSnapshot(snapShot => {
            snapShot.forEach(doc => {
                getDatasFromCollection.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setData(getDatasFromCollection)
            setPending(false)
        })
        // const abortController = new AbortController();

        // setTimeout(() => {
        //     fetch(url, { signal: abortController.signal })
        //         .then((res) => {
        //             if (!res.ok) {
        //                 throw Error("can not fetch data from server!");
        //             }
        //             return res.json();
        //         })
        //         .then((data) => {
        //             setData(data);
        //             setPending(false);
        //         })
        //         .catch((err) => {
        //             if (err.name !== 'AbortError') {
        //                 setError(err.message);
        //                 setPending(false);
        //             }
        //         });
        // }, 1000);
        // return () => abortController.abort();
    }, []);
    return { data, isPending }
}

export default useFetch;