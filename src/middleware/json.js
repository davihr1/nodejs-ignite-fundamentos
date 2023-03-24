export async function json(req, res) {
    const Buffers = [];
    for await (const chunk of req) {
        Buffers.push(chunk)
    }

    //Transformar um  JSON ja criado em um JSON LEGIVEL
    try {
        req.body = JSON.parse(Buffer.concat(Buffers).toString())
    } catch {
        req.body = null;
    }

    res.setHeader('Content-type', 'application/json')
}