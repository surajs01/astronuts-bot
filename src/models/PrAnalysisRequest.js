// src/models/PrAnalysisRequest.js
export class PrAnalysisRequest {
    constructor({
                    actor,
                    actorId,
                    repoFullName,
                    baseRef,
                    headRef,
                    eventName,
                    ref,
                    refName,
                    refType,
                    repositoryOwner,
                    repositoryOwnerId,
                    sha,
                    token,
                    tokenType,
                }) {

        this.eventName = eventName;

        this.actor = actor;
        this.actorId = actorId;

        this.repoFullName = repoFullName;
        this.repositoryOwner = repositoryOwner;
        this.repositoryOwnerId = repositoryOwnerId;

        this.baseRef = baseRef;
        this.headRef = headRef;

        this.ref = ref;
        this.refName = refName;
        this.refType = refType;

        this.sha = sha;
        this.token = token;
        this.tokenType = tokenType;
    }
}

