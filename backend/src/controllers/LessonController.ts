import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new lesson
export const createLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, color, courseId, videoUrl  } = req.body;
    const lesson = await prisma.lesson.create({
      data: {
        title,
        description,
        color,
        courseId,
        videoUrl ,
      },
    });
    res.status(201).json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all lessons
export const getAllLessons = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessons = await prisma.lesson.findMany();
    res.json(lessons);
  } catch (error) {
    console.error('Error retrieving lessons:', error);
    res.status(500).json({ error: 'Error retrieving lessons' });
  }
};

// Get a lesson by ID
export const getLessonById = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessonId = parseInt(req.params.id, 10);
    const lesson = await prisma.lesson.findUnique({
      where: {
        id: lessonId,
      },
    });
    if (lesson) {
      res.json(lesson);
    } else {
      res.status(404).json({ error: 'Lesson not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a lesson by ID
export const updateLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessonId = parseInt(req.params.id, 10);
    const newData = req.body;
    const updatedLesson = await prisma.lesson.update({
      where: {
        id: lessonId,
      },
      data: newData,
    });
    res.json(updatedLesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a lesson by ID
export const deleteLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessonId = parseInt(req.params.id, 10);
    const deletedLesson = await prisma.lesson.delete({
      where: {
        id: lessonId,
      },
    });
    res.json(deletedLesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
