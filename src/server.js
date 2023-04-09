import http from 'node:http';
import { json } from './middleware/json.js';

import { routes } from './routes.js'
import { log } from 'node:console';


const server = http.createServer(async (req, res) => {

    await json(req, res)

    const {method, url} = req

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if(route) {
        const routeParms = req.url.match(route.path);
        console.log(routeParms);
        return route.handler(req, res)
    }

 return res.writeHead(404).end()
});

server.listen(3333);