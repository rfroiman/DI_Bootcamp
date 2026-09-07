interface User {
    name: string;
    email: string;
    readonly id: number;
}

interface UserPremium extends User {
    membership: string
}

let a: UserPremium = {
    membership: "GOLD",
    name: "Joe",
    email: "joe@joe.com",
    id: 1
}