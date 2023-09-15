

import { Formik, Form, Field } from 'formik';
import ServicesApi from '../services/services';
import { Button } from '../components';
import styled, { css } from "styled-components";
function Login() {
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
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4faabf;
`;

  const Submit = (value: any) => {
    ServicesApi.Login(value).then((res) => {
      if (res.status === 200) {

      }
    })
  }

  return (
    <>
      <Header>
        <h1>Login</h1>
      </Header>
      <div className='wrapper'>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={Submit}
        >
          <Form>

            <Field name="email" placeholder="email..." type="email" className={"input_form"} />
            <br />
            <Field name="password"  placeholder="password..." type="text" className={"input_form"} />
            <br />
            <Button type="submit" style={{ marginTop: "20px" }}>
              Submot
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Login