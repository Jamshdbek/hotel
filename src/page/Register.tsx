

import { Formik, Form, Field } from 'formik';
import ServicesApi from '../services/services';
import { Button } from '../components';
import styled  from "styled-components";
import img from "../assets/backround.jpg"
import { useState } from 'react';
function Register() {
  const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  color:#fff;
  align-items: center;
  padding: 0px 10vh 0px 10vh;
  justify-content: space-between;
  background-image: url(${(par: any) => par.img});
  background-color: rgba(35, 35, 35, 0.9);
    background-size:auto;
  `
  const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #4faabf;
  padding: 100px;
`;
  const [sign, setSign] = useState<boolean>(false)

  const Submit = (value: any) => {
    ServicesApi.SignUp(value).then((res) => {
      if (res.status === 200) {
        setSign(true)
      } else {
        setSign(false)
      }

    })
  }

  return (
    <>
      <Header img={img}>
        <h1><span></span> Register</h1>
      </Header>
      <div className='wrapper'>
        {
          sign && <Title>Succses</Title>
        }
        <div className='center'>
        <Formik
          style={{ border: "1px solid" }}
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={Submit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field placeholder={"name..."} name="name" className={"input_form"} />
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
              <br />
              <Field name="email" type={"email"} placeholder={"email..."} className={"input_form"} />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              <br />
              <Field name="password" type="password" placeholder={"password..."} className={"input_form"} />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <br />
              <Button width={"300px"} padding={"20px"} type="submit" style={{ marginTop: "20px" }}>
                Submot
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </>
  )
}

export default Register