import React from 'react'
import '../Pages/Campaign.css'


function Campaign() {
  return (
    <>
  
  <div className="mainPage">
  <div className="left">
    <div className="title">
      <form>
        <label>
          Campaign Title
          <br />
          <input type="text" placeholder="Write your title name" />
        </label>
      </form>
    </div>

    <div className="story">
      <form>
        <label>
          Story
          <br />
          <textarea placeholder="Describe your story"></textarea>
        </label>
      </form>
    </div>
  </div>

  

  <div className="right">
    <div className="line1">
      <form>
        <label>
          Required Amount
          <br />
          <input type="number" placeholder="Write your amount" />
        </label>
      </form>
    </div>

    
    
    </div>
   
    <div className="check">
      <label htmlFor="cat-select">Category:</label>
      <select name="Category" id="cat-select">
        <option value="">--Please choose an option--</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Health Care">Health Care</option>
        <option value="Education">Education</option>
        <option value="Women Empowerment">Women Empowerment</option>
        <option value="Livelihood">Livelihood</option>
        <option value="Disaster Response">Disaster Response</option>
      </select>
    </div>
</div>

<button class="button-3" role="button">Add Campaign</button>



       
    
    </>
  )
}

export default Campaign