import React from 'react'

function Profile() {
    return (
        <>
        <div style={{height:350, width:'18vw', backgroundColor: 'white', borderRadius: 10, margin: 10}}>
            <br/>
            <div style={{display:"flex",margin:"10px",marginLeft:"20px"}}>
            <img src="https://tse3.mm.bing.net/th?id=OIP.8B35pMvazT4i0XTvJ5Mx0AHaEX&pid=Api&P=0&w=293&h=173" alt="" height={50} width={50} style={{borderRadius: '30px'}}/>
            <h3 style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"10px"}}>Bharat Jadhav</h3>
            </div>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"20px"}}>
            <img src="avatar.jpg" alt="" height={50} style={{borderRadius: '50px'}}/>
                <div>Connections</div>
                <br/>
                <div>
                    who viewed your profile
                </div>
                <hr/>
                <div>
                    Settings
                </div>
                <hr/>
                <div>
                    Transactions
                </div>
                <hr/>
                <div>
                    Logout
                </div>
                <hr/>
            </div>
        </div>
        </>
    )
}

export default Profile
