import { useContext, useState } from "react"
import { Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import Button from "../style_components/Button"
import CardContainer from "../style_components/CardContainer"
import Input from "../style_components/Input"

const Register = () => {
    const {handleRegister} = useContext(AuthContext)
    const [email, setEmail] = useState('ethan.mcneal@gmail.com')
    const [password, setPassword] = useState('thisisapassword')
    const [passwordConfirmation, setPasswordConfirmation] = useState('thisisapassword')
    // const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email, password, passwordConfirmation})
        handleRegister({email, password, passwordConfirmation})
    } 
    return(
        <CardContainer>
            <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
            <p>Email</p>
            <Input
            label='Email'
            value={email}
             autoFocus
             required
             name='email'
             onChange={(e)=> setEmail(e.target.value)}/>
             <p>Password</p>
             <Input
            label='Password'
            value={password}
             autoFocus
             required
             name='password'
             onChange={(e)=> setPassword(e.target.value)}/>
             <p>Confirm Password</p>
             <Input
            label='Confirm Password'
            value={passwordConfirmation}
             autoFocus
             required
             name='passwordConfirmation'
             onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
             <Button type='submit'>Register</Button>

            
        </Form>
        </CardContainer>
    )
}

export default Register