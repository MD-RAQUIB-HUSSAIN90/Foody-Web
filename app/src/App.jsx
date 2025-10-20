import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);





  useEffect(()=>{
  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data");
    }
  };

  fetchFoodData();
  },[])


  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

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
      <FoodContainer>
        <FoodCard></FoodCard>
      </FoodContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
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
      height: 30px;
      font-size: 12px;
      padding: 0 8px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;
const Buttons = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 3px 10px;
  border: none;
  color: white;
  height: 20px;
  font-size: 0.7rem;
`;

const FoodContainer = styled.section`
height:calc(100vh - 108px);
background-image:url("/bg.png");
background-size:cover:

`;

const FoodCard = styled.div``;
