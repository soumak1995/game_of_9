import React,{useEffect}from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import axios from 'axios'
import Dashboard from './components/Dashboard';
import {useStateValue} from './StateProvider'
import Page_2 from './components/Page_2'
function App() {
  const [state,dispatch]=useStateValue();
  useEffect(()=>{
    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json")
    .then((res)=>{
      const updatedData=res.data.map(element => ({...element,Win:0,Lost:0,Level:0}));
      dispatch({type:'FATCH_SUCCESS',payload:updatedData})
    }).catch((e)=>{
       dispatch({type:'FETCH_ERROR'})
    })
},[])
  return (
    <div className="">
       <BrowserRouter>
           <Switch>
               <Route path='/' exact component={Dashboard} exact/>
               <Route path='/page2' exact component={Page_2}/>
           </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
