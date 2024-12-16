# Centralized Authentication with Next.js

This repository contains a **Next.js** application that serves as a centralized authentication service for multiple client applications (e.g., `chat.com` and `sora.com`). It leverages **NextAuth.js** for authentication and integrates with a database using **Prisma**. The app supports multiple authentication providers, secure password handling, and seamless redirection back to client apps.

## Features

- **OAuth Providers**: Login with Google and GitHub.
- **Credentials-Based Authentication**: Login using email and password.
- **Prisma Integration**: Database support for managing users, sessions, and accounts.
- **JWT Sessions**: Stateless, secure, and scalable session management.
- **Custom Authentication Pages**: Tailored login and error pages.
- **Callbacks for Custom Behavior**: Extendable JWT and session management.

## Workflow

1. **Client Application Initiates Login**:
   - The client app redirects the user to this centralized authentication service.

2. **Authentication Service Handles Login**:
   - The app authenticates the user via Google, GitHub, or credentials.

3. **Redirection Back to Client App**:
   - After successful authentication, the user is redirected back to the client application with a session token.

4. **Token Validation**:
   - The client app validates the token with the authentication service.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/centralized-auth.git
   cd centralized-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file at the root of the project and add the following variables:
     ```env
     DATABASE_URL=your-database-url
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     GITHUB_CLIENT_ID=your-github-client-id
     GITHUB_CLIENT_SECRET=your-github-client-secret
     NEXTAUTH_SECRET=your-secret-key
     ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/pages/api/auth/[...nextauth].ts`: NextAuth.js configuration file.
- `/pages/auth`: Custom authentication pages (e.g., login).
- `/prisma`: Prisma schema and database management.
- `/components`: Reusable UI components.

## How to Use

1. **Client App Integration**:
   - Redirect users to the centralized auth service for login.
   - Provide a `redirect_uri` query parameter to specify where users should be redirected after authentication.

   Example:
   ```
   https://auth.open.ai/api/auth/signin?redirect_uri=https://chat.com/callback
   ```

2. **Token Validation**:
   - Use the provided session token to authenticate API requests or maintain user sessions on the client app.

## License

This project is licensed under the MIT License.
