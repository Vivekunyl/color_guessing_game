import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import '../style/Period.css';

const Period = ()=>{
    const history = useHistory();
    const [userData, setuserData] = useState({});
    const callPeriod = async () => {
        try{
            const res = await fetch('/mine',{
                method:'GET',
                headers:{
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                credentials:'include'
            });

            const data = await res.json();
            console.log(data);
            setuserData(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            history.push('/Login');
        }
    }

    useEffect(() => {
       callPeriod();
    }, [])
    return(
        <>
            <section className="period-sec">
                <h2>Your Password is {userData.password} </h2>
            </section>
        
        </>
    );
}

export default Period;