export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
            name: 'languages',
            title: 'Programming/Scripting Languages',
            type: 'array',
            of: [{type: 'string', lists:[]}]
        },
        {
            name: 'frameworks',
            title: 'Frameworks',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'databases',
            title: 'Database tools',
            type: 'array',
            of: [{type: 'string'}]
        },
    ],
    preview:{
        select: {
            title: 'name'
        }
    },
}
