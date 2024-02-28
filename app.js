// const student = {
//   firstName: 'ram',
//   class: 10
// };

///////////////////////////

// const person = {
//   name: 'John',
//   age: 20
// };
// console.log(typeof person); // object

// // objectlarni bir qator qilib e'lon qilish mumkin lekin bunday holat juda kam bo'ladi.
// const person = { name: 'John', age: 20 };

///////////////////////////////////////////

// const Employee = {
//   firstname: 'John',
//   lastname: 'Doe'
// };

// console.log(Employee.firstname);
// // Expected output: "John"

// delete Employee.firstname;

// console.log(Employee.firstname);
// // Expected output: undefined

////////////////////////////////////////////

// const Employee = {
//   firstname: 'John',
//   lastname: 'Doe'
// };

// Employee.firstname = "Sardor"

/////////////////////////////////////////////

// const person = {
//   name: 'John',
//   age: 30,

//   // accessing name property by using this.name
//   greet: function() { console.log('The name is' + ' ' + this.name); }
// };

// person.greet();

// // lekin function ichida o'zgaruchi e'lon qilingan bo'lsa unga shart emas.
// const person = {
//   name: 'John',
//   age: 30,
//   greet: function() {
//       let surname = 'Doe';
//       console.log('The name is' + ' ' + this.name + ' ' + surname); }
// };

// person.greet();
