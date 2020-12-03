import React from "react";
import styles from "./NewsFeed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { acceptNews, declineNews } from "../../../redux/actions";

function NewsItem({ news }) {
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const dispatch = useDispatch();

  return (
    <div className={styles.newsItem}>
      <div className={styles.newsPicture} />
      <div>
        <div className={styles.newsTitle}>
          <h2>{news.title}</h2>
        </div>
        <div className={styles.newsContent}>{news.content}</div>
        <div className={styles.newsTimeStamp}>{news.date}</div>
        {isAdmin && !news.confirmed && (
          <div className={styles.options}>
            <div
              className={styles.acceptNews}
              onClick={() => {
                dispatch(acceptNews(news.id));
              }}
            >
              добавить
            </div>
            <div
              className={styles.declineNews}
              onClick={() => {
                dispatch(declineNews(news.id));
              }}
            >
              удалить
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsItem;
