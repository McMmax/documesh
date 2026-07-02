# Documesh

A real-time collaborative document framework built on the Cloudflare Workers stack.

## Tech Stack

*   **Frontend**: Nuxt 4, Vue 3, Tailwind CSS
*   **Editor**: TipTap v3 (Y.js CRDT for real-time sync)
*   **Backend**: Cloudflare Workers
*   **Real-time Collaboration**: Durable Objects (WebSocket Hibernation)
*   **Database**: Cloudflare D1 (Structured data persistence)

## Key Features

*   **Real-time Synchronization**: Powered by Y.js and Cloudflare Durable Objects.
*   **Serverless Persistence**: Structured data stored in Cloudflare D1.
*   **Performance**: Optimized for low-latency collaboration using the Durable Objects Hibernation API.
*   **Modern Editor**: Rich text editing experience with TipTap.

## Quick Start

### Prerequisites
*   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed.
*   Node.js installed.

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   cd workers
   npm install
   ```
3. Configure your Cloudflare D1 database and Durable Object bindings in `workers/wrangler.toml`.
4. Start the development server:
   ```bash
   npm run dev
   ```
