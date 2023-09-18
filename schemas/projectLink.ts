import {defineType} from 'sanity'

export default defineType({
  name: 'projectLink',
  title: 'Project Link',
  type: 'object',
  fields: [
    {
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
  ],
})
