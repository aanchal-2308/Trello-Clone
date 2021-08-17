import Vue from 'vue';
import ApolloClient, { ApolloClient } from 'apollo-boost';
import VueApollo from 'vue-apollo';


Vue.use('VueApollo');

const apolloClient = new ApolloClient({
    uri: config('app.url')+'/graphql'
});


export default new VueApollo({
    defaultClient : apolloClient
});

