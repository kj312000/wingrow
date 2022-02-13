import React, { useState } from 'react'
import '../Farmers/Feed.css'

function Post({author,title, content, time, likeCount,image}) {
    const [like, setLike] = useState(false);
    
    return (
        <div className='post'>
            <div style={{display:'flex', alignItems:'center', paddingBottom: '10px'}}>
                <div style={{paddingLeft:'10px', paddingRight:"10px"}}>
                    <img src={image} alt="" height={50} width={50} style={{borderRadius: '30px'}}/>
                </div>
                <div>
                    <b><span>{author}</span></b>
                    <br/>
                    {title}
                    <br/>
                    {time}
                </div>
            </div>
            <div style={{textAlign: 'justify', padding: 10}}>
                {content}
            </div>
            <div style={{padding: '10px', textAlign: 'center'}}>
                <img src={image} width="50%" alt=""/>

            </div>
            <div style={{textAlign: 'justify', padding: 10, color: 'GrayText'}}>
                {like? (<span>You and other {likeCount} people liked this post</span>): (
                    <span>{likeCount} people liked the post</span>
                )}
                
            </div>
            <div style={{padding: '10px', textAlign: 'center', display: 'flex'}}>
                <div style={{flex: 1, cursor: 'pointer', color: (like?'blue':'black')}} onClick={() => setLike(prevLike => !prevLike)}><strong>Like</strong></div>
                <div style={{flex: 1, cursor: 'pointer'}}>Comment</div>
                <div style={{flex: 1, cursor: 'pointer'}}>Share</div>
                <div style={{flex: 1, cursor: 'pointer'}}>Send</div>
            </div>
        </div>
    )
}

export default Post
