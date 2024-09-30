// src/utils/githubVarsExtractor.js
export const extractGitHubVariables = () => {
    return {
        actor: process.env.GITHUB_ACTOR,
        actorId: process.env.GITHUB_ACTOR_ID,
        eventName: process.env.GITHUB_EVENT_NAME,
        repoFullName: process.env.GITHUB_REPOSITORY,
        repositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
        repositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID,
        baseRef: process.env.GITHUB_BASE_REF,
        headRef: process.env.GITHUB_HEAD_REF,
        ref: process.env.GITHUB_REF,
        refName: process.env.GITHUB_REF_NAME,
        refType: process.env.GITHUB_REF_TYPE,
        sha: process.env.GITHUB_SHA
    };
};
