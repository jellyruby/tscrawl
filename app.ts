const a = 111;



//function test (x : number, y:number) : number { return x+y;}
const test: ( x : number, y : number) => number = (x,y) => x+y;

const arr :string[] = ['123'];
const are: Array<string>  = ['123','123','123'];

const obj: {
    lat: Number ,
    lon: Number
} = { lat : 1, lon : 3};

interface Add {

    a : number ,
    b : number 
    
}

type zzz = Array<string>;

const ztest:zzz = [
    '123'
]

class Addin implements Add{

    a:number;
    b:number;

    constructor(x:number , y:string){
        this.a = x;
        this.b = Number.parseInt(y) ;
    }

}

const addin = new Addin(NaN,'test');

// function alpha(x:number , y:number ) : number;
function alpha (x:number , y:number){
    return x+y;    
}

let q = 1;
q = 'hello' as unknown as number;

try{
    const array  = [];
}catch (error) {
    error;
}


type Elem = Element|null;


const head  = document.querySelector("#head");


if(head){
    const gas:string  =  head.innerHTML;
}


type typer = '123';

const typing:typer = '123';

type weather = 'rain' | 'snow' | 'sunny';

type weatheralert = `today weather is ${weather}`

const weathercast :weatheralert = 'today weather is snow';


enum tester {
    a,
    b,
    c,
    d,

}


const typeOfTest = {

    a:1,
    b:2,
    c:3,
    d:4,
    e:5

}  as const

type typeOf = typeof typeOfTest[keyof typeof typeOfTest];

type  xy = { lat : number } & {lon : number};
const babo : xy = {lat : 1 , lon :2}

// Union | 
//둘중 하나만 있음 됨
//객체의 속성에서도 하나만 있음 됨

// intersection & 
//일반적인 상황에서 사용 X 객체엥서만 가능
// 모든 속성이 다 있어야한단읨

//type alias 코드를 마치 상속처럼 사용할수 있다


type animal = {
	move : true
}

type poyouryu = animal & {
	eat : true
}

type human = poyouryu & {
	think : true
}

//객체 리터럴 검사 로 인해 C는 실패 c2는 성공


type A = {name:string};
type B = {age: number};
type AB = A | B;    //넓은타입

type C = A & B; //좁은 타입

const ab : AB = {name:'jonghwa'}
const c: C = {name : 'jonghwa' , age: 10, merried : 'false'}; //불가능, 객체 리터럴 검사
const object = {name : 'jonghwa' , age: 10, merried : 'false'} as const; //가능 (좁은 타입이기 때문)
const c2: C =  object;

const ab2 : AB = c2; // 넓은타입에 좁은타입이라 가능

//void 타입

const human : ()=>void = ()=>{

    return;
    //아예return이 없거나
    //return undefined;
}

//메서드엔 상관없음


interface Human {
    talk: ()=> void;

}

//이렇게 talk 메서드에 가능
const human1: Human = {
    talk : ()=>{return 1;}

}


//push의 target은 콜백은 숫자이다
declare function forEach(arr : number[], callback : (el:number)=>void):void

let target = [];
forEach([1,2,3],(el)=>target.push(el))