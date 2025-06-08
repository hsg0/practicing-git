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