import {useState, useEffect} from "react"
import styled from "@emotion/styled";
import Quote from "./component/Quote";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const [randomQuote, setRandomQuote] = useState({})
  
  const APIgetRandomQuote = () => {
    fetch("https://breakingbadapi.com/api/quote/random")
      .then(resp => resp.json())
      .then(data => setRandomQuote(data[0]))
  }
  
  
  const handleClick = () => {
    APIgetRandomQuote()
  }

  useEffect(()=>{
    APIgetRandomQuote()
  },[])

  return (
    <>
      <Container>

        <Quote 
          randomQuote={randomQuote}
        />

        <Button
          onClick={handleClick}
        >Obtener Frase</Button>
        
      </Container>
    </>
  );
}

export default App;
