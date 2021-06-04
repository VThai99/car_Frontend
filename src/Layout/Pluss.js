import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Pluss = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const dispatch = useDispatch();
    const onHandel = () =>dispatch({
            type: "PLUS",
            a: a,
            b: b,
        });
    const all = useSelector(state => state.all)
    return (
        <div>
            <p>A:</p>
            <input type="number" value={a} onChange = {(e)=>{setA(e.target.value)}} />
            <p>B:</p>
            <input type="number" value={b} onChange = {(e)=>{setB(e.target.value)}}/>
            <button onClick={onHandel}>Pluss</button>
            <p>Result:</p>
            <input type="number" value={all}/>
        </div>
    )
}
export default Pluss;