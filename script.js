var arr = [
    { name: 'John', image:"https://randomuser.me/api/portraits/men/10.jpg", age: 30, city: 'New York' },
    { name: 'Jane', image:"https://randomuser.me/api/portraits/women/11.jpg", age: 25, city: 'Los Angeles' },
    { name: 'Mike', image:"https://randomuser.me/api/portraits/men/12.jpg", age: 35, city: 'Chicago' },
    { name: 'Sara', image:"https://randomuser.me/api/portraits/women/13.jpg", age: 28, city: 'Houston' },
    { name: 'Tom', image:"https://randomuser.me/api/portraits/men/14.jpg", age: 40, city: 'Phoenix' },
    { name: 'Emma', image:"https://randomuser.me/api/portraits/women/15.jpg", age: 22, city: 'Miami' },
    { name: 'David', image:"https://randomuser.me/api/portraits/men/16.jpg", age: 38, city: 'Seattle' },
    { name: 'Olivia', image:"https://randomuser.me/api/portraits/women/17.jpg", age: 27, city: 'San Diego' },
    { name: 'Liam', image:"https://randomuser.me/api/portraits/men/18.jpg", age: 33, city: 'Denver' },
    { name: 'Sophia', image:"https://randomuser.me/api/portraits/women/19.jpg", age: 29, city: 'Boston' }
];

let sum = '';

arr.forEach((element, index) => {
    sum += `
        <div class="card">
            <img src="${element.image}" alt="Image of ${element.name}">
            <h2>${element.name}</h2>
            <p>Age: ${element.age}</p>
            <p>City: ${element.city}</p>
            <button id="clickMeButton-${index}">Add friend!</button>
            <p class="message" id="message-${index}"></p>
        </div>`;
});

let container = document.querySelector('.container');
container.innerHTML = sum;
// Add event listeners to each button
arr.forEach((element, index) => {
    let button = document.getElementById(`clickMeButton-${index}`);
    let isFriend = false; // Track friend status
    button.addEventListener('click', () => {
        let message = document.getElementById(`message-${index}`);
        if (!isFriend) {
            message.textContent = 'Friend added!';
            button.textContent = 'Remove friend';
        } else {
            message.textContent = '';
            button.textContent = 'Add friend!';
        }
        isFriend = !isFriend; // Toggle friend status
    });
});





document.getElementById('themeButton')
.addEventListener('click', toggleTheme);

function toggleTheme() {
    let body = document.body;
    body.classList.toggle('dark-theme');
    let themeButton = document.getElementById('themeButton');
    if (body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Light-Theme';
    } else {
        themeButton.textContent = 'Dark-Theme';
    }
}

document.getElementById('googleButton')
.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

document.getElementById('addButton')
.addEventListener('click', palindromeCheck);

function palindromeCheck() {
    let inputField = document.getElementById('inputField');
    let inputValue = inputField.value.trim();
    let message = document.getElementById('messageInput');
    
    if (inputValue === '') {
        message.textContent = 'Please enter a value.';
        return;
    }
    
    let reversedValue = inputValue.split('').reverse().join('');
    
    if (inputValue.toLowerCase() === reversedValue.toLowerCase()) {
        message.textContent = `${inputValue} is a palindrome!`;
    } else {
        message.textContent = `${inputValue} is not a palindrome.`;
    }
}



document.getElementById('messageButton')
.addEventListener('click', secretMessage, howManyLetters);

function secretMessage() {
    let ans = document.getElementById('messageInputField');
    let dispalyAns = document.getElementById('displayMessage');
    let message = ans.value.trim();
    if (message === '') {
        dispalyAns.textContent = 'Please enter a message.';
    } else {
        let words = message.split(' ');
        let transformedWords = words.map(word => {
            if (word.length === 1) {
                return word.toUpperCase();
            }
            return word.charAt(0).toUpperCase() + 
                   word.slice(1, -1) + 
                   word.charAt(word.length - 1).toUpperCase();
        });
        dispalyAns.textContent = `Your secret message is: ${transformedWords.join(' ')}.`;
    }
}


