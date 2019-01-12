const cp = require('child_process')
let server;
function start_server() {
    console.log('starting server')
    kill_server()
    setTimeout(() => {
        server = cp.spawn('node', ['server.js'], {stdio: 'inherit'})
    }, 1000)
}

function kill_server() {
    if (server) {
        server.kill()
    }
}

process.stdin.on("data", (chunk) => {
    if (chunk.toString().trim() === "rs") start_server()
})

start_server()