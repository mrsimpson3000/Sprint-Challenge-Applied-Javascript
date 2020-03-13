// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardEntryPoint = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // console.log(response);
    // console.log(response.data.articles);
    // const newTopic = response.data.articles;
    const newTopic = Object.entries(response.data.articles);
    // console.log(newTopic);
    newTopic.forEach(topic => {
      // console.log(topic); // An array containing the topic name and another array
      // console.log(topic[0]); // Topic Name
      // console.log(topic[1]); // An Array of data
      topic[1].forEach(item => {
        // console.log(item);
        // console.log(item.headline);
        // console.log(item.authorPhoto);
        // console.log(item.authorName);

        function NewCard(data) {
          const newCard = document.createElement('div'),
            newHeadline = document.createElement('div'),
            newAuthor = document.createElement('div'),
            newImgContainer = document.createElement('div'),
            newImg = document.createElement('img'),
            newAuthorsName = document.createElement('span');
          newCard.classList.add("card");
          newHeadline.classList.add("headline");
          newAuthor.classList.add("author");
          newImgContainer.classList.add("img-container");
          newImg.src = data.authorPhoto;
          newHeadline.textContent = data.headline;
          newAuthorsName.textContent = `By ${data.authorName}`
          newImgContainer.append(newImg);
          newAuthor.append(newImgContainer, newAuthorsName);
          newCard.append(newHeadline, newAuthor);

          return newCard;
        }
        cardEntryPoint.append(NewCard(item));

      })
    })
  })
  .catch(error => {
    console.log("the data was not returned", error);
  })