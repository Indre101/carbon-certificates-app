# Carbon Certificates App

Welcome to the Carbon Certificates App! This application is designed to fetch and display carbon certificates data from the Agreena Carbon Registry API. Users can explore certificates, mark them as favorites, and manage their selections conveniently.

## Tech Stack

The Carbon Certificates App is built using the following technologies:

- React (with TypeScript)
- React Query
- Tailwind CSS

## Features

1. **Certificates Page**: View a paginated list of carbon certificates fetched from the Agreena Carbon Registry API.

2. **Favourites Page**: Save your favorite certificates for quick access. Remove certificates from your favorites list as needed.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [repository_url]
   ```

2. Navigate to the project directory:

   ```bash
   cd carbon-certificates-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

The app should now be running locally.

## API Endpoint

The app fetches data from the following API endpoint:

- [https://demo.api.agreena.com/api/public/carbon_registry/v1/certificates?includeMeta=true&page=1&limit=10](https://demo.api.agreena.com/api/public/carbon_registry/v1/certificates?includeMeta=true&page=1&limit=10)
