import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password, profilePic, role } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        profilePic,
        role,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
}

// Find all users
export const findAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({});
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error retrieving courses:', error);
    res.status(500).json({ error: 'Error retrieving user' });
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user by ID
export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { username, email, password, profilePic, role } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username,
        email,
        password,
        profilePic,
        role,
      },
    })
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating course' });
  }
}

// Delete user by ID
export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const User = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return res.status(204).json(User);
}
