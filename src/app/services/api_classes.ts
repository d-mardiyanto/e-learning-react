import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
    throw new Error('API URL is not defined. Please set NEXT_PUBLIC_API_URL in your .env.local file.');
}
interface Classes {
    id:number;
    class_name: string;
}

export const storeClass = async (): Promise<string> => {
    try {
        const response = await axios.post<{ classData : string }>(
            `${API_URL}/classes`,
            {}, // Post body (empty in this case)
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            }
        );
        return response.data.classData;
    } catch (error) {
        console.error('Error Storing Class Record:', error);
        throw error;
    }
};

export const updateClass = async (): Promise<string> => {
    try {
        const response = await axios.post<{ classData: string }>(
            `${API_URL}/classes`,
            {}, // Post body (empty in this case)
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            }
        );
        return response.data.classData;
    } catch (error) {
        console.error('Error Updating Class Record:', error);
        throw error;
    }
};

export const deleteClass = async (): Promise<string> => {
    try {
        const response = await axios.post<{ classData: string }>(
            `${API_URL}/classes`,
            {}, // Post body (empty in this case)
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            }
        );
        return response.data.classData;
    } catch (error) {
        console.error('Error Updating Class Record:', error);
        throw error;
    }
};

export const getClasses = async (): Promise<Classes[]> => {
    try {
        const response = await axios.get<{ classes: Classes[] }>(`${API_URL}/homepage/classes/show`,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            },
        );
        return response.data.classes;
    } catch (error) {
        console.error('Error retrieving classes:', error);
        throw error;
    }
};

export const getClass = async (id:string): Promise<Classes> => {
    try {
        const response = await axios.get<{ Classes: Classes }>(`${API_URL}/classes/show`,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            },
        );
        return response.data.Classes;
    } catch (error) {
        console.error('Error retrieving classes:', error);
        throw error;
    }
};