import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oa8uk71ely01z78i012tse/master',
    cache: new InMemoryCache()
})