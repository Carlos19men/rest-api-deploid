
const zod = require('zod')

 /*
        Para validar una nueva pelicula primero 
        hay que crear el esquema de pelicula 
    */

const movieSchema = zod.object({
    title: zod.string({
        invalid_type_error: 'title must be a string',
        required_error: 'title is required'
    }),
    year: zod.number().int().min(1900).max(2022),
    director: zod.string(),
    duration: zod.number().int().positive(),
    rate: zod.number().min(0).max(10).default(5),
    poster: zod.string().url({
        message: 'poster must be a valid URL '
    }),
    /*En esta caso el enum especifamos las opciones posibles 
    que se pueden colocar
    */
    genre: zod.array(zod.enum(['Action','Crime','Adventure','Comedy','Drama','Fantasy','Horror']),{
        required_error: 'Movie genre is required',
        invalid_type_error: 'Movie genre must be an array of enum'
    })
})

/*
    safeParse nos devuelve un objeto (resuleto) donde nos indica si han habido errores 
    o no al momento de hacer la conversión en un objeto de tipo safeParse
*/
function validateMovie (object) {
    return movieSchema.safeParse(object)
}

/*
    partial en un metodo en typescritp con el que 
    hacemos que todos los campos de esta estructura 
    sean opcionales, en este caso estamos diciendo 
    que para el esquema de validación los campos van 
    a ser opcionales, no pasa nada ni no estan 
*/
function validatePartialMovie(input){
    return movieSchema.partial().safeParse(input)
}

module.exports = {
    validateMovie,
    validatePartialMovie
}