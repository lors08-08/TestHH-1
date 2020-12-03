import React from "react";
import styles from "./NewsFeed.module.css";
import {useSelector} from "react-redux";

function NewsFeed(props) {
  const newsItems = useSelector((state) => state.news.items)

  return (
    <>
      {newsItems.map((news)=> {
        return (
          <div className={styles.newsItem}>
            <div className={styles.newsPicture} />
            <div>
              <div className={styles.newsTitle}>
                <h2>{news.title}</h2>
              </div>
              <div className={styles.newsContent}>
                {news.content}
              </div>
              <div className={styles.newsTimeStamp}>{news.timeStamp}</div>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default NewsFeed;
