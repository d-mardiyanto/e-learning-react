import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_URL) {
    throw new Error('API URL is not defined. Please set NEXT_PUBLIC_API_URL in your .env.local file.');
}
interface Courses {
    title        :string;      
	thumbnail    :string;       
	description  :string;      
	classes      :string;       
	program_study:string;  
    courses_rating:number;
}
export const getCourses = async (): Promise<Courses[]> => {
    try {
        const response = await axios.get<{ courses: Courses[] }>(`${API_URL}/homepage/courses/show`,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "", // Use the key from environment variables
                },
            },
        );
        return response.data.courses;
    } catch (error) {
        console.error('Error retrieving courses:', error);
        throw error;
    }
};