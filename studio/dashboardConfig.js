export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8c9f17343767bfce7254ce',
                  title: 'Sanity Studio',
                  name: '11-ty-sanity-playground-studio',
                  apiId: '67e9708d-68b5-4e76-bddd-559b410b6f2a'
                },
                {
                  buildHookId: '5f8c9f17590e58b749d5c0c2',
                  title: 'Blog Website',
                  name: '11-ty-sanity-playground',
                  apiId: '84ee3f3a-bac2-474b-8268-7dff21742c18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ximenavf92/11ty-sanity-playground',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://11-ty-sanity-playground.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
