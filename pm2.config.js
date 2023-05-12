module.exports = {
    apps : [
        {
          name: "Biti",
          script: "./bin/www",
          watch: false,
          env: {
              "PORT": 3000,
              "NODE_ENV": "production"
          }
        }
    ]
  }