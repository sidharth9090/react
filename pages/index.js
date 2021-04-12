
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useRouter } from 'next/router'
import Layout from "../components/Layout";
import { useAppContext } from "../context/context";

export default function Home(props) {
  const { userHasAuthenticated } = useAppContext();
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [isValidForm, setValidForm] = useState(true);
  const [password, setPassword] = useState("");
  const handleSubmit =(event)=>{
    event.preventDefault();
    if(email==""||password=="") {
      setValidForm(false);
      return;
    }
    if(email.indexOf('@')!==-1) {
      userHasAuthenticated(email.split("@")[0]);
    }
    else {
      userHasAuthenticated(email);
    }
    router.push('/posts');
  };
  
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin" onSubmit={handleSubmit}>
                    <img className="mb-4" alt="" width="72" height="72" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text"  placeholder="useremail@domain.com" className="mr-sm-2" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password </FormLabel>
                        <FormControl type="password" className="mr-sm-2" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    {!isValidForm?<span className="color-red">Email or Password should not be Empty </span>:<></>}
                    <Button type="submit" className="btn-lg btn-block" variant="primary">Sign In</Button>
                </Form>
            </div>
        </Layout>
      </>
  )
}

