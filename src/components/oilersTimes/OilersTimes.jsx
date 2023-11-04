import "./oilersTimes.css";
import OilersTimesArticleContainer from "./OilersTimesArticleContainer";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
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

  const [menuOpen, setMenuOpen] = useOutletContext();

  return (
    <div className="oilers-times-page-container">
      <OilersTimesArticleContainer>
        {articles.length > 0 ? (
          articles
        ) : (
          <h2 style={{ textAlign: "center", padding: "2rem" }}>
            No articles to display
          </h2>
        )}
      </OilersTimesArticleContainer>
      <Link
        className="article-button"
        style={!menuOpen ? {} : { opacity: "0%" }}
        to="new-article"
      >
        New Article
      </Link>
    </div>
  );
}
