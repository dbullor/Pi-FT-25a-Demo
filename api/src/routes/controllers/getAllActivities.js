
const { Activity } = require ('../../db');


const getAllActivities =  async (req, res) => {
    try {
        const activities = await Activity.findAll()
          console.log('first')            
        if(activities){
            res.json(activities)        
        } else{
            res.status(404).send("Activity isn't found")
        }
    
        } catch (error) {
            res.status(404).json(error)
    }
}

module.exports = {getAllActivities}
