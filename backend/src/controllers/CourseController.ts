import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new course
export const createCourse = async(req: Request, res: Response) => {
  const { title, color, teacherId, description } = req.body;
  try {
    const course = await prisma.course.create({
      data: {
        title,
        color,
        teacherId,
        description,
      },
    });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Error creating course' });
  }
}

// Get all courses
export const getAllCourses = async(req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    console.error('Error retrieving courses:', error);
    res.status(500).json({ error: 'Error retrieving courses' });
  }
}

// Get a course by ID
export const getCourseById = async(req: Request, res: Response) => {
  const courseId = parseInt(req.params.courseId, 10);
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error('Error retrieving course:', error);
    res.status(500).json({ error: 'Error retrieving course' });
  }
}

// Update a course by ID
export const updateCourse = async(req: Request, res: Response) => {
  const courseId = parseInt(req.params.courseId, 10);
  const { title, color, teacherId, description } = req.body;
  try {
    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        title,
        color,
        teacherId,
        description,
      },
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error updating course' });
  }
}

// Delete a course by ID
export const deleteCourse = async(req: Request, res: Response) => {
  const courseId = parseInt(req.params.courseId, 10);
  try {
    await prisma.course.delete({
      where: {
        id: courseId,
      },
    });
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting course' });
  }
}

