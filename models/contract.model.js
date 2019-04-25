module.exports = function(mongoose) {
  let modelName = 'contract'
  let Types = mongoose.Schema.Types
  let Schema = new mongoose.Schema(
    {
      client: {
        type: Types.String
      }
    },
    { 
      collection: modelName,
      discriminatorKey: 'kind'
    }
  )

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
    }
  }

  return Schema
}
