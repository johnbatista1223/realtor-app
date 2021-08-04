import styled, {css} from 'styled-components/macro';


const LoginFormContainer = styled.div`

display: flex;
flex-direction: row;
margin: 0 auto;
align-items: stretch;

width: 500px;
`


const LoginFormLabel = styled.label`
flex: 0 0 auto;
`

const LoginFormField = styled.input`
flex: 0 0 auto;
margin-bottom: 10px;
`

const LoginFormWrapper = styled.form`

display: flex;
flex-direction: column;
margin: 0 auto;
align-items: stretch;
justify-content: center;
flex: 1 1 auto;
`

const SubmitButton = styled.button`
width: 150px;
height: 35px;
border: none;
border-radius: 5px;
background-color: dodgerblue;
align-self: center;
`

const Login = () => {

    return (
        <LoginFormContainer>
            <LoginFormWrapper>
                
                <LoginFormLabel for="email">Email:</LoginFormLabel>
                <LoginFormField type="text" id="email" name="email" value="jdoe4@gmail.com" />
                <LoginFormLabel for="pass1">Password:</LoginFormLabel>
                <LoginFormField type="password" id="pass1" name="email" value="test1234" />
               

                <SubmitButton>Login</SubmitButton>
            </LoginFormWrapper>
        </LoginFormContainer>
    )

}

export default Login