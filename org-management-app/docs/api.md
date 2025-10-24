# API Documentation for Organization & Users Management Application

## Overview
This document provides an overview of the API endpoints available in the Organization & Users Management application. The API follows RESTful principles and is designed to manage users and organizations effectively.

## Base URL
The base URL for all API endpoints is:
```
http://localhost:3000/api
```

## Authentication

### Login
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "your_jwt_token"
    }
    ```
  - **401 Unauthorized**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

### Register
- **Endpoint:** `POST /auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "message": "User already exists"
    }
    ```

## Users

### Get All Users
- **Endpoint:** `GET /users`
- **Description:** Retrieves a list of all users.
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "user@example.com"
      },
      ...
    ]
    ```

### Get User by ID
- **Endpoint:** `GET /users/:id`
- **Description:** Retrieves a user by their ID.
- **Response:**
  - **200 OK**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "User not found"
    }
    ```

### Create User
- **Endpoint:** `POST /users`
- **Description:** Creates a new user.
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "User created successfully"
    }
    ```

### Update User
- **Endpoint:** `PUT /users/:id`
- **Description:** Updates an existing user.
- **Request Body:**
  ```json
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "User updated successfully"
    }
    ```

### Delete User
- **Endpoint:** `DELETE /users/:id`
- **Description:** Deletes a user by their ID.
- **Response:**
  - **204 No Content**

## Organizations

### Get All Organizations
- **Endpoint:** `GET /orgs`
- **Description:** Retrieves a list of all organizations.
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "id": 1,
        "name": "Organization One"
      },
      ...
    ]
    ```

### Create Organization
- **Endpoint:** `POST /orgs`
- **Description:** Creates a new organization.
- **Request Body:**
  ```json
  {
    "name": "New Organization"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "Organization created successfully"
    }
    ```

### Get Organization by ID
- **Endpoint:** `GET /orgs/:id`
- **Description:** Retrieves an organization by its ID.
- **Response:**
  - **200 OK**
    ```json
    {
      "id": 1,
      "name": "Organization One"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Organization not found"
    }
    ```

### Update Organization
- **Endpoint:** `PUT /orgs/:id`
- **Description:** Updates an existing organization.
- **Request Body:**
  ```json
  {
    "name": "Updated Organization Name"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Organization updated successfully"
    }
    ```

### Delete Organization
- **Endpoint:** `DELETE /orgs/:id`
- **Description:** Deletes an organization by its ID.
- **Response:**
  - **204 No Content**

## Conclusion
This API provides a robust interface for managing users and organizations within the application. Ensure to handle authentication and authorization appropriately when accessing these endpoints.