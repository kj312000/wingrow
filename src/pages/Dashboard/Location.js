import React from 'react';

function Location() {
    const locations = [
    {
        name:"Amanora Town City",
        day:"Sunday",
        address:"https://goo.gl/maps/jUtyP67Q1oWdDMvA9",
        time:"3pm-9pm"
    },
    {
        name:"Prabhat Road",
        day:"Sunday",
        address:"https://goo.gl/maps/EiFVVggbQTiTm1n2A",
        time:"7am-1pm"
    },
    {
        name:"Wanwadi",
        day:"Saturday",
        address:"https://maps.app.goo.gl/54qsT1zcGPEv6gMx7",
        time:"3pm-9pm"
    },
    {
        name:"Karvenagar",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    },
    {
        name:"Amanora Town City",
        day:"Sunday",
        address:"https://goo.gl/maps/jUtyP67Q1oWdDMvA9",
        time:"3pm-9pm"
    },
    {
        name:"Prabhat Road",
        day:"Sunday",
        address:"https://goo.gl/maps/EiFVVggbQTiTm1n2A",
        time:"7am-1pm"
    },
    {
        name:"Wanwadi",
        day:"Saturday",
        address:"https://maps.app.goo.gl/54qsT1zcGPEv6gMx7",
        time:"3pm-9pm"
    },
    {
        name:"Karvenagar",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    },
    {
        name:"Amanora Town City",
        day:"Sunday",
        address:"https://goo.gl/maps/jUtyP67Q1oWdDMvA9",
        time:"3pm-9pm"
    },
    {
        name:"Prabhat Road",
        day:"Sunday",
        address:"https://goo.gl/maps/EiFVVggbQTiTm1n2A",
        time:"7am-1pm"
    },
    {
        name:"Wanwadi",
        day:"Saturday",
        address:"https://maps.app.goo.gl/54qsT1zcGPEv6gMx7",
        time:"3pm-9pm"
    },
    {
        name:"Karvenagar",
        day:"Saturday",
        address:"https://goo.gl/maps/y1LnJPhQwMaqrPTF8",
        time:"3pm-9pm"
    }
]
  return <div className="main_location">
      {
          locations.map((e)=>{
            const {name,address,time,day} = e;
            return(
                <div className='location'>
                    <a style={{color:"black"}} href={address}>
                    <img className='location_img' src="https://tse1.mm.bing.net/th?id=OIP.bpW3ZINuqTgSZpZQj_Th2wHaHa&pid=Api&P=0&w=168&h=168" alt="logo" />
                    </a>
                    <h2 style={{textAlign:"center",fontWeight:"700"}}>{name}</h2>
                    <h4 style={{fontWeight:"500"}}>Day : {day}</h4>
                    <h4 style={{fontWeight:"500"}}>Time : {time}</h4>
                </div>
            )
          })
      }

  </div>;
}

export default Location;
