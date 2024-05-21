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
