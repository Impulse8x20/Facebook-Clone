import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fphoto%2F%3Ffbid%3D1623489058096011%26set%3Dpcb.1623489084762675&width=340&show_text=true&height=495&appId" 
      width="340" height="100%" 
      style={{border:'none',overflow:'hidden'}}
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default Widgets
