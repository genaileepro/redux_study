import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusone, minusone, reroad } from './redux/modules/counter';
import { plusN, minusN } from './redux/modules/counter';

function App() {
    // payload를 위한 State제작
    const [number, setNumber] = useState(0);

    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
    // 사용하는 Hook useSelector

    const counter = useSelector((state) => {
        return state.counter;
    });

    // useEffect(() => {
    //     console.log('number는?' + number);
    // }, [number]);

    // dispatch를 가져와 보자.
    const dispatch = useDispatch();
    // console.log('카운트는?', counter.number);

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(event) => {
                        const { value } = event.target;
                        setNumber(+value);
                    }}
                />
            </div>
            <button
                onClick={() => {
                    // +1을 해주는 로직을 써주면 된다.
                    // dispatch({
                    //     type: PLUS_ONE,
                    // });
                    // dispatch(plusone());
                    dispatch(plusN(number));
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    // dispatch({
                    //     type: MINUS_ONE,
                    // });
                    // dispatch(minusone());
                    dispatch(minusN(number));
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    // dispatch({
                    //     type: RE_ROAD,
                    // });
                    dispatch(reroad());
                }}
            >
                초기화
            </button>
        </>
    );
}

export default App;
