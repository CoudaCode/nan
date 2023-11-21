import React from 'react'
import "./Prix.css"
import { BsCheckLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';


function Prix() {
  return (
    <div className="Prix">
      <h2 className='titre'> * Nos prix ...</h2>
      <div className='container-card'>
      <div class="card basic">
        <div className='title'>
        <p>Basic</p>
        </div>
        <div id="triangle"></div> 
        <div className="trait"></div>  
        <div className='detail'>
          <div className='contenu'>
            <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
          <div className='contenu'>
            <span className='cross'><RxCross2/></span><p>premier deavantage</p>
          </div>
          <div className='contenu'>
            <span className='cross'><RxCross2/></span><p>premier deavantage</p>
          </div>
          <div className='contenu'>
            <span className='cross'><RxCross2/></span><p>premier deavantage</p>
          </div>
        </div>
        <div className="trait"></div>  
        
        <h3>100000 FCFA/mois</h3>
        
      </div>

      <div class="card standard">
        <div className='title'>
         <p>Standard</p>
        </div>
        <div id="triangle"></div> 
        <div className="trait"></div> 
        <div className='detail'>
          <div className='contenu'>
              <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
          <div className='contenu'>
              <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
          <div className='contenu'>
            <span className='cross'><RxCross2/></span><p>premier deavantage</p>
          </div>
          <div className='contenu'>
            <span className='cross'><RxCross2/></span><p>premier deavantage</p>
          </div>
        </div> 
        <div className="trait"></div>       
        <h3>200000 FCFA/mois</h3>
        
      </div>

      <div class="card premium">
        <div className='title'>
          <p>Premium</p>
        </div>
        <div id="triangle"></div>  
        <div className="trait"></div>  
        <div className='detail'>
        <div className='contenu'>
              <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
          <div className='contenu'>
              <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
          <div className='contenu'>
              <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
          <div className='contenu'>
              <span className='check'><BsCheckLg/></span><p>premier avantage</p>
          </div>
        </div>
        <div className="trait"></div>  
        <h3>300000 FCFA/mois</h3>
        
      </div>
      
    </div>
    </div>

   
  )
}

export default Prix