export default {
  widgets: [
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
                  buildHookId: '61dd5cd8567114ef84fa7adb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uo5tgtuj',
                  apiId: 'f020e455-a66e-4fb5-81bf-f8f9e13e2ef7'
                },
                {
                  buildHookId: '61dd5cd82b2f1de3af70936a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mk9fruiw',
                  apiId: 'c9829331-466d-44d5-b7d4-6903f9a21681'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nagasai369/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mk9fruiw.netlify.app', category: 'apps'}
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
