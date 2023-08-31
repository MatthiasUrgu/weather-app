import { useState } from 'react';
import style from './style.module.scss'
import { response } from 'App';
import axios from 'axios';


function Menu({Name}) {
   const [data, setCity] = useState('');
   const [city, setCity] = useState('');


   function InputValue(e) {
setCity(e.target.value)

console.log(e.target.value);
   }
 function CityName(e){
    if (e.key === 'Enter'){
        axios.get(response).then((response)=> 
        )
        console.log('enter fait');
        setCity(city)
        setCity('')
        console.log(city);  
         return city
    }
    else{
        console.log("it's doesn't work");
    }

}
    return (
        <div className={style.menuContainer}>
            <input type="text" 
            value={city}
            onChange= {InputValue}
            onKeyDown={CityName}
                 />
        </div>
    );
}

export default Menu;