import { atom, selector } from "recoil";

export const valueState = atom({
    key : 'recoilValue',
    default : 0,
});

export const countState = atom({
    key : 'recoilCount',
    default : 0,
});

export const combineSelector = selector({
    key : 'combine',
    get : ({get}) => {
        
        const value = get(valueState);
        const count = get(countState);
        // console.log("combineSelector! get ! " + value + ", " + count)
        return `value 는 : ${value} , count 는 : ${count} ㅎㅎ`;
    },
    set : ({set}, newValue) => {
        // console.log("combineSelector! set ! " + newValue)
        set(valueState, newValue)
        set(countState, newValue)
    },
});

// const delay = (ms : number) => new Promise(resolve => setTimeout(resolve, ms));
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const asyncState = atom({
    key : 'asyncValue',
    default : 0,
});

export const asyncSelector = selector({
    key : 'asyncSelector',
    get : async ({get}) => {
        const asyncValue = get(asyncState);
        const result = `async Value 는 : ${asyncValue} 입니다.`;
        await delay(1000);
        return result;
    },
});