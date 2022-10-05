/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters- count: amount of categories to return, limited to 100 at a time 
                    offset:  (offsets the starting id of categories returned. Useful in pagination.
                        offset the resuts of the request, return different categories)
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

// Write an async/await fetch() function to fetch 5 categories with *API parameters as parameter*
//to input manually when invoking function below 
async function getCategories(count, offset) {
    let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
    let data = await response.json()
//console log before we return
// console.log(getCategories)
return data
}

//
//Run a function to getClues that takes in an argument of always returning multiple of 100
function getClueHtml(clueValue) {
    return `<div class="my-category-clue" style="grid-row-start: ${clueValue / 100 + 1}">$${clueValue}</div>`
}

//A procedure to getCategoriesHtml that takes in argument of returning category title and getCluesHtml that always reteurns multiple of 100 
function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        ${getClueHtml(100)}
        ${getClueHtml(200)}
        ${getClueHtml(300)}
        ${getClueHtml(400)}
    `
}

// Upon calling the function
//Invoke the getCategories function the argument,
// .then run a function with the endpoint that displays enpoint data
getCategories(5).then(categories => {
//CONSOLE.LOG
	console.log(categories)

    //Place content inside of your desired element
// return endpoint as an array with the getCategory function.
    document.body.innerHTML = `<div class="screen">
        ${categories.map(getCategoryHtml).join('')}
    </div>`
})