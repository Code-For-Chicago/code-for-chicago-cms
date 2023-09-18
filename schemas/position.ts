import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'position',
  title: 'Position',
  type: 'document',
  fields: [
    defineField({
      name: 'positionTitle',
      title: 'Position Title',
      type: 'string',
    }),
    defineField({
      name: 'positionDescription',
      title: 'Position Description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
