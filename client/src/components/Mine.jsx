import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SecurityIcon from '@mui/icons-material/Security';
import DownloadIcon from '@mui/icons-material/Download';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../style/Mine.css';

const Mine = () => {
    const history = useHistory();
    const [userData, setuserData] = useState({});

    //states for menu
    const [currentMenu_1, setNewMenu_1] = useState(false);
    const [currentMenu_2, setNewMenu_2] = useState(false);
    const [currentMenu_3, setNewMenu_3] = useState(false);
    const [currentMenu_4, setNewMenu_4] = useState(false);
    const [currentMenu_5, setNewMenu_5] = useState(false);
    const [currentMenu_6, setNewMenu_6] = useState(false);
    const [currentMenu_7, setNewMenu_7] = useState(false);
    const [currentMenu_8, setNewMenu_8] = useState(false);
    const [currentMenu_9, setNewMenu_9] = useState(false);

    //state for more button

    const [currentMoreButton,setMoreButton] = useState(false);

    //Function to change state of more button div

    const showMoreButton = ()=>{
        if(currentMoreButton === true){
            hideMoreButton();
        }
        else{
            setMoreButton(true);
        }
    }

    const hideMoreButton = () =>{
        setMoreButton(false);
    }

//functions to change the state of menau div's
    const showDropDownMenu_1 = () => {
        if (currentMenu_1 === true) {
            hideDropDownMenu_1();
        }
        else {
            setNewMenu_1(true);
        }
    }

    const hideDropDownMenu_1 = () => {
        setNewMenu_1(false);
    }


    const showDropDownMenu_2 = () => {
        if (currentMenu_2 === true) {
            hideDropDownMenu_2();
        }
        else {
            setNewMenu_2(true);
        }
    }

    const hideDropDownMenu_2 = () => {
        setNewMenu_2(false);
    }


    const showDropDownMenu_3 = () => {
        if (currentMenu_3 === true) {
            hideDropDownMenu_3();
        }
        else {
            setNewMenu_3(true);
        }
    }

    const hideDropDownMenu_3 = () => {
        setNewMenu_3(false);
    }


    const showDropDownMenu_4 = () => {
        if (currentMenu_4 === true) {
            hideDropDownMenu_4();
        }
        else {
            setNewMenu_4(true);
        }
    }

    const hideDropDownMenu_4 = () => {
        setNewMenu_4(false);
    }


    const showDropDownMenu_5 = () => {
        if (currentMenu_5 === true) {
            hideDropDownMenu_5();
        }
        else {
            setNewMenu_5(true);
        }
    }

    const hideDropDownMenu_5 = () => {
        setNewMenu_5(false);
    }


    const showDropDownMenu_6 = () => {
        if (currentMenu_6 === true) {
            hideDropDownMenu_6();
        }
        else {
            document.getElementById('menu-id-6').style.height = 'auto'; 
            setNewMenu_6(true);
        }
    }

    const hideDropDownMenu_6 = () => {
        setNewMenu_6(false);
    }


    const showDropDownMenu_7 = () => {
        if (currentMenu_7 === true) {
            hideDropDownMenu_7();
        }
        else {
            setNewMenu_7(true);
        }
    }

    const hideDropDownMenu_7 = () => {
        setNewMenu_7(false);
    }


    const showDropDownMenu_8 = () => {
        if (currentMenu_8 === true) {
            hideDropDownMenu_8();
        }
        else {
            setNewMenu_8(true);
        }
    }

    const hideDropDownMenu_8 = () => {
        setNewMenu_8(false);
    }


    const showDropDownMenu_9 = () => {
        if (currentMenu_9 === true) {
            hideDropDownMenu_9();
        }
        else {
            document.getElementById('menu-id-9').style.height = 'auto';
            setNewMenu_9(true);
        }
    }

    const hideDropDownMenu_9 = () => {
        setNewMenu_9(false);
    }


    const callMine = async () => {
        try {
            const res = await fetch('/mine', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                credentials: 'include'
            });

            const data = await res.json();
            console.log(data);
            setuserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            history.push('/Login');
        }
    }

    useEffect(() => {
        callMine();
    }, [])
    return (
        <>
            <section className="mine-sec">
                <div className="mine-header">
                    <h2>Mine</h2>
                    <div className="more-btn" onClick={showMoreButton}>
                        <MoreVertIcon />
                        {currentMoreButton?(
                            <div className="more-btn-content">
                                <ul>
                                    <li>
                                        <NavLink className="more-link" to="#">Notice</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="more-link" to="#">Change Nick name</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="more-link" to="#">Logout</NavLink>
                                    </li>
                                </ul>
                            </div>
                        ):null}
                    </div>
                </div>
                <div className="user-info-area">
                    <div className="user-content">
                        <div className="data">
                            <p>ID: </p><p className="user-data">{userData.Id}</p>
                        </div>
                        <div className="data">
                            <p>Mobile:</p><p className="user-data">{`+91${userData.phone}`}</p>
                        </div>
                        <div className="data">
                            <p>Nick Name: </p><p className="user-data">{`${userData.username}`}</p>
                        </div>
                        <div className="data">
                            <p>Available Balance: </p><p className="user-data">{`₹`}</p>
                        </div>

                    </div>
                </div>
                <div className="menuSection">

                    <div className="menu-class" id="menu-id-1" onClick={showDropDownMenu_1}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <ListAltIcon />
                            </div>
                            <div className="icon-info">
                                <p>Order</p>
                            </div>
                        </div>

                        {currentMenu_1 ? (
                            <div className="menu-elements" id="menu-elements-1">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-2" onClick={showDropDownMenu_2}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <CardGiftcardIcon />
                            </div>
                            <div className="icon-info">
                                <p>Promotion</p>
                            </div>
                        </div>

                        {currentMenu_2 ? (
                            <div className="menu-elements" id="menu-elements-2">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-3" onClick={showDropDownMenu_3}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <AccountBalanceWalletIcon />
                            </div>
                            <div className="icon-info">
                                <p>Wallet</p>
                            </div>
                        </div>

                        {currentMenu_3 ? (
                            <div className="menu-elements" id="menu-elements-3">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-4" onClick={showDropDownMenu_4}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <CreditCardIcon />
                            </div>
                            <div className="icon-info">
                                <p>Bankcard</p>
                            </div>
                        </div>

                        {currentMenu_4 ? (
                            <div className="menu-elements" id="menu-elements-4">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-5"  onClick={showDropDownMenu_5}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <ApartmentIcon />
                            </div>
                            <div className="icon-info">
                                <p>Address</p>
                            </div>
                        </div>

                        {currentMenu_5 ? (
                            <div className="menu-elements" id="menu-elements-5">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-6" onClick={showDropDownMenu_6}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <SecurityIcon />
                            </div>
                            <div className="icon-info">
                                <p>Account Security</p>
                            </div>
                        </div>

                        {currentMenu_6 ? (
                            <div className="menu-elements" id="menu-elements-6">
                                <li>
                                    <NavLink className="menu-links" to="/">Reset Password</NavLink>
                                </li>
                                
                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-7" onClick={showDropDownMenu_7}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <DownloadIcon />
                            </div>
                            <div className="icon-info">
                                <p>App Download</p>
                            </div>
                        </div>


                        {currentMenu_7 ? (
                            <div className="menu-elements" id="menu-elements-7">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-8" onClick={showDropDownMenu_8}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <ChatIcon />
                            </div>
                            <div className="icon-info">
                                <p>Complaints & Suggestions</p>
                            </div>
                        </div>

                        {currentMenu_8 ? (
                            <div className="menu-elements" id="menu-elements-8">

                            </div>
                        ) : null}
                    </div>
                    <div className="menu-class" id="menu-id-9" onClick={showDropDownMenu_9}>
                        <div className="menu-info">
                            <div className="icon-sec">
                                <AssignmentLateIcon />
                            </div>
                            <div className="icon-info">
                                <p>About</p>
                            </div>
                        </div>

                        {currentMenu_9 ? (
                            <div className="menu-elements" id="menu-elements-9">
                                <li>
                                    <NavLink className="menu-links" to="/">Reset Password</NavLink>
                                </li>
                                <li>
                                    <NavLink className="menu-links" to="/">Risk disclosure agreement</NavLink>
                                </li>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Mine;