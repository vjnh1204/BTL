import './App.css'
import { Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import Dashboard from './views/Dashboard'
import AuthContextProvider from './contexts/AuthContext'
import history from './history'
import ProtectedRoute from './components/routing/ProtectedRoute'
import PostContextProvider from './contexts/PostContext'
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router history={history}>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
            <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </PostContextProvider>
  </AuthContextProvider>
  );
}

export default App;
