module.exports = {
  apps : [{
    name: "express-4x-api-starter",
    script: "src/index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
