import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import skills from './skills'
import images from './images'
import social_media from './social_media'
import social_footer from './social_footer'
import otherProjects from './otherProjects'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, post, author, category, skills, images, social_media, social_footer, otherProjects])
})
