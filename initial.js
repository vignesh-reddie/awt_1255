class Student{
    constructor(name)
    {
        this.name=name;
    }
    display()
    {
        console.log("Student name from parent class : "+this.name);
    }
}
let a=new Student();
a.display();