const printMenu = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday's Menu: French Fries and Sauce");
            break;
        case 'tuesday':
            console.log("Tuesday's Menu: Noodles");
            break;
        case 'wednesday':
            console.log("Wednesday's Menu: South Indian");
            break;
        case 'thursday':
            console.log("Thursday's Menu: Healthy vegetables");
            break;
        case 'friday':
            console.log("Friday's Menu: Pizza");
            break;
        case 'saturday':
            console.log("Saturday's Menu: Fresh fruits Juices");
            break;
        case 'sunday':
            console.log("Sunday's Menu: Sandwitch");
            break;
        default:
            console.log("Invalid day entered.");
    }
}
printMenu('Monday'); 
printMenu('Friday'); 
printMenu('Sunday'); 
printMenu('Invalid Day'); 