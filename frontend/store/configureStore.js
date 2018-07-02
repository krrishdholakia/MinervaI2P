console.log("process.env.NODE_ENV: "+process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
