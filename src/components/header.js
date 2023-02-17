import React, { useState } from 'react';


export function Header(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    let onFnameChange = e => setFname(e.target.value);
    let onLnameChange = e => setLname(e.target.value);
    let onEmailChange = e => setEmail(e.target.value);
    
    const [fname2, setFname2] = useState('');
    const [lname2, setLname2] = useState('');
    const [email2, setEmail2] = useState('');
    const [score2, setScore2] = useState('');
    const [hiddenId, setHiddenId] = useState(true);
    const [upsert, setUpsert] = useState('Add');
    const [upsert2, setUpsert2] = useState('Update');

    let onFnameChange2 = e => setFname2(e.target.value);
    let onLnameChange2 = e => setLname2(e.target.value);
    let onEmailChange2 = e => setEmail2(e.target.value);
    let onScoreChange2 = e => setScore2(e.target.value);


    let onSearchClick = () => {
        return props.onSearchClick(fname, lname, email);
       
    };
    let onUpsertClick = () => {
        // setTimeout(() => {
        //     setFname2('');
        //     setLname2('');
        //     setEmail2('');
        //     setScore2('');
        //  }, 5000);
        if (upsert === 'Add')
            return props.onAddClick(fname2, lname2, email2, score2);
        else
            return props.onUpdateClick(props.selected,fname2, lname2, email2, score2);
    }

    let onSwitchClick = () => {
        if (upsert === 'Add') {
            setUpsert('Update');
            setUpsert2('Add');
            setHiddenId(false);
        } else {
            setUpsert('Add');
            setUpsert2('Update');
            setHiddenId(true);
        }

    }
    let onOrderClick = () => {
        return props.onOrderClick();
    }
       

    return (
        <div>
        <div style={styles.header1}>
                <input value={fname} onChange={onFnameChange} style={styles.input} placeholder='First Name'></input>
                <input value={lname} onChange={onLnameChange} style={styles.input} placeholder='Last Name'></input>
                <input value={email} onChange={onEmailChange} style={styles.input} placeholder='Email'></input>
                <button style={styles.button} onClick={onSearchClick}>Search</button>
                <button style={styles.button} onClick={onOrderClick}>OrderByScore</button>
        </div>

            <div style={styles.header2}>
                <button style={styles.button} onClick={onSwitchClick}>Switch to {upsert2}</button>
                <input value={props.selected} style={styles.label} hidden={hiddenId} readOnly></input>
                <input value={fname2} onChange={onFnameChange2} style={styles.input} placeholder='First Name'></input>
                <input value={lname2} onChange={onLnameChange2} style={styles.input} placeholder='Last Name'></input>
                <input value={email2} onChange={onEmailChange2} style={styles.input} placeholder='Email'></input>
                <input value={score2} onChange={onScoreChange2} style={styles.input} placeholder='Score'></input>
                <button style={styles.button} onClick={onUpsertClick}>{upsert}</button>
         </div>
    </div>

    );
}


const styles = {
    header1: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'black',
        color: 'aquamarine',
        fontWeight: 'bold',
    },
        header2: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: 'black',
        color: 'aquamarine',
        fontWeight: 'bold',
    },
    label: {
        padding: 5,
        width:20,
        margin: 10,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'black',
        border: '2px solid black',
    },
    button: {
        border: '2px solid lightpink',
        backgroundColor: 'aquamarine',
        borderRadius: 3,
        padding: 5,
        margin:5,
        fontWeight: 'bold',
    },
    input: {
        border: '2px solid aquamarine',
        borderRadius: 3,
        padding: 5,
        margin: 10,
    },
        input2: {
            border: '2px solid aquamarine',
            width:20,
        borderRadius: 3,
        padding: 5,
        margin: 10,
    },
}

