//schema
const typeDefs = `
  type Query{
      hello:String
      user:[User!]!
      class:[Class!]!
  }

  type Mutation{
      postUser(name:String!,email:String!):User!
      postClass(title:String!,description:String!,category:String!):Class!
      deleteClass(id:String!):Class!
      oneUser(id:String!):User!
  }

  type User{
      id:String!
      name:String! 
      email:String!
  }

  type Class{
      id:String!
      title: String!
      category: String!
      description: String!
  }

  


`;

module.exports = { typeDefs };
