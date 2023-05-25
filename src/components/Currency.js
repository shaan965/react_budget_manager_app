import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";


const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return(
        <div className="alert alert-secondary">
            <label style={{marginLeft: '1rem', color: 'white'}}>Currency
            <select name='Currency' id='currency' onChange={(event)=> changeCurrency(event.target.value)}>
            <option value="£">Uk(£)</option>
            <option value="₹">India(₹)</option>
            <option value="€">Europe(€)</option>
            <option value="$">USD($)</option>
            </select>
            </label>
        </div>
    );
};

export default Currency;