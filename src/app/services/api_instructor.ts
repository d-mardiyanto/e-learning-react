import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
    throw new Error('API URL is not defined. Please set NEXT_PUBLIC_API_URL in your .env.local file.');
}
interface Instructors {
    photo:string;
    name: string;
    profession:string;
    email:string;
    phone:string;
}

export const getInstructors = async (): Promise<Instructors[]> => {
    try {
        const response = await axios.get<{ instructors: Instructors[] }>(`${API_URL}/homepage/instructor/show`,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            },
        );
        return response.data.instructors;
    } catch (error) {
        console.error('Error retrieving instructor:', error);
        throw error;
    }
};