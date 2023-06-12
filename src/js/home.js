import './general';
const regeneratorRuntime = require("regenerator-runtime");

class Home {
    constructor() {
        // API ACCESS INFORMATION
        this.EDAMAM_ID = "829d4216"
        this.EDAMAM_KEY = "cfc765761ada5166d7dd4df6921dff8c"

        // VARIABLE TO STORE PARSED FOOD ITEM INFORMATION
        this.foodItem = 
        {
            ingredients: 
            [{
                quantity: 1,
                measureURI: "",
                qualifiers: [],
                foodId: ""
            }]
        };

        this.$search = document.querySelector("#searchForm");
        this.$servingSize = document.querySelector("#serving-sizes");
        this.$servingsQuantity = document.querySelector("#servings-quantity");
        this.$itemDetails = document.querySelector("#details-area");

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.getSearchValue = this.getSearchValue.bind(this);
        this.addItem = this.addItem.bind(this);
        this.revealDetails = this.revealDetails.bind(this);

        this.$search.addEventListener("submit", this.onSearchSubmit);
        
        // this.$.addEventListener("addBtn", event => {
        //     this.addItem(event)
        // });

        this.$itemDetails.addEventListener("detailsBtn", event => {
            this.revealDetails(event)
        });
    }

    // METHODS-----------------------------------------------------
    onSearchSubmit(event)
    {
        // console.log("click");
        // event.preventDefault();
        // const searchValue = this.getSearchValue();
        // const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${this.EDAMAM_ID}&app_key=${this.EDAMAM_KEY}&ingr=${searchValue}&nutrition-type=logging`;
        // const options = {
        //     method: 'GET',
        //     headers: {  // I don't know what these do since it doesn't seem to matter if they are present or not
        //         'API-Key': 'cfc765761ada5166d7dd4df6921dff8c',
        //         'Host': 'http://localhost:8080/'
        //     }
        // };

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     this.foodItem.ingredients.foodId = result.parsed[0].food.foodId;
        //     console.log(this.foodItem.ingredients.foodId);
        //     console.log(result);
        // } catch (error) {
        //     console.error("trouble getting information");
        // }


        event.preventDefault();
        const searchValue = this.getSearchValue();
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${this.EDAMAM_ID}&app_key=${this.EDAMAM_KEY}&ingr=${searchValue}&nutrition-type=logging`)
        .then(response => response.json())
        .then(data => {
            console.log(data.hints[0]);

            // fetch(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${this.EDAMAM_ID}&app_key=${this.EDAMAM_KEY}`)
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data);
            // })
            // .catch(error => {
            //     alert('There was a problem getting nutrient information!')
            // });
        })
        .catch(error => {
            alert('There was a problem getting food item information!')
        });
    }

    getSearchValue()
    {
        return document.getElementById("search").value;
    }

    addItem()
    {

    }

    revealDetails()
    {

    }

}
window.onload = () => {new Home();}