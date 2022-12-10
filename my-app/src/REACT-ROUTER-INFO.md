# Router configurations in React application

## 1. How to setup Routers
This section is about setting up the routers in the React application. Please follow the below described steps -


```sh

> 1.  Install router using below command on terminal

>  npm install react-router-dom 

> 2.  Import the Router,Switch,Link from the package we just installed . Below Ex-

> 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'


> 3.  Define the Router , Switch and Routes and give your details as below -

> <Router>
   <Route exact path="/about"
          element={
            <About/>
          }
        />
</Router>


> 4.  In the left side menu, click Deploy keys. A new page will appear.
> 5.  In the top right corner of the page, click Add deploy key. A new page will appear.
> 6.  Enter your SSH key data:
> 7.  In the Title text box, enter a display name for the key.
> 8.  In the Key text box, paste the entire SSH key. If you want to push code from your cPanel account to your GitHub account, select the "Allow write access" checkbox. Do note that if you do not select this checkbox, you can only deploy changes from your GitHub repository to the cPanel-hosted repository.
> 9.  Click Add key.

```