import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useStateValue} from '../StateProvider'
import {Table} from './Table';
import SelectedPlayer from './SelectedPlayer'
import Page_2 from './Page_2'
import '../css/Dashboard.css'

function Dashboard() {
  const [{loading,players,error,selectedPlayer},dispatch]=useStateValue();
  const history=useHistory(); 
  useEffect(() => {
      if(selectedPlayer.length>9){
          console.log('please select 9 player only')
      }
     
  }, [selectedPlayer])
  const handleClick=() =>{
    history.push("/page2");
  }
    return (
        <div className="dashboard">
            <section className="dashboard_sidebar">
              <div className="sidebar_top">
                  <img 
                  className="sidebar_icon"
                  src="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.svg"
                  alt="illustrator"
                  />
                  
              </div>
              <p className="sidebar_heading">Playing  9</p>
              <div className="sidebar_bottom">
                  
                  {selectedPlayer.map((player,index)=>
                  <SelectedPlayer key={index}
                  player={player.original}/>)}
                  
              </div>
                <div className="sidebar_button">
                      <button className="btn btn-submit"
                       onClick={handleClick}
                       disabled={selectedPlayer.length!==9} >START</button>
                  </div>
            </section>
            <section className="dashboard_table">
                <div className="dashboard_header">
                  
                </div>
                <div>
                    {
                       loading ? 'loading...' :   <Table/>
                    }
                    {
                        error?<p style={{color:'red',textAlign:'center'}}>{error}</p>:""
                    }
                
                </div>

            </section>
          
        </div>
    )
}

export default Dashboard
