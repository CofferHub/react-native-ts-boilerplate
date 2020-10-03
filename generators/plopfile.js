module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{ pascalCase name }}/index.js',
        templateFile: 'templates/index.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{ pascalCase name }}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{ pascalCase name }}/test.js',
        templateFile: 'templates/test.js.hbs'
      }
    ]
  });
};
