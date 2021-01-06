import React from 'react';
import { 
  Box, 
  Container, 
  makeStyles,
  Button
} from '@material-ui/core';
import { Form } from '@unform/web';
import { TextField } from 'unform-material-ui';
import Page from 'src/components/Page';
// import Input from 'src/components/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">

          <Form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Senha"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />

            <Box my={2}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Entrar
              </Button>
            </Box>

          </Form>

        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
