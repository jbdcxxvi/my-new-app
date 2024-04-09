import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse for typing

interface Data {
    message: string; // Define the structure of the 'data' object
}

const PythonApp: React.FC = () => {
    const [data, setData] = useState<Data | null>(null); // Specify 'Data' as the type

    useEffect(() => {
        const fetchData = async () => {
            const result: AxiosResponse<Data> = await axios.get('/api/data'); // Specify the response type
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            {data ? (
                <p>{data.message}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PythonApp;
