import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'CRUD Swagger',
    },
  },
  apis: ['./src/routes/*.js'],
};

export default swaggerJSDoc(options);
