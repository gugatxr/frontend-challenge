import {useState} from 'react';
import styled from "styled-components";
import Home from './Home';
import Search from './Search';
import SearchInput from "components/form/SearchInput";

const Container = styled.div`
  background-color: rgb(255, 251, 248);
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  padding-top: 50px;
`;

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  console.log(Boolean(search), search)
  return (
    <Container>
      <SearchInput value={search} onChange={event => setSearch(event.target.value)}/>
      {
        !search
          ? <Home />
          : <Search search={search} />
      }
    </Container>
  );
}
