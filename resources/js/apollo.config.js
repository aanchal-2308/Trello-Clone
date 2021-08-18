import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';


Vue.use('VueApollo');

let url = process.env.APP_URL;

const apolloClient = new ApolloClient({
    uri: url+'/graphql'
});


export default new VueApollo({
    defaultClient : apolloClient
});

