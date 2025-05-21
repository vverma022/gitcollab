# <img width="1440" alt="Screenshot 2025-05-22 at 12 42 11 AM" src="https://github.com/user-attachments/assets/14db4cda-f3e6-4a78-ae23-82be6bbfed6e" />
GitColab - T3 Stack Project

This is a **T3 Stack** project bootstrapped with `create-t3-app`.

## What's Included?

This project comes pre-configured with:

- **Next.js** - React Framework for production.
- **Prisma** - Database toolkit for seamless database management.
- **tRPC** - Full-stack typesafe APIs.
- **Tailwind CSS** - Utility-first CSS framework.
- **Clerk** - Authentication made simple.
- **LangChain.js** - Framework for building applications with LLMs.
- **Octokit** - Official GitHub REST API client.

## Environment Variables

The following environment variables are required for the application to function properly. Add them to a `.env` file in the root directory.

```plaintext
# Prisma Database Connection URL
DATABASE_URL="mysql://root:NewBeginning@2024@localhost:3306/gitcollab"

# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL='/add-user'

# GitHub Token
GITHUB_TOKEN=''

# Google Gemini API Key
GEMINI_API_KEY=''

# Prisma Database Connection URL
DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database_name>"

# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/add-user

# GitHub Token
GITHUB_TOKEN=<your_github_personal_access_token>

# Google Gemini API Key
GEMINI_API_KEY=<your_google_gemini_api_key>
