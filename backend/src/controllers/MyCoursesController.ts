import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createMyCourse = async (req: Request, res: Response) => {
  const { userId, lessonId } = req.body;
  try {
    const favorite = await prisma.myCourses.create({
      data: {
        userId,
        lessonId,
      },
    });
    res.json(favorite);
  } catch (error) {
    console.error('Error creating favorite:', error);
    res.status(500).json({ error: 'Error creating favorite' });
  }
};


export const findAllMyCourse = async (_req: Request, res: Response) => {
  try {
    const favorites = await prisma.myCourses.findMany({});
    return res.status(200).json(favorites);
  } catch (error) {
    console.error('Error retrieving favorites:', error);
    res.status(500).json({ error: 'Error retrieving favorites' });
  }
};


export const getMyCourseById = async (req: Request, res: Response) => {
  const favoriteId = parseInt(req.params.id, 10);
  try {
    const favorite = await prisma.myCourses.findUnique({
      where: {
        id: favoriteId,
      },
    });
    if (favorite) {
      res.json(favorite);
    } else {
      res.status(404).json({ error: 'Favorite not found' });
    }
  } catch (error) {
    console.error('Error retrieving favorite:', error);
    res.status(500).json({ error: 'Error retrieving favorite' });
  }
};


export const updateMyCourse = async (req: Request, res: Response) => {
  const favoriteId = parseInt(req.params.id, 10);
  const { userId, lessonId } = req.body;

  try {
    const updatedFavorite = await prisma.myCourses.update({
      where: {
        id: favoriteId,
      },
      data: {
        userId,
        lessonId,
      },
    });
    
    return res.status(200).json(updatedFavorite);
  } catch (error) {
    console.error('Error updating favorite:', error);
    res.status(500).json({ error: 'Error updating favorite' });
  }
};

export const deleteMyCourse= async (req: Request, res: Response) => {
  const favoriteId = parseInt(req.params.id, 10);
  try {
    await prisma.myCourses.delete({
      where: {
        id: favoriteId,
      },
    });
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting favorite:', error);
    res.status(500).json({ error: 'Error deleting favorite' });
  }
};
