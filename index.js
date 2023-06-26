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

const handleFormInputFocus = async () => {
    console.log('focus accurred')
    await getMealCategories();
};


searchTermsInput.addEventListener("focus", handleFormInputFocus);
