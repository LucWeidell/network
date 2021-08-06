"account": {

  "subs": [

    {
    "type": "String",
    "unique": true
    }
  ],

  "email": {
    "type": "String",
    "lowercase": true,
    "unique": true
  },

  "name": {
    "type": "String",
    "required": true
  },

  "picture": {
  "type": "String",
  "default": ""
  },

  "bio": {
  "type": "String",
  "default": ""
  },

  "coverImg": {
    "type": "String",
    "default": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  },

  "github": {
    "type": "String",
    "default": ""
  },

  "linkedin": {
    "type": "String",
    "default": ""
  },

  "resume": {
    "type": "String",
    "default": ""
  },

  "class": {
    "type": "String",
    "default": ""
  },

  "graduated": {
    "type": "Boolean",
    "default": false
  }
  },