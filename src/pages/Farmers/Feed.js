import React,{useState} from 'react';
import Post from './Post'
import Profile from './Profile'
import SideProfile from './SideProfile'
import '../Farmers/Feed.css'
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
  display:"flex",
  flexDirection:"column",
};

function Feed() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setState] = useState({ author: "", title: "",image:"" });
        const handleChange = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    const [data, setdata] = useState([{
        author:"Bharat Jadhav",
        title:"Farmer at pune",
        avatar:"https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173",
        content: '🚀 Started working with wingrow agritech 🌏',
        image:"https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173",
        time :'1d',
        likeCount : 340,
        id:1

    }])
    
    const post = ()=>{
        const posts = [...data]
        posts.unshift({
            author:state.author,
            title:state.title,
            avatar:"https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173",
            content: '🚀 Started working with wingrow agritech 🌏',
            image:`${state.image}`,
            time :`${Math.floor(Math.random()*10)}d`,
            likeCount : 340,
            id:(posts.length+1)
        })
        setdata(posts)
        setState({
            author:"",
            title:"",
            image:""
        })
    }

  return(
    <div className='feed'>
            <div className='profile'>
                <Profile/>
            </div>
            <div className='posts'>
            {data.map((e)=>{
                const {id ,author , content , time , likeCount , avatar, title, image} = e;
                return(<Post image={image} title={title} key={id} author={author} content={content}  time={time}  likeCount={likeCount}  avatar={avatar}/>)  
            })}
            </div>
            <div  className='profile'>
            <SideProfile/>
                <div>
              <button type="button" onClick={handleOpen} style={{padding:"5px",position:"fixed",boxShadow:"3px 3px 3px 3px",bottom:"50px",right:"50px"}}>
              <AddCircleOutlineIcon/>
              </button>
              <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
              >
        <Box sx={style}>
          <h1>Create a post</h1>
          <input type="text" placeholder='Enter your name' value={state.author} name="author" onChange={handleChange}/>
          <input type="text" placeholder='Post title' value={state.title} name="title" onChange={handleChange}/>
          <input type="text" placeholder='Image Url' value={state.image}  name="image" onChange={handleChange}/>
          <button onClick={post}>Make Post</button>
        </Box>
      </StyledModal>
    </div>
   </div>
  </div>)
}

export default Feed;




