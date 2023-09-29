import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";



import Slug from './components/Slug/Slug';
import { useRouter } from "next/router";



export default function Page(){

    const router = useRouter();
    const currentUrl = router.asPath;


    const client = new ApolloClient({
        ssrMode: true,
        uri: "http://edsblog.local/graphql",
        cache: new InMemoryCache(),
    });



// console.log(currentUrl)

    return (
    <ApolloProvider client={client}>
        <Slug url={currentUrl} />
    </ApolloProvider>
    );
}