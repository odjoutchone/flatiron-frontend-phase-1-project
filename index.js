console.log("index.js connected")

const handleFormInputFocus = () => {
    console.log('focus accurred')
};

const searchTermsInput = document.body.querySelector("#search-terms")
searchTermsInput.addEventListener("focus", handleFormInputFocus);
