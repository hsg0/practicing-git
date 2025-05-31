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
.addEventListener('click', secretMessage);

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

    
    
            
  
