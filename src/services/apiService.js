// src/services/apiService.js
import axios from 'axios';

export const sendPrAnalysisRequest = async (request) => {
    try {
        const response = await axios.post
        (
            `${process.env.API_URL}/api/mercury/git/pr-analysis`,
            request
        );
        // Return the API response data for consumption
        return response.data;
    } catch (error) {
        console.error('Error sending PR Analysis request:', error.message);
        throw error;
    }
};
