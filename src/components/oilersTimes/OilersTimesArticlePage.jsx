import "./oilersTimes.css";
import { useLoaderData, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, collection } from "@firebase/firestore";
import { useEffect } from "react";

const articleCollectionRef = collection(db, "articles");
export async function articlePageLoader() {
  const data = await getDocs(articleCollectionRef);
  const res = await fetch("https://overfast-api.tekrop.fr/maps");
  const json = await res.json();
  const mapData = json;
  return [data, mapData];
}

export default function oilersTimesArticlePage() {
  const [data, mapData] = useLoaderData();
  const { pageID } = useParams();

  let title;
  let body;
  let imageUrl;
  let date;

  const articles = data.docs.filter((doc) => {
    if (doc.id === pageID) {
      title = doc.data().title;
      body = doc.data().body;
      imageUrl = doc.data().map;
      date = doc.data().date;
    }
  });

  useEffect(() => {
    document.body.classList.add("black-background");

    return () => {
      document.body.classList.remove("black-background");
    };
  }, []);

  return (
    <div
      style={{
        background: `url(${imageUrl}) repeat center fixed`,
        backgroundSize: "cover",
      }}
      className="article-container"
    >
      <div className="article-background-gradient">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="article-page-title">{title}</h1>
          <p className="article-page-date">{date}</p>
        </div>

        <p className="article-page-body">{body}</p>
      </div>
    </div>
  );
}
