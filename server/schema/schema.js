const graphql = require('graphql')
const _ = require('lodash')


const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
// dummy data
    let books = [
        {name: 'Going to space', genre: 'Sci-FI', id: '1'},
        {name: 'Going to space', genre: 'Animation', id: '2'},
        {name: 'Going to space', genre: 'Technology', id: '3', pages: '117'}
    ];

// Custom Type => template for an object
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        pages: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                return _.find(books, {id: args.id})
            }
        }
    }
})

// book(id:'2'){
//     name
//     genre
// }

module.exports = new GraphQLSchema({
    query: RootQuery
})






// const qraphql = require('graphql')
// const { GraphQLObjectType } = qraphql
// const ProductType = new GraphQLObjectType({
//     name: 'Laptop',
//     fields: () => ({
//         id: {type: GraphQLString}
//     })
// })
// const RootQuery = new GraphQLObjectType({
    
// })