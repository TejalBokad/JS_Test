const companyEmployees = {
    employees: [
        {
            id: 1,
            name: "Komal Pethe",
            position: "Software Engineer",
            department: "Computer Engineering",
            contact: {
                email: "komal@gmail.com",
                phone: "+1234567890"
            }
        },
        {
            id: 2,
            name: "Raksha Singh",
            position: "Marketing Manager",
            department: "Marketing",
            contact: {
                email: "rakshas@gmail.com",
                phone: "+1987654321"
            }
        },
        
    ]
};


console.log(companyEmployees.employees[0].name); 
console.log(companyEmployees.employees[1].contact.email);