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
            title: "Slug",
            name: "slug",
            type: "slug"
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
        },
        {
            title: "Color del Logo",
            name: "color_logo",
            type: "string",
            options: {
                list: [
                    {title: "White", value: "white"},
                    {title: "Soft Blue", value: "soft-blue"},
                    {title: "Blue", value: "blue"},
                ]
            }
        }
    ]
}