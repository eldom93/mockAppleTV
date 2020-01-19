var jsonSchemaFaker = require("json-schema-faker")

var schema = {
  "type": "object",
  "properties": {
    "myAppleTv": {
      "type": "array",
      "minItems": 1,
      "maxItems": 5,
      "mylist": {
        "type": "array",
        "properties": {
          "title": {
            "type": "string",
            "faker": "show.title"
          },
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "img": {
            "type": "string",
            "faker": "show.img"
          },
          "prevList": {
            "type": "array",
            "faker": "myWholeList"
          }
        },
        "required": ["title", "id", "img"]
      }
    }
  },
  "required": ["mylist"]
};
console.log(jsonSchemaFaker);
module.exports = schema;