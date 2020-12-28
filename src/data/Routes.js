
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'
import Home from '../components/Home/Home'
import Recrutation from '../components/Recrucation/Recrutation'
import LabelView from '../components/LabelView/LabelView'
import DefaultView from '../components/DefaultView/DefaultView'
import Account from '../components/Account/Account'
const getRoutes = (methods)=>{
return {
    "login" : <LoginForm methods={methods} log={methods.log}/>,
    "homePage" : <Home methods={methods}/>,
    "about" : <DefaultView methods={methods}/>,
    "register" : <RegisterForm methods={methods}/>,
    "recrutation" : <Recrutation methods={methods}/>,
    "premium" : <LabelView methods={methods}/>,
    "account" : <Account/>
    }
}
export default getRoutes