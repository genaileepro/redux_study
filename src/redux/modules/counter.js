// action value
const PLUS_ONE = 'counter/PLUS_ONE';
const MINUS_ONE = 'counter/MINUS_ONE';
const RE_ROAD = 'counter/RE_ROAD';
const PLUS_N = 'counter/PLUS_N';
const MINUS_N = 'counter/MINUS_N';

// action creator : action value를 return 하는 함수
export const plusone = () => {
    return { type: PLUS_ONE };
};
export const minusone = () => {
    return { type: MINUS_ONE };
};
export const reroad = () => {
    return { type: RE_ROAD };
};

export const plusN = (payload) => {
    // console.log('payload', payload);
    return { type: PLUS_N, payload };
};

export const minusN = (payload) => {
    return { type: MINUS_N, payload };
};

// 초기 상태값(State)
const initialState = {
    number: 0,
};
// useState 일때는 아래와같이
// const [number, setNumber] = useState(0)

// 리듀서 : 'State에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : State와 action
// action 객체라는 것은 action type을 payload만큼 처리하는 것이다!!
// ex: payload가 3이다. 라는것은 3만큼을 action type을 해라.
// 즉, "3만큼을 플러스를 해라" 라는 말과 같다.
const counter = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case PLUS_ONE:
            return { number: state.number + 1 };
        case MINUS_ONE:
            return { number: state.number - 1 };
        case RE_ROAD:
            return { ...initialState };
        case PLUS_N:
            return { number: state.number + action.payload };
        case MINUS_N:
            return { number: state.number - action.payload };
        default:
            return state;
    }
};

export default counter;
