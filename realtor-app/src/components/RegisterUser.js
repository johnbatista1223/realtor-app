import styled, {css} from 'styled-components/macro';


const RegistrationFormContainer = styled.div`

display: flex;
flex-direction: row;
margin: 0 auto;
align-items: stretch;

width: 500px;
`


const RegistrationFormLabel = styled.label`
flex: 0 0 auto;
`

const RegistrationFormField = styled.input`
flex: 0 0 auto;
margin-bottom: 10px;
`

const RegistrationFormWrapper = styled.form`

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

const RegisterUser = () => {

    return (
        <RegistrationFormContainer>
            <RegistrationFormWrapper>
                <RegistrationFormLabel for="name">First Name:</RegistrationFormLabel>
                <RegistrationFormField type="text" id="name" name="ame" value="John Doe" />
                <RegistrationFormLabel for="email">Email:</RegistrationFormLabel>
                <RegistrationFormField type="text" id="email" name="email" value="jdoe4@gmail.com" />
                <RegistrationFormLabel for="pass1">Password:</RegistrationFormLabel>
                <RegistrationFormField type="password" id="pass1" name="email" value="test1234" />
                <RegistrationFormLabel for="pass2">Confirm Password:</RegistrationFormLabel>
                <RegistrationFormField type="password" id="pass2" name="email" value="test1234" />

                <SubmitButton>Sign Up</SubmitButton>
            </RegistrationFormWrapper>
        </RegistrationFormContainer>
    )

}

export default RegisterUser