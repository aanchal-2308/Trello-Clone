import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';



Vue.use(VueApollo);



const apolloClient = new ApolloClient({
    uri: "http://localhost/graphql",
    fetchOptions: {
        mode: "no-cors"
    }
});


export default new VueApollo({
    defaultClient : apolloClient
});

