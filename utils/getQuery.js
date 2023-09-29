import { gql, useQuery } from '@apollo/client';



export const homePageQuery = gql`
    query homePageQuery {
        nodeByUri(uri: "/") {
            ... on Page {
              id
              blocks
            }
          }
          acfOptionsMainMenu {
            mainMenu {
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      id
                      uri
                      slug
                    }
                  }
                  label
                }
              }
            }
          }
          blogsposts {
            nodes {
              id
              slug
              uri
              blogFeatures {
                metaInfo
                postTitle
                metaImage {
                  altText
                  sourceUrl
                }
              }
            }
          }
    }
`;

export const slugQuery = gql`
query slugQuery($uri: String!) {
  nodeByUri(uri: $uri) {
    ... on Blogpost {
      id
      blocks
      title
    }
    ... on Page {
      id
      title
      blocks
      seo {
          title
          metaDesc
      }
  }
  }
acfOptionsMainMenu {
  mainMenu {
    menuItems {
      menuItem {
        destination {
          ... on Page {
            id
            uri
            slug
          }
        }
        label
      }
    }
  }
}
}
`


export const blogList = gql`
    query blogList {
      acfOptionsMainMenu {
        mainMenu {
          menuItems {
            menuItem {
              destination {
                ... on Page {
                  id
                  uri
                  slug
                }
              }
              label
            }
          }
        }
      }
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
      blogs {
        nodes {
          id
          slug
          uri
          blogFeatures {
            metaInfo
            postTitle
            metaImage {
              altText
              sourceUrl
            }
          }
        }
      }
      
    }
`

export const TotalBlogs = gql`
  query slugQuery {
    blogsposts {
      nodes {
        uri
        blogFeatures {
          postTitle
          metaInfo
          metaImage{
            altText
            sourceUrl
          }
        }
      }
    }
  }
`

export const SearchQuery = gql`
query searchQuery($search: String!) {
  blogsposts(where: {metaQuery: {metaArray: {}}, search: $search}) {
    nodes {
      id
      uri
      blogFeatures {
        postTitle
        metaInfo
        metaImage {
          altText
          sourceUrl
        }
      }
    }
  }
}
`



// query blogList {
//   blogsposts {
//               nodes {
//                 id
//                 slug
//                 uri
//                 blogFeatures {
//                   metaInfo
//                   postTitle
//                   metaImage {
//                     altText
//                     sourceUrl
//                   }
//                 }
//               }
//             }
//   }
