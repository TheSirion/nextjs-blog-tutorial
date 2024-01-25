export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título do artigo',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug do artigo',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Imagem de capa',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Descrição curta',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Conteúdo',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
