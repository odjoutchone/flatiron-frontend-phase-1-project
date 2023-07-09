console.log("index.js connected");

// get search field input
const searchTermsInput = document.body.querySelector("#search-terms");

// fectch meal categories from themealdb Api
const getMealCategories = async () => {
    const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

    try{
        const response = await fetch(mealCategoriesApiURL);
        const data = await response.json();
        const categories = data.categories;
        console.log(`categories: `, categories);
        return categories;
    }   catch(error) {
        console.log(error);
        alert("Something went wrong, try again later");
    }
}

// render meal categories data to dom
const renderMealCategories = (mealCategoriesArray) => {
    console.log('renderMealCategories');
    console.table(mealCategoriesArray);
// find and select a UL with meal categories ID dom element to append my data into

// for each element in our meal categories array
  // create a wrapping element maybe <article> class of card
  // appendChild the article.card to select DOM element
  // display the category name, image and description
     // image
     // create an img element
        // set img src to category thumbnail url
        // give class of category thumbnail
        // give it a mobile friendly max width like 300px
        // appendChild the image to our card
     // name
        // create an h4 element
        // set h4 element textContent to be meal category name
        // appendChild the h4 to our card
    // description
        // create an p element
        // set p element textContent to be meal category description
        // appendChild the p to our card
}

// function to call when the form input is giving focus
const handleFormInputFocus = async () => {
    console.log('focus accurred');

    const mealCategoriesObj = await getMealCategories();
    renderMealCategories(mealCategoriesObj);
};

// add event listener to search term input
searchTermsInput.addEventListener("focus", handleFormInputFocus);
