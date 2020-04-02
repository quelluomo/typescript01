const person = {
  name: "Max",
  age: 30,
  hobbies: ["sports", "cooking meth"],
  role: [0, 'admin'] //here you could specify this as a special array (tuple) by declaring the type explicitely. This array would be of fixed length
};

let favoriteActivities: string[]; // declares an empty variable of type "array of strings"
/* in the example above, ts sees person as a concrete object with key:type pairs (not key:value!!) */

/* const person: {
    name: string;
    age: number;
} = { 
    //if we leave "object" or "{}" we are only declaring that person is an object
  name: "Max",
  age: 30
}; */
// the object above is not best practise! The top one is!
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}


/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
this is totally ok, but a ENUM would work better for declaring a role */

enum Role {ADMIN, READ_ONLY, AUTHOR}; // <-this is a custom type not present in JS
// it assigns the number 0, 1, 2
// you can call Role.ADMIN on an object