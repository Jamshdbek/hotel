import React from 'react'

// import './Home.css'
import styled from 'styled-components';
import image from '../assets/backround.png'
import { useNavigate } from 'react-router-dom';
function Home() {
  const Button = styled.div`
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.40em 1em;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  /* background-color:rgba(250, 250, 250, 0.5); */
`;

  const Well = styled.div`
width: 100%;
height: 100vh;
   background-image:url(${(params: any) => params.image});
   background-size: cover;
   background-color: rgba(255,255,255,0.5);
`

  const Header = styled.header`
width: 100%;
height: 10vh;
display: flex;
color:#fff;
align-items: center;
  background-color: rgba(16, 16, 16, 0.4);
  padding: 0px 10vh 0px 10vh;
  justify-content: space-between;
`
  const nav = useNavigate()
  return (
    <Well image={image}>
      <Header>
        <h2>HOTEL</h2>
        <div style={{ display: 'flex', gap: "50px" }}>
          <Button onClick={() => nav("/register")}>Register</Button>
          <Button onClick={() => nav("/login")}>Login</Button>
        </div>
      </Header>
      <div>
        Hotel
      </div>
    </Well>
  )
}

export default Home
