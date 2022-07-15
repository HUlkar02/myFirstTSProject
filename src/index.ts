type Customer = {
    birthday : Date
};

function getCustomer(id : number): Customer | null{
    return id === 0? null :{birthday: new Date()};

}
let customer= getCustomer(0);
console.log(customer?.birthday?.getFullYear());

let log : any = null;

log?.('a');






// function greet(name : string | null |undefined){
//     if(name)
//     console.log(name.toUpperCase);
//     else
//     console.log('Hola!');
    
// }
// greet(undefined);




// type Quantity = 50 | 100;
// let quantity: Quantity = 100;


// type Metric = 'cm' | 'inch' 







// type Draggable ={
//     drag: () => void
// };

// type Resizble = {
//     resize : () => void
// };

// type UIWidget = Draggable & Resizble;

// let textBox: UIWidget = {
//  drag: () => {},
//  resize: () => {}
// }




// function kgTolbs(weight: number | string): number{
// if(typeof weight === 'number')
//     return weight * 1.2;
// else
//     return  parseInt(weight) * 2.2; 
// }

// kgTolbs(10);
// kgTolbs('10 kg');









// type Employee={
    
//         readonly  id: number,
//         name: string
//         retire: (date : Date)=>void 
    
// }


// let employee: Employee = {
//     id: 1,
//      name: 'hULKAR',
//      retire:(date: Date)=>{
//         console.log(date);
        
//      }
//     };

 