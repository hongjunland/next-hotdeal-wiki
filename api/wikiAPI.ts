import {
  CreateWikiInput,
  UpdateWikiInput,
  Wiki,
  WikiPage,
  WikiTitle,
} from "@/types/Hotdeal/wiki";
import axios from "axios";

function wikiApi(baseUrl: string) {
  async function fetchAllWikiTitle(): Promise<WikiTitle[]> {
    const response = await axios.post(baseUrl, {
      query: `
            query {
              listWiki {
                items {
                  title
                }
              }
            }
        `,
    });
    return response.data.data.listWiki.items;
  }

  async function fetchWikiById(id: number): Promise<Wiki | null> {
    const response = await axios.post(baseUrl, {
      query: `
            query {
              wiki(id: ${id}) {
                id
                title
                content
                versions {
                  id
                  title
                  content
                  diff
                  createdAt
                }
              }
            }
          `,
    });

    return response.data.data.wiki as Wiki;
  }
  async function fetchWikiByTitle(title: string): Promise<Wiki | null> {
    const response = await axios.post(baseUrl, {
      query: `
        query{
            wikiByTitle(title:"${title}"){
                id
                content
                title
                versions{
                    id
                    title
                    content
                    diff
                    createdAt
                }
            }
            }
            `,
    });
    const wiki = response.data.data.wikiByTitle;
    return wiki ?? null;
  }

  async function createWiki(createWikiInput: CreateWikiInput) {
    const response = await axios.post(baseUrl, {
      query: `
          mutation{
            createWiki(createWikiInput:{
              title: "${createWikiInput.title}",
              content: "${createWikiInput.content}"
            }) {
              id
              title
              content
              createdAt
              updatedAt
            }
          }
      `,
    });
    return response;
  }

  async function updateWiki(updateWikiInput: UpdateWikiInput) {
    const response = await axios.post(baseUrl, {
      query: `
        mutation {
          updateWiki(updateWikiInput: {
            id: ${updateWikiInput.id}
            title: "${updateWikiInput.title}"
            content: "${updateWikiInput.content}"
          }) {
            id
            title
            content
            createdAt
            updatedAt
          }
        }
      `,
    });
    return response;
  }

  async function deleteWiki(id: number) {
    // API 통신 로직
  }

  async function fetchAllWikis(): Promise<WikiPage> {
    const response = await axios.post(baseUrl, {
      query: `
          query {
            listWiki(limit:10) {
              items {
                id
                content
                title
                updatedAt
                versions {
                  id
                  title
                  content
                  diff
                  createdAt
                }
              }
              total
            }
          }
        `,
    });
    const wikiPage: WikiPage = response.data.data.listWiki;
    wikiPage?.items?.sort(
      (a: Wiki, b: Wiki) =>
        parseInt(b.updatedAt as string) - parseInt(a.updatedAt as string)
    );
    return wikiPage;
  }
  async function searchWikis(word: string): Promise<Wiki[]> {
    const response = await axios.post(baseUrl, {
      query: `
        query {
            searchWiki(searchTerm: "${word}" , searchType:"title") {
              items {
                id
                content
                title
              }
            }
        }
        `,
    });
    console.log(response);
    const wikiPage: WikiPage = response.data.data.searchWiki;
    wikiPage?.items?.sort((a: Wiki, b: Wiki) => a.title.localeCompare(b.title));
    return wikiPage?.items || [];
  }

  return {
    fetchWikiById,
    fetchWikiByTitle,
    fetchAllWikiTitle,
    createWiki,
    updateWiki,
    deleteWiki,
    fetchAllWikis,
    searchWikis,
  };
}

export const wikiAPI = wikiApi(`${process.env.NEXT_PUBLIC_API_URL}/graphql`);
