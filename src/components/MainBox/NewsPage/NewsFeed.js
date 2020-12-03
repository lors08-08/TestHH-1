import React, {useEffect} from "react";
import styles from "./NewsFeed.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NewsFeed(props) {
  const newsItems = useSelector((state) => state.news.items);
  const history = useHistory();

  useEffect(() => {
    history.push("News")
  },[history])

  return (
    <>
      <div className={styles.searchTitle}>Поиск</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="поиск по новостям" />
      </div>
      {newsItems.map((news) => {
        return (
          <div className={styles.newsItem}>
            <div className={styles.newsPicture} />
            <div>
              <div className={styles.newsTitle}>
                <h2>{news.title}</h2>
              </div>
              <div className={styles.newsContent}>{news.content}</div>
              <div className={styles.newsTimeStamp}>{news.timeStamp}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewsFeed;
