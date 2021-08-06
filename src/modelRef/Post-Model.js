
"post": {

  "body": {
    "type": "String",
    "required": true
  },

  "imgUrl": {
    "type": "String"
  },

  "creatorId": {
    "type": "ObjectId",
    "required": true,
    "ref": "Account"
  },

  "likeIds": [
    {
      "type": "ObjectId",
      "ref": "Account"
    }
  ]
},