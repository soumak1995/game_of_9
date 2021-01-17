import React from 'react'
import '../css/card.css'
function Card({player}) {
    console.log(player)
    return (
        <div className={`card ${player?.Winner?'winnerBorder':'loserBorder'}`}>
              {player &&  <img className='cardImg' src={player['Profile Image']}  alt="avater"/>} 
               <div className='player_info'>
                       
                          <strong>{player?.Name}</strong>
                           <span>Level</span>
                           <p>{player?.Level}</p>
                       
               </div>
               <div className='player_Bet'>
                    <span>🧿</span>
                        <p>{player?.Bet}</p>
               </div>
               <div className='player_wins'>
                       <span>🏆</span>
                        <p>{player?.Win}</p>
                </div> 
              <div className='player_price'>
                        <span>💰</span>
                        <p>{player?.Price}</p>
              </div>
              <div className={`${player?.Winner?'card-winner':'card_loser'}`}>
                  {
                      player?.Winner? <p>Winner</p>:<p>Lose</p>
                  }
                    
              </div>
                
        </div>
    )
}

export default Card
