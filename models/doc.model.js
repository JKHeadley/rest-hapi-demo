module.exports = function(mongoose) {
  var modelName = "doc";
  var Types = mongoose.Schema.Types;
  var Schema = new mongoose.Schema(
    {
      title: {
        type: Types.String,
        required: true
      },
      description: {
        type: Types.String
      }
    },
    { collection: modelName }
  );

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      readAuth: false
    }
  };

  return Schema;
};
