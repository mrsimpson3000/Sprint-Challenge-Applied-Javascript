// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabEntryPoint = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    // console.log(response.data.topics);
    response.data.topics.forEach(item => {
      function NewTopic(item) {
        const newTab = document.createElement('div');
        newTab.classList.add("tab");
        newTab.textContent = item;

        return newTab
      }
      tabEntryPoint.append(NewTopic(item));
    })
  })
  .catch(error => {
    console.log("the data was not returned", error);
  })