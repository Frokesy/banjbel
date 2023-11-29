import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-west-2.hygraph.com/v2/clpj29r4b8xuw01um5n2uabfc/master" as string;

  
export const getAllArticles = async () => {
  const graphQLClient = new GraphQLClient(graphqlAPI);
  const query = gql`
    {
      articles(orderBy: publishedAt_DESC) {
        title
        slug
        featured
        excerpt
        coverPhoto {
          url
        }
        categories {
          id
          name
        }
        createdAt
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};

export const getFeaturedArticles = async () => {
  const graphQLClient = new GraphQLClient(graphqlAPI);
  const query = gql`
    {
      articles(where: { featured: true }, orderBy: publishedAt_DESC) {
        title
        slug
        featured
        excerpt
        coverPhoto {
          url
        }
        categories {
          id
          name
        }
        createdAt
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);
  return response;
};

export const getSingleBlog = async (slug: string) => {
  const graphQLClient = new GraphQLClient(graphqlAPI);
  const query = gql`
    query getSingleBlog($slug: String!) {
      articles(where: { slug: $slug }) {
        title
        excerpt
        featured
        content {
          html
        }
        coverPhoto {
          height
          width
          url
        }
        categories {
          id
          name
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  `;
  const slugName = { slug };

  const response = await graphQLClient.request(query, slugName);

  return response;
};

export const getBlogSlugs = async () => {
  const graphQLClient = new GraphQLClient(graphqlAPI);
  const query = gql`
    {
      articles {
        slug
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};
