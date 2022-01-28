import React from 'react';
import {FaCarrot} from 'react-icons/fa';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignupElements';

const Signup = () => {
    
  return (
  <>
    <Container>
        <FormWrap>
            <Icon to="/"><FaCarrot /></Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign Up Today!</FormH1>
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type="text" name="username" placeholder="Enter your username" required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type="email" name="email" placeholder="Enter your email" required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput id="password" type="password" name="password" placeholder="Enter your password" required />
                    <FormLabel htmlFor='for'>Repeat Password</FormLabel>
                    <FormInput id="password2" type="password" name="password2" placeholder="Confirm your password" required />
                    <FormButton type="submit">Sign up</FormButton>
                    <Text>Already a member? Sign in <a href="/signin">here</a> </Text>


                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  </>
  )
}

export default Signup;
