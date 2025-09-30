import groq from 'groq'

export const personalProjectsQuery = groq`
  *[_type == "personalProject"] | order(_createdAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    summary,
    tech,
    repoUrl,
    liveUrl,
    images
  }
`

export const experienceQuery = groq`
  *[_type == "experience"] | order(startDate desc) {
    _id,
    role,
    company,
    location,
    startDate,
    endDate,
    current,
    summary,
    highlights,
    tech
  }
`

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    body
  }
`


