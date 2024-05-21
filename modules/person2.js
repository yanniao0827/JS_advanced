console.log(import.meta.url);

export default class Person2{
    gender="female"; //可以直接設定屬性
    constructor(name="Lea",age=20){
        this.name=name;
        this.age=age;
    }
    getInfo(){
        return `${this.name}${this.age}`;
    }
    toString=()=>JSON.stringify(this); //可以在這裡直接設定toString的方法
}

console.log("person2 module要export");

// export : 一般的匯出
export const PI = 3.14;
const PI2 = 3.14159;
export const b = (n) => n * n * n;