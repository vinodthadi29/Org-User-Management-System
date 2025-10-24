export type User = {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Organization = {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  token: string;
  user: User;
};

export type CreateUserInput = {
  username: string;
  email: string;
  password: string;
};

export type UpdateUserInput = {
  username?: string;
  email?: string;
  password?: string;
};

export type CreateOrganizationInput = {
  name: string;
  description?: string;
};

export type UpdateOrganizationInput = {
  name?: string;
  description?: string;
};