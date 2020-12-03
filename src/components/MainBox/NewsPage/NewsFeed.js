import React, { useState } from "react";
import styles from "./NewsFeed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { offerNews, setSearchValue } from "../../../redux/actions";
import NewsItem from "./NewsItem";

function NewsFeed(props) {
  const [addNews, setAddNews] = useState(true);
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const myId = useSelector((state) => state.users.id);
  const dispatch = useDispatch();
  const newsItems = useSelector((state) => {
    const { searchValue } = state.news;
    const availableNews = state.news.items.filter((item) => {
      if (isAdmin) {
        return true;
      }

      if (item.confirmed) {
        return true;
      }

      return item.confirmed === false && myId === item.userId;
    });

    return availableNews.filter((news) => {
      const lowerCaseTitle = news.title.toLowerCase();
      const lowerCaseContent = news.title.toLowerCase();
      const lowerCaseSearch = searchValue.toLowerCase();

      return (
        lowerCaseTitle.indexOf(lowerCaseSearch) !== -1 ||
        lowerCaseContent.indexOf(lowerCaseSearch)
      );
    });
  });

  const handleAdd = (title, content, myId) => {
    if (title.length && content.length >= 1) {
      dispatch(offerNews(title, content, myId));
      setAddNews(true);
    }
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <>
      {myId !== null &&
        !isAdmin &&
        myId !== undefined &&
        (addNews ? (
          <div
            onClick={() => {
              setAddNews(false);
            }}
            className={styles.addNewsClosed}
          >
            Предложить новость
          </div>
        ) : (
          <div className={styles.addNewsOpened}>
            <div>
              <input
                placeholder={"название"}
                value={title}
                onChange={handleTitle}
              />
            </div>
            <div>
              <input
                placeholder={"текст"}
                value={content}
                onChange={handleContent}
              />
            </div>
            <div
              className={styles.addNewsClosed}
              onClick={() => {
                handleAdd(title, content, myId);
              }}
            >
              Предложить новость
            </div>
          </div>
        ))}
      <div className={styles.searchTitle}>Поиск</div>
      <div className={styles.searchBar}>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="поиск по новостям"
        />
      </div>
      {newsItems.map((item) => {
        return <NewsItem key={item.id} news={item} />;
      })}
    </>
  );
}

export default NewsFeed;