function howManyLetters() {
    let inputField = document.getElementById('messageInputField');
    let message = inputField.value.trim();
    let map = new Map();
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i].toLowerCase();
        if (char !== ' ') { // Ignore spaces
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
    }

    map.forEach((value, key) => {
        result += `${key}: ${value}<br>`;
    });

    document.getElementById('howMany').innerHTML = result;
}
// Connect the button click to the function
window.onload = function() {
    document.getElementById('messageButton')
    .addEventListener('click', howManyLetters);
}

function twoSumRepeatedLetters() {
    let inputField = document.getElementById('messageInputField');
    let message = inputField.value.trim();
    let map = new Map();
    let result = '';
    let foundLetters = [];

    for (let i = 0; i < message.length; i++) {
        let char = message[i].toLowerCase();
        if (char !== ' ' && char >= 'a' && char <= 'z') { // Only consider alphabetic characters
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
                if (map.get(char) === 2 && foundLetters.length < 2) {
                    foundLetters.push(char);
                }
            } else {
                map.set(char, 1);
            }
        }
    }

    if (foundLetters.length === 2) {
        result = `First two repeated letters: ${foundLetters[0]} and ${foundLetters[1]}`;
    } else {
        result = 'Not enough repeated letters found.';
    }

    document.getElementById('letters').textContent = result;
}
window.onload = function() {
    document.getElementById('messageButton')
    .addEventListener('click', twoSumRepeatedLetters);
}


function sortArray(arr, nameKey, ageKey) {
    // Sort the array based on the ageKey
    let sorted = arr.slice().sort((a, b) => b[ageKey] - a[ageKey]);
    // Map it to objects with name and age
    return sorted.map(item => ({
        name: item[nameKey],
        age: item[ageKey]
    }));
}
document.getElementById('sortButton')
.addEventListener('click', () => {
    let sorted = sortArray(arr, 'name', 'age');
    let display = document.querySelector('.sortedDisplay');
    display.innerHTML = '';
    sorted.forEach(item => {
        display.innerHTML += `<p>${item.name} - ${item.age}</p>`;
    });
});
    

