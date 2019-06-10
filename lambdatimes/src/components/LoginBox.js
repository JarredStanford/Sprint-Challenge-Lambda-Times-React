import React from "react";

//styles
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui//core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import "../CSS/login.css";

const LoginBox = props => {
  return (
    <LoginDiv>
      <Paper className="login2">
        <LoginHeader>Lambda Times</LoginHeader>
        <LoginForm onSubmit={props.login}>
          <TextField
            id="outlined-name"
            placeholder="Username i.e Allison"
            onChange={props.handle}
            name="username"
            margin="normal"
            variant="outlined"
            value={props.username}
          />
          <TextField
            id="outlined-name"
            placeholder="Password i.e. Allison"
            onChange={props.handle}
            name="password"
            margin="normal"
            variant="outlined"
            value={props.password}
          />
          <Button
            className="button"
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </LoginForm>
      </Paper>
    </LoginDiv>
  );
};
const LoginDiv = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: whitesmoke;
  height: 100vh;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const LoginHeader = styled.h1`
  font-size: 3rem;
`;
export default LoginBox;
