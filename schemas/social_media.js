export default {
    name: 'social_media',
    title: 'Social Media',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'link_short',
            title: 'Link Short',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}
