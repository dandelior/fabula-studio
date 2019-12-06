export default {
    title: "Letra",
    name: "letra",
    type: "document",
    fields: [
        {
            title: "Título",
            name: "titulo",
            type: "string"
        },
        {
            title: "Contenido",
            name: "contenido",
            type: "array",
            of: [{type: "block"}]
        },
        {
            title: "Imagen de Grilla",
            name: "imagen_grilla",
            type: "image"
        },
        {
            title: "Imagen Destacada",
            name: "imagen_destacada",
            type: "image"
        },
        {
            title: "Autor",
            name: "autor",
            type: "reference",
            to: [{type: 'autor'}]
        }
    ]
}