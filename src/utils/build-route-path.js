//criando uma regex
//:([a-zA-Z]+) => pode ter letras maiusculas ou minusculas, ter um ou mais
///:([a-zA-Z]+)/g =>  '/g' global, posso ter mais de um caminho dinamico ex: /users/:id/:goroudId

export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    console.log(Array.from(path.matchAll(routeParametersRegex)));
}