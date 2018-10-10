export default {
    name: 'social_footer',
    title: 'Social Footer',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'image_hover',
            title: 'Image Hover',
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
