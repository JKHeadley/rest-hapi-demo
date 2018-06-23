module.exports = function(mongoose) {
  let modelName = 'role'
  let Types = mongoose.Schema.Types
  let Schema = new mongoose.Schema(
    {
      name: {
        type: Types.String,
        enum: ['Account', 'Admin', 'SuperAdmin'],
        required: true,
        allowOnUpdate: false
      },
      description: {
        type: Types.String,
        allowOnUpdate: false
      }
    },
    { collection: modelName }
  )

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      allowDelete: false,
      allowUpdate: false,
      associations: {
        users: {
          type: 'ONE_MANY',
          alias: 'user',
          foreignField: 'role',
          model: 'user',
          allowRemove: false
        },
        permissions: {
          type: 'MANY_MANY',
          alias: 'permission',
          model: 'permission',
          linkingModel: 'role_permission'
        }
      }
    }
  }

  return Schema
}
