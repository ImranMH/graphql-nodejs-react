module.exports = function(mongoose){
  const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
    const ChannelSchema = new Schema({
      id: Number,
      name: String,
      year: Number
    })

  return ChannelSchema
}