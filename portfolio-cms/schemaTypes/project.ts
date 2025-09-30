import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'personalProject',
  title: 'Personal Projects',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
    defineField({name: 'summary', type: 'text'}),
    defineField({name: 'tech', title: 'Technologies', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'repoUrl', title: 'Repository URL', type: 'url'}),
    defineField({name: 'liveUrl', title: 'Live URL', type: 'url'}),
    defineField({name: 'images', type: 'array', of: [{type: 'image'}]}),
  ],
  preview: {
    select: {title: 'title', media: 'images.0'},
  },
})


