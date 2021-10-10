import { useState } from "react";
import styled from "styled-components";
import Home from "./Home";
import Search from "./Search";
import SearchInput from "components/form/SearchInput";
import TabBar from "containers/TabBar";

const Container = styled.div`
  background-color: rgb(255, 251, 248);
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  padding-top: 50px;
  padding-bottom: 80px;
`;

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search book"
      />
      {!search ? <Home /> : <Search search={search} />}
      <TabBar />
    </Container>
  );
}
