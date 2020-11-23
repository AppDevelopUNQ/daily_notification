const express = require('express');
const router = express.Router();
const system = require('../backend/mockBBDD');

router.get('/ping', (req, res, next)=>{
    system.notify("axel.lopez.garabal@gmail.com");
    res.status(200).json("ok");
})

router.post('/turnOn', (req, res, next)=>{
    if (!system.isOn()){
        const tickRate = req.body.tickRate;
        system.turnOn(tickRate);
        res.status(200).json("ok");
    }
    else{
        res.status(400).json({message: "the monitoring system is already on"});

    }
})
router.post('/turnOff', (req, res, next)=>{
    if (system.isOn()){
        system.turnOff();
        res.status(200).json("ok"); 
    }
    else{
        res.status(400).json({message: "The monitoring system is already off"});

    }
})

module.exports = router;