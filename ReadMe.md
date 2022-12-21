# Redux App

## Install Redux , React-Redux,Redux-Thunk

> 1. Install react-router-dom package

```sh

npm i redux react-redux redux-thunk

```

> 2. Make a sub-folder state under src

> 3. Make a sub-folder action-creator under state

> 4. Make a sub-folder reducer under state

> 5. Make a file index.js reducer under action-creator

> 6. Provide the Action Creator functions and export them , For an example -

- Note *** Function should return the `dispatch` function which takes the type and the payload
```sh

export const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type : 'deposit',
            payload : amount
        })
    }
}
export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type : 'withdraw',
            payload : amount
        })
    }
}

```


> 7. Create reducer inside reducer folder as per your requirement , For an example -

- Note *** Reducers can have many independent of action-creators
```sh

const reducer=(state=0,action)=>{
    if(action.type==='deposit'){
        return state+action.payload;
    } else if (action.type==='withdraw'){
        return state-action.payload;
    }else{
        return state;
    }
}

export default reducer;

```


> 8. Create index.js inside reducers folder and combine all reducers into single function -

- Note *** There can be many reducers associated to action creators , wrap them into single function
```sh

import { combineReducers } from "redux";
import amountReducer from "./amountReducer";


const reducers=combineReducers({
    amount : amountReducer
})

export default reducers;

```


> 9. Create index.js and store.js inside state folder and export the reducer from index.js -


```sh

export * as actionCreators from './action-creators/index';

```

> 10. Create store in  store.js  -


```sh

import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store=createStoreHook(reducers,{},applyMiddleware(thunk))

```

> 11. Give access of redux store to the whole application . To give the access , inside index.js of src folder  -


```sh

<Provider>
    <App />
</Provider>

```

> 12. Now use the ReduxHook in any of the component belongs to App -


```sh
import { useSelector } from 'react-redux';


const amount= useSelector(state=> state.amount);

```