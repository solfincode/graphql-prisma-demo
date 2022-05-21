# build express js server using graphql and prisma ORM

this server used "coursedb" from mongodb atlas

1. using apollo server

```
const server = new ApolloServer({ typeDefs, resolvers });
server
.listen(port, () => console.log(`server is listening ${port}`))
.then(({ url }) => console.log(`Server is running on ${url}`));
```

2. integrated into express js server

```
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
```
