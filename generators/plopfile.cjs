module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of your component?',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'Path to your component? (right-click -> copy path on the FOLDER where you want your component)',
      },
      {
        type: 'confirm',
        name: 'haveStyles',
        message: '"Does your component need styles module?',
        default: false,
      },
    ],
    actions: ({ haveStyles }) => {
      const compStyles = haveStyles ? 'with' : 'no';

      const compTemplate = {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: `templates/components/${compStyles}StyleComponent.jsx.hbs`,
      };

      const styles = {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: `templates/others/compStyles.module.scss.hbs`,
      };

      let actions = [compTemplate];
      if (haveStyles) {
        actions.push(styles);
      }

      return actions;
    },
  });
};
