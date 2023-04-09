//criando uma regex
//:([a-zA-Z]+) => pode ter letras maiusculas ou minusculas, ter um ou mais
///:([a-zA-Z]+)/g =>  '/g' global, posso ter mais de um caminho dinamico ex: /users/:id/:goroudId

export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}`)
    return pathRegex
}