import { useState, useEffect, useRef } from "react";
import updateTitle from "utils/updateTitle";
import styled from "styled-components";
import Home from "./Home";
import Search from "./Search";
import SearchInput from "components/form/SearchInput";
import TabBar from "containers/TabBar";
import { useLocation, useHistory } from "react-router-dom";

const Container = styled.div`
  background-color: rgb(255, 251, 248);
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 0 1.25rem;
  padding-top: 3.125rem;
  padding-bottom: 5rem;
`;

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const history = useHistory();
  const query = useRef(null);

  useEffect(() => {
    query.current = new URLSearchParams(location.search);
    const searchQuery = query.current.get("q");

    if (!searchQuery) {
      return;
    }

    setSearch(searchQuery);
  }, []);

  useEffect(() => {
    updateTitle(search ? `Search: ${search} ` : "");
  }, [search]);

  useEffect(() => {
    if (!search) {
      history.push({
        pathname: "/",
      });

      return;
    }

    let timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      query.current.set("q", search);
      history.push({
        pathname: "/",
        search: query.current.toString(),
      });
    }, 200);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [search]);

  const onHomeClick = () => {
    setSearch("");
  };

  return (
    <Container>
      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search book"
      />
      {!search ? <Home /> : <Search search={search} />}
      <TabBar onHomeClick={onHomeClick} />
    </Container>
  );
}
