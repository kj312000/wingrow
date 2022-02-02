import React, { useState } from 'react'
import '../components/Feed.css'

function Post({author, content, time, likeCount}) {
    const [like, setLike] = useState(false);
    
    return (
        <div className='post'>
            <div style={{display:'flex', alignItems:'center', paddingBottom: '10px'}}>
                <div style={{paddingLeft:'10px', paddingRight:"10px"}}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173" alt="" height={50} width={50} style={{borderRadius: '30px'}}/>
                </div>
                <div>
                    <span>{author.name}</span>
                    <br/>
                    {author.title}
                    <br/>
                    {time}
                </div>
            </div>
            <div style={{textAlign: 'justify', padding: 10}}>
                {content}
            </div>
            <div style={{padding: '10px', textAlign: 'center'}}>
                <img src="https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173" width="50%" alt=""/>

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
