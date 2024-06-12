import React from 'react'
import Logo from '../../../assets/images/logo/elixir_logo.png'
import '../../../assets/styles/css/topBar.css'
import * as BIcons from 'react-bootstrap-icons';
import {format} from 'date-fns'
function TopBar() {
    const today = new Date();
    const datestring = format(today, "mm do yy")
    const time = format(today, "H:i a")
  return (
    <div>
        <div className="topBar">
            <div className="topBarContainer">
                <div className="brand">
                    <img src={Logo} alt="" className="logoImg" />
                    
                </div>
                <div className="searchContainer">
                      <div>
                          <form>
                              <div>
                                  <input type="search" name="" id="" className="animatedSearch" placeholder="Search patients, appointments.." />
                              </div>
                          </form>
                      </div>
                </div>
                <div className="calenderInfo">
                      <div className="todayDate">
                          <div><BIcons.Calendar4Event className="dateIcon" /> <span className="dateString">{datestring}</span>   </div>
                          <div><BIcons.Clock className="dateIcon" /> <span className="dateString">{time}</span> </div>
                    </div>
                    
                </div>
                <div className="accountUser">
                   <button type="button"><BIcons.Person className="topbarUserIcon" /></button>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar
