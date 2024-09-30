// src/index.js
import { PrAnalysisRequest } from './models/PrAnalysisRequest.js';
import { extractGitHubVariables } from './utils/githubVarsExtractor.js';
import { sendPrAnalysisRequest } from './services/apiService.js';
import * as core from '@actions/core';

async function executePrAnalysis() {
    try {

        // Get the GitHub token passed as an input
        const token = core.getInput('github_token');
        const tokenType = "GitHub";

        const githubVars = extractGitHubVariables();
        const prAnalysisRequest = new PrAnalysisRequest(
            {
                ...githubVars,
                token,
                tokenType
            });
        const response = await sendPrAnalysisRequest({
            "gitVendor": "GitHub",
            "request": prAnalysisRequest
        });
        console.log('PR Analysis request sent successfully. Response:', response);
    } catch (error) {
        console.error('Failed to send PR Analysis request:', error);
        process.exit(1);
    }
}

executePrAnalysis()
    .then(_ => console.log('Process completed successfully.'))
    .catch(e => console.error('Process failed:', e));
