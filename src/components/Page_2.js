import React, { useEffect ,useState} from 'react';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core//IconButton';
import {useStateValue} from '../StateProvider';

import Card from './Card'
import '../css/page_2.css'
function Page_2() {
    const [{selectedPlayer,players},dispatch]=useStateValue();
    const [randomNumber,setRandomNumber]=useState();
    const [updatedPlayer,setUpdatedPlayer]=useState(selectedPlayer);
    const [updateddata,setUpdatedData]=useState();
    const history=useHistory();
    useEffect(()=>{
        setRandomNumber(Math.floor(Math.random() * 9)+1);
        winnerUpdate();
    },[randomNumber]);
    useEffect(()=>{
        setUpdatedData(players.map( 
            s => updatedPlayer.find( 
                t => t.Name == s.Name ) || s 
     ))
    
    },[updatedPlayer]);
    const winnerUpdate=()=>{
        setUpdatedPlayer(selectedPlayer.map((player)=>{
            if(player.original.Bet==randomNumber)
            return {...player.original,
                Win:player.original.Win+1,
                Lost:player.original.Lost+1,
                Level:player.original.Level+1,
                Price:player.original.Price*2,
                Winner:true
            }
            else 
            return {
                ...player.original,
                Level:player.original.Level+1,
                Winner:false
            }
        }));
        
        
 
        
    }
    const handleClick=()=>{
        history.goBack();
        dispatch({type:'FATCH_SUCCESS',payload:updateddata})
    }
    return (
        <div className="page2">
       
        <div className="numberGenerator" >
            
            <div className="numberGenerator_right">

          </div>
            <div className="circle">
               <h1>{randomNumber}</h1>
            </div>
            <div className="numberGenerator_right">
            
            </div>
        </div>
        <div className="cardSection">
            
            {
               updatedPlayer?.map((player,index)=><Card key={index} 
               player={player}/>) 
            }
        </div>
        <div className="page2_backButton">
           <button   className="btn btn-back" onClick={handleClick}>back</button>
        </div>
            
        </div>
    )
}

export default Page_2
