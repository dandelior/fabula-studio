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
            title: "Imagen Destacada",
            name: "imagen_destacada",
            type: "image"
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