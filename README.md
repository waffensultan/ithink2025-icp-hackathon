# iThink 2025 Hackathon (Team Hackshually)

DO NOT share this repository with anyone that is not a member of our team.

## Prerequisites

1. Install DFX SDK (Internet Computer CLI). For further instructions, read here: https://internetcomputer.org/docs/building-apps/getting-started/install#installing-dfx-via-dfxvm

2. Make sure you have PNPM installed on your machine.

```bash
npm install -g pnpm
```

## Setup

#### 1. Clone the repository (Run on a CLI of your choice)

```bash
git clone https://github.com/waffensultan/ithink2025-icp-hackathon.git
cd ithink2025-icp-hackathon
```

#### 2. Start local IC replica (Run on WSL)

```bash
dfx start --background
```

> This runs the local IC network on port 4943

### 3. Create canisters (Run on WSL)

```bash
dfx canister create backend
dfx canister create frontend
```

### 3.1. Rename your .env.example (inside ithink2025-icp-hackathon/src/frontend) to .env.local (IMPORTANT!)

### 3.2. Update your .env.local with your backend canister ID

Retrieve your backend canister ID (Run on WSL):

```bash
dfx canister id backend
# example output: sidufwl-skdfhxc-wuays
```

Then replace the values in your `.env.local` file inside the frontend folder with your actual backend canister ID.

```env
NEXT_PUBLIC_BACKEND_CANISTER_ID=sidufwl-skdfhxc-wuays; // THIS IS ONLY AN EXAMPLE!
DFX_NETWORK=local;
```

### 4. Build the frontend server (Run on any CLI)

```bash
cd frontend # make sure you are inside the frontend folder
pnpm install # this will install any project dependencies
pnpm run build # this will output an 'out' folder
```

### 5. Deploy your canisters (Run on WSL)

```bash
dfx deploy
```

### 6. Generate backend types and declarations (Run on WSL)

```bash
dfx generate backend
```

> **IMPORTANT**: Move the generated declarations folder from `dfx generate backend` (`ithink2025-icp-hackathon/src/declarations`) to `ithink2025-icp-hackathon/frontend/src/declarations` for proper imports.

### 7. Run frontend sever (Run on any CLI)

```bash
cd frontend # make sure you are inside the frontend server
pnpm run dev
```

> **NOTE**: The canisters must be deployed as long as the frontend server is running to be able to connect to the backend.

## D-Day (Deployment Day) ⚠️ FOR SUBMISSION ONLY ⚠️

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
   `http://127.0.0.1:4943/?canisterId=<canister_id>
