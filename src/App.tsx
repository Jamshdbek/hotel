
import './App.css'
import styled from 'styled-components';
import image from './assets/backround.png'
import Index from './routers';
function App() {
//   const Button = styled.button`
//   color: #000;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #e7e7e7;
//   border-radius: 3px;
// `;

//   const Well = styled.div`
// width: 100%;
// height: 100vh;
//    background-image:url(${(params: any) => params.image});
//    background-size: cover;
//    background-color: rgba(255,255,255,0.5);
// `

//   const Header = styled.header`
// width: 100%;
// height: 10vh;
// display: flex;
// color:#fff;
// align-items: center;
//   background-color: rgba(16, 16, 16, 0.4);
//   padding: 0px 10vh 0px 10vh;
//   justify-content: space-between;
// `
  return (
    // <Well image={image}>
    //   <Header>
    //     <h2>HOTEL</h2>
    //     <div style={{ display: 'flex', gap: "50px" }}>
    //       <Button>Register</Button>
    //       <Button>Login</Button>
    //     </div>
    //   </Header>
    //   <div>
    //         Hotel
    //   </div>
    // </Well>
    <Index/>
  )
}

export default App
