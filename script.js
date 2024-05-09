class Student{
    constructor(name,age,Edgucation){
        this.name=name;
        this.age=age;
        this.Edgucation=Edgucation;
    }
    start(){
        console.log("Website start");
    }
    stop(){
        console.log("stop");
    }
}
class enginner extends  Student{
    constructor(name,age,Edgucation){
        super(name,age,Edgucation);
    }

    Work(){
        console.log("Full-stack-developer");
        alert("Website start");
    }

   
}

let project1 = new enginner("Aditya-Dighe",24,"BE E&TC");