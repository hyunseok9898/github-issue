import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Button from "./components/Button.js";
import styles from "./ListContainer.module.css";
import ListFilter from "./components/ListFilter.js";
import ListItem from "./components/ListItem.js";
import ListItemLayout from "./components/ListItemLayout.js";
import Pagination from "./components/Pagination.js";
import OpenClosedFilters from "./components/OpenClosedFilter.js";
import { GITHUB_API } from "./api.js";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const state = searchParams.get("state");
  console.log(searchParams.toString());

  async function getData(params) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      { params },
    );
    setList(data);
  }

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link to="/new" className={styles.Link}>
            <Button
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              New Issue
            </Button>
          </Link>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== "closed"}
          onClickMode={(mode) => setSearchParams({ mode })}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              setSearchParams(params);
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((item) => (
            <ListItem
              data={item}
              checked={checked}
              onChangeCheckBox={() => setChecked((checked) => !checked)}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className={styles.PaginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setSearchParams({ page: number })}
        />
      </div>
    </>
  );
}
