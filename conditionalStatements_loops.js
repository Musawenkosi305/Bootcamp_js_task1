//Temperature check
let temperature = -9

// if(temperature >= 25) {
    
//     console.log("it's warm", temperature);

// }else if(temperature >= 16 && temperature <= 25) {
    
//     console.log("it's mild", temperature);

// }else if(temperature >= 0 && temperature <=15 ) {
    
//     console.log("it's cold", temperature);

// }else {
    
//     console.log("it's freezing", temperature);
// };

switch (temperature) {
    case temperature >= 25:
        console.log("it's warm");
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("it's mild");
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("it's cold");
        break;
    default:
        console.log("it's freezing");
    };