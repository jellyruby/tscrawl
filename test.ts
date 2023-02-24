const isRejected = (input : PromiseSettledResult<unknown>):input is PromiseRejectedResult =>{
    return input.status === 'fulfilled';
}


const isFullFilled = <T>(input : PromiseSettledResult<unknown>):input is PromiseFulfilledResult<T> =>{
    return input.status === 'fulfilled';
}


const promise = await Promise.allSettled([Promise.resolve('error'), Promise.resolve('success')]);
isFullFilled<string>(promise[1]);
isFullFilled<string>(promise[0]);

const errors = promise.filter((promise)=>{return promise.status === 'fulfilled'})


/**
 *  Object랑 {}는 전체 타입이 된다. ( null, undefined 제외) 즉 unknwon과의 차이는 null,undefined
 *  
 *  any는 타입추론 포기
 *  unknown은 타입을 다시 지정해야한다.
 * 
 *  unknown쓰는게 낫다
 */
const x:{} = 'hello';
const y:Object = 'helllo'; 

const z: unknown =  '바보';

if(z){
    z;
}else{
    z;
}

 const tes = z??'string'

export {};


//readonly 그냥 읽기전용 -> const여도 멤버변수는 변경 가능한데, readonly 로 멤버 선언하면 못바꾼다.

type readonlyTest = {
    readonly a : string,
    b : string,
}


//인덱스 시그니쳐란?

type A = {a:string, b: string, c:string } ///....모든 형태가 stringㅇ리때 길어지면 너무 많음
type B = {[key:string]:string};

const varB : B = { a: 'b', b:'test'}

// 맵드 타입

type Human = 'Human' | "Mamal" | 'Animal';
type HumanObj = { [Key in Human] : Human };

const humanism : HumanObj = { 
    Human:'Mamal',
    Mamal:'Animal',
    Animal : 'Human'
};


interface ClassTest{

    b:string;
    c:number;
    test(a:string, b:number) : void;
}


// 클래스 테스트
class Classtest implements ClassTest {

    b : string;
    c : number;

    private a : number = 123;


    constructor(a:string ,b:number){

        this.b = 'asdf';
        this.c = 123;
        
    }

    test(a:string, b:number ){

        const abstract:unknown = undefined;

        

        return abstract;        
    }

    
    public get value() : string {
        return this.b;
    }

    
    public set value(v : string) {
        this.b = v;
    }
    
    


}

 
const classtest = new Classtest('bobo',3232);





 //foreach map

 ['123','234',123].forEach((quset)=>{

    quset
  
   })