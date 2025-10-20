import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search food" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Buttons>All</Buttons>
        <Buttons>Breack Fast</Buttons>
        <Buttons>Lunch</Buttons>
        <Buttons>Dinner</Buttons>
      </FilterContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
 
  
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer=styled.section`
display:flex;
gap:10px;
`;
const Buttons=styled.button`
background:#ff4343;
border-radius:5px;
padding:6px 12px;
border:none;
gap:10px

`;
