import "./oilersTimes.css";
import OilersTimesArticleContainer from "./OilersTimesArticleContainer";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { db } from "../../firebase";
import {
  getDocs,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import OilersTimesArticleItem from "./OilersTimesArticleItem";

const articleCollectionRef = collection(db, "articles");
export async function articleLoader() {
  const data = await getDocs(articleCollectionRef);
  return data;
}

export default function OilersTimes() {
  const data = useLoaderData();

  const articles = data.docs.map((doc) => {
    return (
      <OilersTimesArticleItem key={doc.id} id={doc.id} data={doc.data()} />
    );
  });

  return (
    <div className="oilers-times-page-container">
      <OilersTimesArticleContainer>{articles}</OilersTimesArticleContainer>
      <Link
        style={{ marginTop: "2rem" }}
        className="article-button"
        to="new-article"
      >
        New Article
      </Link>
    </div>
  );
}
