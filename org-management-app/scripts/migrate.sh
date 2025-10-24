#!/bin/bash

# This script is for running database migrations using Prisma.

# Navigate to the backend directory
cd ../backend

# Run the Prisma migrate command
npx prisma migrate deploy

# Optionally, you can add additional commands here, such as seeding the database
# npx prisma db seed

echo "Database migrations completed."