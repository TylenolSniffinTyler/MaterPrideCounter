const express = require('express')
const mongoose = require('mongoose')
const { getAllStudents, getOneStudent, deleteStudent, updateStudentEvents, getTopTen, postStudent, getFilteredStuds, getRankedStuds, getRanks, updateStudentInfo } = require('./routeFunction')
const router = express.Router()
const Student = require("../models/studentModel")

//End point to get all students
router.get('/', (req, res)=> getAllStudents(req, res))

//End point to get top ten students
router.get('/top10', (req, res) => getTopTen(req,res))

//End point to get individual student or students with similar matching "anything"
router.get('/:param', (req, res) => getOneStudent(req, res))

//End point to get filtered students
router.get("/filter/:name", (req, res) => getFilteredStuds(req, res))


//End point to delete a student
router.delete('/:id', (req, res)=> deleteStudent(req, res))

//End point to edit a Students attentance at an event (Points are inherit)
router.patch('/:id/:eventId', (req, res) => updateStudentEvents(req, res))

//End point to edit a students basic info
router.patch('/update/:id/:updateParams' , (req, res) => updateStudentInfo(req,res))


//End point to create a student
router.post('/', (req, res)=> postStudent(req, res)) 
module.exports = router