import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'your-sanity-client',
    dataset: 'your-sanity-dataset',
    useCdn: true
})
