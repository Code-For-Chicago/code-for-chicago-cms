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
      name: 'active',
      title: 'Active',
      type: 'boolean',
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
          type: 'reference',
          to: [{type: 'projectLink'}],
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
      type: 'reference',
      to: [{type: 'position'}],
    }),
    defineField({
      name: 'filledPositions',
      title: 'Filled Positions',
      type: 'reference',
      to: [{type: 'position'}],
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
