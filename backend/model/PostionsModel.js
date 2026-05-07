const{model}=require('mongoose');
const { PositonsSchema } = require('../schema/PositionsSchema');



const PositionsModel=new model('position',PositonsSchema);
module.exports={PositionsModel}