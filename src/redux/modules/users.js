// 초기 상태값(State)
const initialState = {
    userId: 123,
};
// useState 일때는 아래와같이
// const [number, setNumber] = useState(0)

// 리듀서 : 'State에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : State와 action
const users = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default users;
