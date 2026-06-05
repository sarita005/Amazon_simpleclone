  function ScrollToTop() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

        
    }
function searchProduct() {
    let Product = document.querySelector(".search-input").value;
    if(Product === ""){
        alert("Please enter a product name");

    }
    else{
        alert("Searching for: " + Product);
    }
}