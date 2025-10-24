# Organization & Users Management Application

## Overview
This is a full-stack Organization & Users Management application built with modern technologies. It features professional authentication, a modern user interface, and additional functionalities for managing users and organizations effectively.

## Project Structure
The project is organized into several key directories:

- **.devcontainer**: Contains configuration for the development container.
- **infra**: Holds Docker and Nginx configurations for deployment.
- **backend**: The server-side application built with TypeScript and Express.
- **frontend**: The client-side application built with Next.js.
- **shared**: Contains shared types used across both frontend and backend.
- **scripts**: Includes scripts for database seeding and migrations.
- **tests**: Contains end-to-end and integration tests.
- **docs**: Documentation for architecture and API usage.

## Technologies Used
- **Backend**: TypeScript, Express, Prisma, JWT for authentication.
- **Frontend**: Next.js, React, TypeScript.
- **Database**: PostgreSQL (or any other supported by Prisma).
- **Containerization**: Docker for both frontend and backend.
- **Testing**: Jest for unit and integration tests, Cypress for end-to-end tests.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- Docker and Docker Compose
- PostgreSQL (if not using Docker for the database)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd org-management-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - Copy the example environment files and fill in the required values:
     ```
     cp backend/.env.example backend/.env
     cp frontend/.env.local.example frontend/.env.local
     ```

5. Start the application using Docker:
   ```
   cd infra
   docker-compose up
   ```

### Running Tests
- To run backend tests:
  ```
  cd backend
  npm test
  ```

- To run frontend tests:
  ```
  cd frontend
  npm test
  ```

## Additional Features
- User roles and permissions management.
- Organization creation and management.
- User authentication with JWT.
- Responsive design for mobile and desktop views.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.