# Router configurations in React application

## 1. How to setup Routers
This section is about setting up the routers in the React application. Please follow the below described steps -




> 1.  Install router using below command on terminal


```sh

>  npm install react-router-dom 

```

> 2.  Import the Router,Switch,Link from the package we just installed . Below Ex-


```sh
> 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'

```

> 3.  Define the Router , Switch and Routes and give your details as below -

```sh

> <Router>
   <Route exact path="/about"
          element={
            <About/>
          }
        />
</Router>

```



