import React, { useState } from 'react'
import './ActivityFeed.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';

function ActivityFeed() {
  const [{user}, dispatch]= useStateValue();
  const [input,setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        db.collection ('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.
          serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl 
        })

        //some db stuff

        setInput('');
        setImageUrl('');
    };
  return (
    <div className='activityFeed'>
      <div className="activityFeed__top">
        <Avatar src={user.photoURL}/>
        <form>
            <input 
               value={input}
               onChange={(e)=> setInput(e.target.value)}
            className='activityFeed__input'placeholder={`What's on your mind ${user.displayName} ?`} />
            <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
             placeholder='image Url (Optional)'/>
            <button onClick={handleSubmit} type='submit'>
            Hidden Submit
            </button>
        </form>
      </div>

      <div className="activityFeed__bottom">
        <div className="activityFeed__option">
            <VideocamIcon style={{ color:'red'}} />
            <h3>Live Video</h3>
        </div>

        <div className="activityFeed__option">
            <PhotoLibraryIcon style={{ color:'green'}} />
            <h3>Photo/Video</h3>
        </div>

        <div className="activityFeed__option">
            <InsertEmoticonIcon style={{ color:'orange'}} />
            <h3>Feeling/ Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
