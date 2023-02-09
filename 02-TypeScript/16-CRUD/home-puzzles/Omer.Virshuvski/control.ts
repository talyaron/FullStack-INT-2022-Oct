const movies:Movie[] = []
try {
    if(!form) throw new Error("Form is empty");
    form.addEventListener('submit', (ev:any) => {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const category = ev.target.elements.category.value;
        const date = ev.target.elements.date.value;
        movies.push(new Movie(name,date,category))
        ev.target.reset()
        
        render(movies, output)
    })
} catch (error) {
    console.error(Error);
    
}

function render(movies:Movie[], output:HTMLElement) {
    try {
        if(!movies) throw new Error("array empty");
        output.innerHTML = ""
        const html = movies.map((mv) => {
            return `
            <div class="output__card">
                <h2>${mv.getName()}</h2>
                <h3>${mv.getCategory()}</h3>
                <p>${mv.getDate()}</p>
                <button onclick="deleteMovie(${mv.getId()})">Delete</button>
                <button onclick="editMovie(${mv.getId()})">Edit</button>
            </div>
            `
        })
        
        html.forEach((ele) => {
            output.innerHTML += ele
        })
    } catch (error) {
        console.error(Error);
        return ""
        
    }
}

function editMovie(id:number) {
    try {
        if(!movies) throw new Error("movies empty");
        const index = movies.findIndex((mv) => mv.getId() === id)
        if(index == -1) throw new Error("movie not found");
        output.innerHTML =`
        <form id="theEditForm">
            <input type="text" name="name" placeholder="Name of movie" required>
            <input type="text" name="category" placeholder="Category" required>
            <input type="date" name="date" required>
            <input type="submit" value="Submit">
        </form>
        `
        const form = document.getElementById("theEditForm")
        if(!form) throw new Error("form empty");
        
        form.addEventListener('submit', (ev:any) => {
            ev.preventDefault();
            const index = movies.findIndex((mv) => mv.getId() === id)
            if(id == -1) throw new Error("movie not found");
            const name = ev.target.elements.name.value;
            const category = ev.target.elements.category.value;
            const date = ev.target.elements.date.value;
            movies[index].setName(name)
            movies[index].setDate(date)
            movies[index].setCategory(category)
            ev.target.reset()
            render(movies, output)
        })

    } catch (error) {
        console.error(Error);
    }
}

function deleteMovie(id:number) {
    try {
        if(!movies) throw new Error("movies empty");
        const index = movies.findIndex((mv) => mv.getId() === id)
        if(id == -1) throw new Error("movie not found");
        movies.splice(index,1)
        render(movies, output)
        
    } catch (error) {
        console.error(Error);
        
    }
}




