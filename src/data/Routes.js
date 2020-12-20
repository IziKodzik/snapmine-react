
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'
import Home from '../components/Home/Home'
import Recrutation from '../components/Recrucation/Recrutation'
import LabelView from '../components/LabelView/LabelView'
import DefaultView from '../components/DefaultView/DefaultView'

const getRoutes = (handleChange)=>{
return {
    "login" : <LoginForm onChange={handleChange}/>,
    "homePage" : <Home onChange={handleChange}/>,
    "about" : <DefaultView onChange={handleChange}/>,
    "register" : <RegisterForm onChange={handleChange}/>,
    "recrutation" : <Recrutation onChange={handleChange}/>,
    "premium" : <LabelView onChange={handleChange}/>
    }
}
export default getRoutes