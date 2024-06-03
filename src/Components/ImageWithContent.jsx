import React from 'react'
import imgbox from "../assets/Images/application-development.png"
import "../Css/ImageWithContent.css"
export default function ImageWithContent() {
  return (
    // <div className="ImageWithContainer">
    <div className='container'>
      <div className="img-container">
        <img src={imgbox} alt="" className='imgbox' />
      </div>
      <div className="text-container">
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quas culpa dolores, nesciunt ipsum eaque, tempora velit explicabo, deserunt voluptas ratione. Eligendi cumque possimus 
  deserunt fuga nisi, nihil aliquid animi.
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur odio provident velit nisi facere eveniet iste ea modi tempore aut laboriosam corrupti cum, quidem rem, fugit fuga
   praesentium magni!
</p>
      </div>
    </div>
    // </div>
  )
}
