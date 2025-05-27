import { idlFactory as backendIDL } from "@/declarations/backend/backend.did.js";
import { Actor, HttpAgent } from "@dfinity/agent";

const canisterId = process.env.NEXT_PUBLIC_BACKEND_CANISTER_ID!;

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

// ONLY for local development
agent.fetchRootKey();

export const backend = Actor.createActor(backendIDL, {
    agent,
    canisterId,
});
