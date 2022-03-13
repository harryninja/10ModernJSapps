eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);
}

function newTweet() {
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';


    const li = document.createElement('li');
    li.textContent = tweet;

    li.appendChild(removeBtn);
    tweetList.appendChild(li);
}