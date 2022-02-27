import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../../context/shop-context";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function StallDetails() {
    const {id} = useParams()
    const context = useContext(ShopContext)
    const {bookingStalls} = context
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
    setValue(event.target.value);
        };
  return (
    <div className="booking_main">
        {
            bookingStalls.filter((e)=>{return(`${e.id}`===id)}).map((e,i)=>{
                return(
                    <div>
                        <h1>Location : {e.city}</h1>
                        <div>
                            <h2>Details :</h2>
                            <div>
                                <h3>{e.address}</h3>
                                <h3>{e.day}</h3>
                                <h3>{e.time}</h3>
                            </div>
                            <div>
                                <h1>Total stalls : {e.capacity}</h1>
                                <h1>Available stalls : {e.capacity-15}</h1>
                                <h1>Per stall price: 5,000/-</h1>
                            </div>
                            <div>
                                <FormControl sx={{ minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Select No. of Stalls</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={value}
                                    onChange={handleChange}
                                    autoWidth
                                    label="Select No. of Stalls"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div>
                        <Button variant="contained" color="success">But now</Button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default StallDetails