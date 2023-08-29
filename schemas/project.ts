import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'aboutThisPartner',
      title: 'About this Partner',
      type: 'blockContent',
    }),
    defineField({
      name: 'problemToSolve',
      title: 'Problem to Solve',
      type: 'blockContent',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
    }),
    defineField({
      name: 'commitment',
      title: 'Commitment',
      type: 'string',
    }),
    defineField({
      name: 'deliverable',
      title: 'Deliverable',
      type: 'string',
    }),
    defineField({
      name: 'projectLinks',
      title: 'Project Links',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),
    defineField({
      name: 'primaryContact',
      title: 'Primary Contact',
      type: 'reference',
      to: [{type: 'person'}],
    }),
    defineField({
      name: 'aboutThisProject',
      title: 'About this Project',
      type: 'blockContent',
    }),
    defineField({
      name: 'openPositions',
      title: 'Open Positions',
      type: 'array',
      of: [
        {
          title: 'Open Position',
          type: 'object',
          fields: [
            {
              title: 'Position Title',
              name: 'positionTitle',
              type: 'string',
            },
            {
              title: 'Position Description',
              name: 'positionDescription',
              type: 'blockContent',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'filledPositions',
      title: 'Filled Positions',
      type: 'array',
      of: [
        {
          title: 'Filled Position',
          type: 'object',
          fields: [
            {
              title: 'Position Title',
              name: 'positionTitle',
              type: 'string',
            },
            {
              title: 'Position Description',
              name: 'positionDescription',
              type: 'blockContent',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          title: 'Tech Stack Item',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
