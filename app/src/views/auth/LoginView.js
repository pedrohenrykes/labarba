import React from 'react';
import { 
  Box, 
  Container, 
  makeStyles,
  Button
} from '@material-ui/core';
import { Form } from '@unform/web';
import Page from 'src/components/Page';
import Input from 'src/components/Input';

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

            <Input name="email" label="E-mail" type="email" />
            <Input name="password" label="Senha" type="password" />

            <Button variant="contained" color="primary">
              Primary
            </Button>

          </Form>

        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
