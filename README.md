# Cavius Assignment

This project is a solution to the React.js Intern Assignment provided by Cavius. It involves creating a simple React.js application that fetches and displays data from a public API, allowing users to search and filter the displayed data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Integration](#api-integration)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The objective of this assignment is to develop a React.js application that integrates with a public API to fetch and display data. The application includes routing for navigation and a search functionality for filtering results.

## Features

- Fetches data from a public API (JSONPlaceholder API)
- Displays data in a structured manner using cards
- Implements client-side routing with React Router
- Search functionality to filter results
- Responsive design using Tailwind CSS

## API Integration

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch and display posts. Data is fetched using the `fetch` API inside React's `useEffect` hook.

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- Git installed

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/prabhjotsingh-22/Cavius_Assignment.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Cavius_Assignment
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- The home page displays a list of posts fetched from the API.
- Users can search for posts using the search bar.
- Clicking on a post redirects to a detailed view of the selected post.

## Deployment

The project can be deployed using services like Vercel or Netlify.

### Deploying to Vercel
1. Install the Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deployment command:
   ```sh
   vercel
   ```

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

