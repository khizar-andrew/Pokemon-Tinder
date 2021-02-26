console.log('hi')


// POKEMON TINDER CAROUSEL PSEUDCODE
// POKEMON TINDER CAROUSEL PSEUDCODE

//Absolute bottom goals: Post 20 pokemon as posters to the page.

// Normal goals

// step 1
// Create a app object 

// Step 2
// Link API with key to a fetch request and store data in a variable

// Step 3
// In html create slide skeleton with divs and img tags

// Step 4
// Style title and buttons through css

// Step 5 
// Create a for each loop that appends each pokemon in the data variable onto a div slide 

// Step 6 
// Create event listeners on buttons that represent like or dislike. You will always see a  new pokemon but not see who you liked or disliked again in the main carousel.

// Step 7
// Display pokemkon stats below each card as it is displayed



// Stretch goals
// You can like or dislike a card and it either removes the card from the deck or places the like card in a new deck displayed below in another carousel.

// At the bottom there is a gallery of disliked cards.

// Add the pokemon bio as if it's a dating bio.



// API CODE SO FAR
// API CODE SO FAR
// API CODE SO FAR
// API CODE SO FAR


// FETCH
// FETCH

fetch('https://www.septastats.com/api/current/system/latest')
    .then(function (response) {

        return response.json();
    })
    .then(function (jsonResponse) {
        const route = jsonResponse.data[0].id;
        const nextStep = jsonResponse.data[0].nextstop;
        const startStation = jsonResponse.data[0].source;
        const endStation = jsonResponse.data[0].dest;

        const paragraphEl = document.querySelector('p')
        paragraphEl.textContent = ``

    })

    // NEW URL
    // NEW URL


    const url = new URL('https://www.septastats.com/api/current/system/latest')
    url.search = new URLSearchParams({
        apiKey: 12345,
        query: 'pizza',
    })


    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonResponse) {
            console.log(jsonResponse)
        });


        // FULL API GALLERY APP
        // FULL API GALLERY APP
        // FULL API GALLERY APP


    const galleryApp = {}

    galleryApp.apiUrl = "https://api.unsplash.com/photos?";
    galleryApp.apiKey = 'bcFaRbr1plzCYfQNgrrFZ5nVTVele6z2Y-nGexK5fh4';

    //Step 3 create a function that requests api info and logs it to the console

    galleryApp.getPhotos = () => {

        // use a URL constructor to specify the params we want to include in our API endpoint

        const url = new URL(galleryApp.apiUrl);
        url.search = new URLSearchParams({
            // pass in our API key as a parametre
            client_id: galleryApp.apiKey
        })

        // Step four use the fetch request

        fetch(url)
            .then((response) => {
                console.log(response);

                return response.json();
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);

                galleryApp.displayPhotos(jsonResponse);

            });
    }

    // Creat a method to display photos on the front end

    galleryApp.displayPhotos = (objectData) => {
        // Query the document and find the first UL. 
        const ul = document.querySelector('ul')


        // Take the data from the API and iterate through it
        // For each object in the array
        objectData.array.forEach(element => {

            const li = document.createElement('li')

            const image = document.createElement('img')

            image.src = objectData.url.regular
            image.alt = objectData.alt_description

            li.appendChild(image)

            ul.appendChild(li)


            // Create an li
            // Create an img element and fill out the alt and src attributes
            // attach the imhg to the li
            // attach the li to the UL
            // Call display photos inside of getPhotos

        });
    }

    galleryApp.init = () => {
        galleryApp.getPhotos();
    }

    galleryApp.init();



    // CAROUSEL CODE
    // CAROUSEL CODE
    // CAROUSEL CODE
    // CAROUSEL CODE

!(function (d) {

    //
    // VARIABLES
    //
    var itemClassName = "carousel__photo";
    items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

    //
    // FUNCTIONS
    //

    function setInitialClasses() {
        items[(totalItems - 1)].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    // Set up listeners on previous/next buttons
    function setEventListeners() {
        var next = document.getElementsByClassName('carousel__button--next')[0],
            prev = document.getElementsByClassName('carousel__button--prev')[0]; next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
        // addEventListener('click', function (){
        //     console.log('click')
        // })
    }

    // Next navigation handler
    function moveNext() {  // Check if moving
        if (!moving) {    // If it's the last slide, reset to 0, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }    // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Previous navigation handler
    function movePrev() {  // Check if moving
        if (!moving) {    // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Pause buttons if the carousel is in the process of moving
    function disableInteraction() {  // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)

        moving = true;  // setTimeout runs its function once after the given time
        setTimeout(function () {
            moving = false
        }, 500);
    }

    // Move carousel to a certain slide.
    function moveCarouselTo(slide) {  // Check if carousel is moving, if not, allow interaction
        if (!moving) {    // temporarily disable interactivity
            disableInteraction();    // Update the "old" adjacent slides with "new" ones
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;    // Test if carousel has more than three items
            if ((totalItems - 1) > 3) {      // Checks and updates if the new slides are out of bounds
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)) {
                    oldNext = 0;
                }      // Checks and updates if slide is at the beginning/end
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems - 1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }      // Now we've worked out where we are and where we're going, 
                // by adding/removing classes we'll trigger the transitions.      // Reset old next/prev elements to default classes
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;      // Add new classes
                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    // Initialize carousel.
    function initCarousel() {
        setInitialClasses();
        setEventListeners();  // Set moving to false so that the carousel becomes interactive
        moving = false;
    }

    //
    // make it rain
    //
    initCarousel();

}(document));
