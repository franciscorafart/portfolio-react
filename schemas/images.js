export default {
    name: 'images',
    title: 'Images',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 96
          }
        },
        {
            name: 'poster',
            title: 'Poster',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true
                    }
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution'
                }
            ],
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'poster'
        }
    }
}
