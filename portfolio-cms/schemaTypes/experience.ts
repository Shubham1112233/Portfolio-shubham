import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({name: 'role', title: 'Role/Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'location', type: 'string'}),
    defineField({name: 'startDate', title: 'Start Date', type: 'date', validation: (r) => r.required()}),
    defineField({name: 'endDate', title: 'End Date', type: 'date'}),
    defineField({
      name: 'current',
      title: 'Currently working here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'role', subtitle: 'company'},
  },
})


