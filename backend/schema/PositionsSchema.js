const{Schema}=require('mongoose');

const PositonsSchema=new Schema({
  product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day:String,
    isLoss: Boolean,

});
module.exports={PositonsSchema};