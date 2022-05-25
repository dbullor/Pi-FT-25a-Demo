const { Country, Activity} = require('../../db');
const {Op} =  require('sequelize')


const postActivity = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body
        
        if(name && difficulty && duration && season && countries){
            
            const [instance] = await Activity.findOrCreate({

                where: { 
                 name: name,
                 difficulty: difficulty,
                 duration: duration,
                 season: season,                 
                 },
                });
                countries.forEach( async (name)=> {
                    const pais= await Country.findOne({
                        where: {
                            id:{[Op.iLike]: '%' + name + '%'}
                        }
                    })
                    
                    await pais.addActivity(instance)
                })
                
                
                return res.send('Activity created')
        } else {
            return res.status(404).json("Activity wasn't created")
        }
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = { postActivity }


