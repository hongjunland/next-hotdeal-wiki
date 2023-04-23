import { wikiPageState } from "@/recoil/atoms/WikiPageState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function AllWikiList() {
  const [wikiPage, setWikiPage] = useRecoilState(wikiPageState);

  useEffect(() => {
    fetch("http://132.226.21.157/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        query: `
      query {
        listWiki {
          items {
            id
            content
            title
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
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>dsds</div>;
}