class Person {
    constructor(image, name, age, city) {
        this.image = image;
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getDetails() {
        return `${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
}
window.onload = function() {
    document.getElementById('individualAdded')
    .addEventListener('click', () => {
        let image = document.getElementById('imageInput').value;
        if (!image) {
            alert('Please enter an image URL.');
            return;
        }
        let name = document.getElementById('name').value;
        let age = parseInt(document.getElementById('age').value);
        let city = document.getElementById('city').value;

        if (image && name && !isNaN(age) && city) {
            let newPerson = new Person(image, name, age, city);
            let display1 = document.querySelector('.newIndividual');
            display1.innerHTML += `
    <div style="margin-bottom: 10px;">
        <img src="${newPerson.image}" alt="${newPerson.name}" width="100" height="100" style="object-fit: cover; border-radius: 10px;">
        <p>${newPerson.getDetails()}</p>
    </div>
`;
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
};

document.getElementById('mobileShop')
document.getElementById('mobile')
document.getElementById('sim')
document.getElementById('price')
document.getElementById('mobileAdded')
document.getElementById('newMobile')

class Mobile {
    constructor(mobileShop, mobile, sim, price, pic) {
        this.mobileShop = mobileShop;
        this.mobile = mobile;
        this.sim = sim;
        this.price = price;
        this.pic = pic;
    }
}

window.onload = function () {
    document.getElementById('mobileAdded')
        .addEventListener('click', () => {
            let mobileShop = document.getElementById('mobileShop').value;
            let mobile = document.getElementById('mobile').value;
            let sim = document.getElementById('sim').value;
            let price = parseFloat(document.getElementById('price').value);
            let pic = document.getElementById('pic').value;

            if (!pic) {
                alert('Please enter a picture URL.');
                return;
            }

            if (!mobileShop || !mobile || !sim || isNaN(price)) {
                alert('Please fill in all fields correctly.');
                return;
            }

            // Create a new Mobile instance
            let newMobile = new Mobile(mobileShop, mobile, sim, price, pic);

            // Display the new mobile information
            let display3 = document.querySelector('.newMobile');
            display3.innerHTML += `
                <div style="margin-bottom: 10px;">
                    <img src="${newMobile.pic}" alt="${newMobile.mobile}" width="40px" height="40px" style="object-fit: cover; border-radius: 10px;">
                    <p>Shop: ${newMobile.mobileShop}</p>
                    <p>Mobile: ${newMobile.mobile}</p>
                    <p>SIM: ${newMobile.sim}</p>
                    <p>Price: $${newMobile.price.toFixed(2)}</p>
                </div>
            `;
        });
};

// Book must be defined before used in Library constructor
class Book {
    constructor(title, author, year, isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }
}

class Library {
    constructor(name, address, books) {
        this.name = name;
        this.address = address;
        this.books = books;
    }
}

class Name {
    constructor(name) {
        this.name = name;
    }
}

class Address {
    constructor(address) {
        this.address = address;
    }
}

// Example instance (optional – remove if not needed)
const sampleLibrary = new Library('City Library', '123 Main St', [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, '9780743273565'),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960, '9780061120084'),
    new Book('1984', 'George Orwell', 1949, '9780451524935')
]);

window.onload = function () {
    document.getElementById('libraryAdded')
        .addEventListener('click', () => {
            let name = document.getElementById('libraryName').value;
            let address = document.getElementById('libraryAddress').value;
            let bookTitle = document.getElementById('bookTitle').value;
            let bookAuthor = document.getElementById('bookAuthor').value;
            let bookYear = parseInt(document.getElementById('bookYear').value);
            let bookISBN = document.getElementById('bookISBN').value;

            if (!name || !address || !bookTitle || !bookAuthor || isNaN(bookYear) || !bookISBN) {
                alert('Please fill in all fields correctly.');
                return;
            }

            let newBook = new Book(bookTitle, bookAuthor, bookYear, bookISBN);
            let newLibrary = new Library(name, address, [newBook]);

            let display2 = document.querySelector('.newLibrary');
            display2.innerHTML += `
                <div style="margin-bottom: 10px;">
                    <h3>${newLibrary.name}</h3>
                    <p>Address: ${newLibrary.address}</p>
                    <p>Books:</p>
                    <ul>
                        <li>${newBook.title} by ${newBook.author} (${newBook.year}) - ISBN: ${newBook.isbn}</li>
                    </ul>
                </div>
            `;
        });
};
// hospital class for different hospitals
// Class Definitions
class Hospital {
    constructor(name, address, phone, services) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.services = services;
    }

    getHospitalDetails() {
        return `Hospital: ${this.name}, Address: ${this.address}, Phone: ${this.phone}, Services: ${this.services.join(', ')}`;
    }

    getHospitalName() {
        return this.name;
    }

    getHospitalAddress() {
        return this.address;
    }

    getHospitalPhone() {
        return this.phone;
    }

    getHospitalServices() {
        return this.services;
    }
}

class Patient {
    constructor(name, age, healthIssue, hospital, healthCardNumber) {
        this.name = name;
        this.age = age;
        this.healthIssue = healthIssue;
        this.hospital = hospital;
        this.healthCardNumber = healthCardNumber;
    }

    getPatientDetails() {
        return `Patient: ${this.name}, Age: ${this.age}, Health Issue: ${this.healthIssue}, Hospital: ${this.hospital.getHospitalName()}, Health Card Number: ${this.healthCardNumber}`;
    }

    getPatientName() {
        return this.name;
    }

    getPatientAge() {
        return this.age;
    }

    getPatientHealthIssue() {
        return this.healthIssue;
    }

    getPatientHospital() {
        return this.hospital.getHospitalName();
    }

    getPatientHealthCardNumber() {
        return this.healthCardNumber;
    }
}

// Store hospitals globally for lookup
const hospitalList = [];

window.onload = function () {
    // Add Hospital
    document.getElementById('hospitalAdded').addEventListener('click', () => {

        const name = document.getElementById('hospitalName').value;
        const address = document.getElementById('hospitalAddress').value;
        const phone = document.getElementById('hospitalPhone').value;
        const services = document.getElementById('hospitalServices').value.split(',').map(s => s.trim());

        if (!name || !address || !phone || services.length === 0 || services[0] === '') {
            alert('Please fill in all hospital fields correctly.');
            return;
        }

        const newHospital = new Hospital(name, address, phone, services);
        hospitalList.push(newHospital); // Store for patient lookup

        const display = document.querySelector('.newHospital');
        display.innerHTML += `
            <div style="margin-bottom: 10px;">
                <h3>${newHospital.getHospitalName()}</h3>
                <p>Address: ${newHospital.getHospitalAddress()}</p>
                <p>Phone: ${newHospital.getHospitalPhone()}</p>
                <p>Services: ${newHospital.getHospitalServices().join(', ')}</p>
            </div>
        `;

        // Clear inputs
        document.getElementById('hospitalName').value = '';
        document.getElementById('hospitalAddress').value = '';
        document.getElementById('hospitalPhone').value = '';
        document.getElementById('hospitalServices').value = '';
    });

    // Add Patient
    document.getElementById('patientAdded').addEventListener('click', () => {
        const name = document.getElementById('patientName').value;
        const age = parseInt(document.getElementById('patientAge').value);
        const healthIssue = document.getElementById('patientHealthIssue').value;
        const hospitalName = document.getElementById('patientHospital').value;
        const healthCardNumber = document.getElementById('healthCardNumber').value;

        if (!name || isNaN(age) || !healthIssue || !hospitalName || !healthCardNumber) {
            alert('Please fill in all patient fields correctly.');
            return;
        }

        // Find matching hospital
        const matchedHospital = hospitalList.find(h => h.getHospitalName().toLowerCase() === hospitalName.toLowerCase());

        if (!matchedHospital) {
            alert(`Hospital "${hospitalName}" not found. Please add a Hospital first.`);
            return;
        }

        const newPatient = new Patient(name, age, healthIssue, matchedHospital, healthCardNumber);

        const display = document.querySelector('.newPatient');
        display.innerHTML += `
            <div style="margin-bottom: 10px;">
                <h3>${newPatient.getPatientName()}</h3>
                <p>Age: ${newPatient.getPatientAge()}</p>
                <p>Health Issue: ${newPatient.getPatientHealthIssue()}</p>
                <p>Hospital: ${newPatient.getPatientHospital()}</p>
                <p>Health Card Number: ${newPatient.getPatientHealthCardNumber()}</p>
            </div>
        `;

        // Clear inputs
        document.getElementById('patientName').value = '';
        document.getElementById('patientAge').value = '';
        document.getElementById('patientHealthIssue').value = '';
        document.getElementById('patientHospital').value = '';
        document.getElementById('healthCardNumber').value = '';
    });
};
// Remove Hospital
document.getElementById('removeHospital').addEventListener('click', () => {
    const hospitalName = document.getElementById('hospitalToRemove').value.trim();

    if (!hospitalName) {
        alert('Please enter the name of the hospital to remove.');
        return;
    }

    const hospitalIndex = hospitalList.findIndex(h => h.getHospitalName().toLowerCase() === hospitalName.toLowerCase());

    if (hospitalIndex === -1) {
        alert(`Hospital "${hospitalName}" not found.`);
        return;
    }

    // Remove the hospital from the list
    hospitalList.splice(hospitalIndex, 1);

    // Update the display
    const display = document.querySelector('.newHospital');
    display.innerHTML = '';
    hospitalList.forEach(hospital => {
        display.innerHTML += `
            <div style="margin-bottom: 10px;">
                <h3>${hospital.getHospitalName()}</h3>
                <p>Address: ${hospital.getHospitalAddress()}</p>
                <p>Phone: ${hospital.getHospitalPhone()}</p>
                <p>Services: ${hospital.getHospitalServices().join(', ')}</p>
            </div>
        `;
    });

    alert(`Hospital "${hospitalName}" has been removed.`);

    // Clear input
    document.getElementById('hospitalToRemove').value = '';
});
// Remove Patient
document.getElementById('removePatient').addEventListener('click', () => {
    const healthCardNumber = document.getElementById('patientToRemove').value.trim();

    if (!healthCardNumber) {
        alert('Please enter the health card number of the patient to remove.');
        return;
    }

    const display = document.querySelector('.newPatient');
    const patientDivs = display.querySelectorAll('div');

    let patientFound = false;

    patientDivs.forEach(div => {
        const cardNumberText = div.querySelector('p:last-child').textContent;
        if (cardNumberText.includes(healthCardNumber)) {
            display.removeChild(div);
            patientFound = true;
        }
    });

    if (patientFound) {
        alert(`Patient with Health Card Number "${healthCardNumber}" has been removed.`);
    } else {
        alert(`Patient with Health Card Number "${healthCardNumber}" not found.`);
    }

    // Clear input
    document.getElementById('patientToRemove').value = '';
});