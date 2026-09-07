class MyEmployee {

    public name: string;
    public lastName: string;
    private salary: number;
    public position: string;
    
    constructor(
        name: string,
        lastName: string,
        salary: number,
        position: string,
    ) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.position = position;
        
    }

    greeting(): string {
        return `My name is ${this.name} ${this.lastName} my role is ${this.position}`;
    }


}

const Itemployee = new MyEmployee(
    "John",
    "Doe",
    15000,
    "Developer",
);

console.log(Itemployee.greeting());