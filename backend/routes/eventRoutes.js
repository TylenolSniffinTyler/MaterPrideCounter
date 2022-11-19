const express = require('express')
const router = express.Router()
const { getAllEvents, getOneEvent, createEvent, getFutureEvents } = require('./routeFunction')

//End point to display every event
router.get("/", (req,res) => getAllEvents(req,res))

//End point to get future events
router.get("/future", (req, res)=> getFutureEvents(req, res))

//End point to get one event
router.get("/:id", (req, res) => getOneEvent(req,res))


//End point to create an `1event
router.post("/create", (req, res) => createEvent(req, res))




module.exports = router