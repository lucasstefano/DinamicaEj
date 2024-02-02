//routes.ts
// Import necessary modules
import express from 'express';
import { getUserById, createUser, updateUser, deleteUser, findAllUsers } from '../controllers/UsersController';

import { createCourse, getCourseById, updateCourse, deleteCourse, getAllCourses } from '../controllers/CourseController';

import { createLesson, getLessonById, updateLesson, deleteLesson, getAllLessons } from '../controllers/LessonController';

import {  createMyCourse, deleteMyCourse,  findAllMyCourse, getMyCourseById, updateMyCourse } from '../controllers/MyCoursesController';

const router = express.Router()
// User
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/', findAllUsers)
router.get('/users/:id', getUserById)

// Course
router.post('/courses', createCourse)
router.put('/courses/:id', updateCourse)
router.delete('/courses/:id', deleteCourse)
router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseById)

// Lesson
router.post('/lessons', createLesson)
router.put('/lessons', updateLesson)
router.delete('/lessons', deleteLesson)
router.get('/lessons/:id', getLessonById)
router.get('/lessons', getAllLessons)


// MyCourse
router.post('/mycourses', createMyCourse)
router.put('/mycourses/:id', updateMyCourse)
router.delete('/mycourses/:id', deleteMyCourse)
router.get('/mycourses', findAllMyCourse)
router.get('/mycourses/:id', getMyCourseById)

export { router }
