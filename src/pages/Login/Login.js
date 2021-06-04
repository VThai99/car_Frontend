import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import "../../style/Login.scss";
import { FaUserNinja } from "react-icons/fa";
import { useState } from "react";
const Login = () => {
  const CopyRightt = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        luonvuituoi
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  useEffect(()=>{
    console.log(email)
  },[email])
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="login_form">
        <Avatar id="avatar_login" margin="normal">
          <FaUserNinja></FaUserNinja>
        </Avatar>
        <Typography component="p" variant="h4">
          Sign in
        </Typography>
     <div>
     <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={() => {setEmail(email)}}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          fullWidth
          color="primary"
          variant="contained"
          className="btn_signIn"
        >
          Sign in
        </Button>
     </div>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={8}>
          <CopyRightt></CopyRightt>
        </Box>
      </div>
    </Container>
  );
};
export default Login;
