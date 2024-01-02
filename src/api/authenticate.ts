export type User = {
    id: string;
    name: string;
}

//Simulate successful authentication API response
export function authenticate():Promise<User | undefined>{
    return new  Promise((resolve) => {
        setTimeout(() => resolve({id: "1", name:"Bob"}));
    });
}