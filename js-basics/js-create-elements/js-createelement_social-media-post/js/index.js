console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const postBox = document.createElement("section");

const postContent = document.createElement("p");
postContent.textContent = "Nah, i'd win.------------------";

const postFooter = document.createElement("footer");

const postUsername = document.createElement("span");
postUsername.textContent = "@Gojo";

const postLikeButton = document.createElement("button");
postLikeButton.textContent = "♥ Like";
postLikeButton.addEventListener("click", handleLikeButtonClick);

postBox.classList.add("post");
postContent.classList.add("post__content");
postFooter.classList.add("post__footer");
postUsername.classList.add("post__username");
postLikeButton.classList.add("post__button");

postBox.append(postContent, postFooter, postUsername, postLikeButton);

document.body.append(postBox);
