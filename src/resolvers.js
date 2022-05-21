const { prisma } = require("./lib/prisma-client");

//resolvers
const resolvers = {
  Query: {
    hello: () => "hello world",
    class: () => {
      return prisma.class.findMany();
    },
    user: () => {
      return prisma.user.findMany();
    },
  },

  Mutation: {
    postUser: (parent, args) => {
      const data = {
        name: args.name,
        email: args.email,
      };
      return prisma.user.create({ data: data });
    },
    postClass: (parent, args) => {
      const data = {
        title: args.title,
        description: args.description,
        category: args.category,
      };
      return prisma.class.create({ data: data });
    },
    deleteClass: (parent, args) => {
      const id = args.id;
      return prisma.class.delete({ where: { id: id } });
    },
    oneUser: (parent, args) => {
      const id = args.id;
      return prisma.user.findUnique({ where: { id: id } });
    },
  },
};

module.exports = { resolvers };
