let method ="credit";
let fee=0;
switch (method) {
    case "credit":
        console.log("Processing fee for crdit payment: 2%");
        break;
    case "debit":
        console.log("Processing fee for debit payment: 1.5%");        
        break;
    case "paypal":
        console.log("Processing fee for PayPal payment: 3%");        
        break;                
    default:
        console.log("invalid input");
        break;
}
