import React from 'react'
import '../css/selectedPlayer.css'
function SelectedPlayer({player}) {
    console.log(player['Profile Image'])
    return (
        <div className="selectedPlayer">
            <img className="selectedPlayer_img" src={player['Profile Image']}  alt="avater" />
            <section className="selectedPlayer_infosection">
                <strong>{player.Name}</strong>
                 <div className="selectedPlayer_info">
                   <div className="selectedPlayer_win">
                       <span>🏆</span>
                       <p>{player.Win}</p>
                   </div>
                   <div className="selectedPlayer_Bet">
                       <span>🧿</span>
                        <p>{player.Bet}</p>
                   </div>
                   
                 </div>
              
            </section>
            <section className="selectedPlayer_price">
                <span>💰</span>
                <strong>{player.Price}</strong>
            </section>
            
        </div>
    )
}

export default SelectedPlayer
