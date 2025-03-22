fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
        const div = document.getElementById("id");
        json.forEach(doc => {
            div.innerHTML += `
                <div>
                    <h2>${doc.title}</h2>
                    <p>Category: ${doc.category}</p> 
                    <p>${doc.description}</p>
                    <p>Price: ${doc.price}</p>
                    <img src="${doc.image}" alt="${doc.title}" width="200">
                    <p>id: ${doc.id}</p> 
                    <p>Count: ${doc.rating.count}</p>
                    <p>Rate: ${doc.rating.rate}</p>
                </div>`;});});