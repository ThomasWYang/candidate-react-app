import React from 'react';


export function Body(props) {
    //console.log(props);
    function renderList() {
        //loop over props.list and return an array of divs for each item in dive array
        return props.list.map((item, index) =>
            <Row item={item} key={item.id}
                onDeleteClick={() => props.onDeleteClick(item.id)}
                onSelectClick={() => props.onSelectClick(item.id)}></Row>

            // <div>
            //     <label>{index + 1}</label>
            //     <div key={index} >{item}</div>
            //     <button onClick={() => props.onDeleteClick(index)}>X</button>
            // </div>
        );
    }


    return (
        <div>
            <div style={styles.row} >
                    <label style={styles.label} ></label>
                    <div style={styles.content} >FirstName</div>
                    <div style={styles.content3} >LastName</div>
                    <div style={styles.content2} >Email</div>
                    <div style={styles.content3} >Score</div>
                    <div style={styles.content3}> Action</div>
            </div>
            <div style={styles.container}>
                {renderList()}
            </div>
        </div>
    );
}


function Row(props) {
    return (
        <div style={styles.row} >
            <label style={styles.label} >{props.item.id}</label>
            <div style={styles.content} >{props.item.fname}</div>
            <div style={styles.content} >{props.item.lname}</div>
            <div style={styles.content2} >{props.item.email}</div>
            <div style={styles.content} >{props.item.score}</div>
            
            <button style={styles.button} onClick={() => props.onDeleteClick()}>
                    Delete
            </button>
            <button style={styles.button} onClick={() => props.onSelectClick()}>
                    Select
            </button>
            
        </div >
    );
}


const styles = {
    container: {
        padding: 20,
    },

    row: {
        display: 'flex',
        minHeight: 15,
        backgroundColor: 'aliceblue',
        borderTop: '2px solid aquamarine',
        borderBottom: '2px solid aquamarine',
        padding: 10,
        justifyContent: 'center',
        margin: '-2px'

    },
    label: {
        margin: 10,
        color: 'purple',
        fontWeight: 'bold'
    },
    content: {
        widdiv: '100%',
        minWidth:'12%',
        margin: 10,
        fontWeight: 'bold',
        color: 'black'
    },
        content2: {
        widdiv: '100%',
        minWidth:'30%',
        margin: 10,
        fontWeight: 'bold',
        color: 'black'
    },
      content3: {
        widdiv: '100%',
        minWidth:'10%',
        margin: 10,
        fontWeight: 'bold',
        color: 'black'
    },

    button: {
        margin: 10
    }

};
