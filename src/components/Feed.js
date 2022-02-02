import React from 'react';
import Post from './Post'
import Profile from './Profile'
import '../components/Feed.css'

function Feed() {
  return<div className='feed'>
            <div className='profile'>
                <Profile/>
            </div>
            <div className='posts'>
            <Post 
                author={{name: "Bharat Jadhav", avatar: "https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173", title: 'Owner of Jadhav Farms'}}
                content='🚀 Started working with wingrow agritech 🌏'
                time= '1d'
                likeCount = {340}
            />
            <Post 
                author={{name: "Bharat Jadhav", avatar: "https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173", title: 'Owner of Jadhav Farms'}}
                content='🚀 Started working with wingrow agritech 🌏'
                time= '1d'
                likeCount = {340}
            />
            <Post 
                author={{name: "Bharat Jadhav", avatar: "https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173", title: 'Owner of Jadhav Farms'}}
                content='🚀 Started working with wingrow agritech 🌏'
                time= '1d'
                likeCount = {340}
            />
            <Post 
                author={{name: "Bharat Jadhav", avatar: "https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173", title: 'Owner of Jadhav Farms'}}
                content='🚀 Started working with wingrow agritech 🌏'
                time= '1d'
                likeCount = {340}
            />
            </div>
            <div  className='profile'>
                <Profile/>
            </div>
  </div>;
}

export default Feed;
