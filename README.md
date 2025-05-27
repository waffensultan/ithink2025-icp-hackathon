# iThink 2025 Hackathon (Team Hackshually)

DO NOT share this repository with anyone that is not a member of our team.

## Prerequisites

1. Install DFX SDK (Internet Computer CLI). For further instructions, read here: https://internetcomputer.org/docs/building-apps/getting-started/install#installing-dfx-via-dfxvm

2. Make sure you have PNPM installed on your machine.

```bash
npm install -g pnpm
```

## Setup

1. Clone the repository

```bash
git clone https://github.com/waffensultan/ithink2025-icp-hackathon.git
cd ithink2025
```

2. Start local IC replica

```bash
dfx start --background
```

> This runs the local IC network on port 4943

3. Create and deploy canisters

```bash
dfx canister create backend
dfx canister create frontend
dfx deploy
dfx generate backend
```

> **IMPORTANT**: Move the generated declarations folder (`src/declarations`) to `frontend/src/declarations` for proper imports.

4. Run frontend server

```bash
cd frontend
pnpm install # install dependencies
pnpm run dev
```

## D-Day (Deployment Day)

1. Build the frontend canister

```bash
cd frontend
pnpm run build
```

> This generates a static file in the `frontend/out/` folder using `export` mode

2. Back to project root

```bash
cd ..
```

3. Re-deploy the canisters

```bash
dfx deploy --mode=upgrade --network=ic
```

> `--mode=upgrade` keeps canister IDs and upgrades existing canisters
> `--network=ic` deploys to the Internet Computer mainnet instead of local

> ⚠ Deploying to the ICP mainnet requires:
>
> -   A DFINITY identity (created with `dfx identity new`)
> -   A wallet canister
> -   Enough cycles (ICP tokens converted into cycles)
>
> Live deployments are NOT a requirement, so we can just give them our repository link, we just have to make sure that things are working.

4. Get live URLs

```bash
Frontend canister via browser:
    - https://<our-canister-id>.icp0.io/
```

## Notes

1. The frontend connects to backend canister via candid definitions in `frontend/src/declarations`.
2. You can view your backend canister Candid UI at:
   `http://127.0.0.1:4943/?canisterId=ucwa4-rx777-77774-qaada-cai`
