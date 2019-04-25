module.exports = function(mongoose) {
  let modelName = 'salesContract'
  let Types = mongoose.Schema.Types
  let Schema = new mongoose.Schema(
    {
      price: {
        type: Types.Number
      }
    },
    { 
      collection: modelName,
      discriminatorKey: 'kind'
    }
  )

  Schema.statics = {
    collectionName: modelName,
    parentModel: 'contract',
    routeOptions: {
    }
  }

  return Schema
}
