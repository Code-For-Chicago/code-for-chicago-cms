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
      options: {
        list: [
          {title: 'Figma', value: 'figma'},
          {title: 'Github', value: 'github'},
          {title: 'Trello', value: 'trello'},
          {title: 'Other', value: 'other'},
        ],
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
  ],
})
