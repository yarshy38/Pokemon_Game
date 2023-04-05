import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Poke = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        // alert('hi');
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length)
        }
        getData();
    })
    return (
        <>
            <h1>you select <span style={{ color: 'red' }}> {num} </span></h1>
            <h2>My name <span style={{ color: 'red' }}> {name}</span></h2>
            <h2> i have <span style={{ color: 'red' }}> {moves} moves</span></h2>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>

        </>
    )
}

export default Poke