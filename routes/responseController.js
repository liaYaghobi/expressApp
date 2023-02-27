const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Response = require("../model/responseModel.js")


router.post('/', async(req,res)=>{
    const { id, questionnaireID, userID, responses } = req.body

    const response = new Response({
        id,
        questionnaireID,
        userID,
        responses
    })
    try{
        const newcompletedQuestionnaire = await response.save()
        console.log(db.responses.find({"id":"2"}))
        res.status(201).json(newcompletedQuestionnaire)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router