const productList = document.getElementById("products");
const filters = document.getElementsByClassName("filter__btn");

let product;
fetch("./js/products.json")
    .then(response => response.json())
    .then(data => {
        product = data;
        if(productList.classList.contains("highlight")){
            createList(data.filter(d => d.highlight == true));
            
        } else{
            createList(product);
        }
    });


document.addEventListener("click", (e) => {
    if(e.target && e.target.matches("button.card__btn")){
        console.log("hola");
    }

    if(e.target && e.target.matches("h4.filter__btn")){
        e.target.classList.contains("all") ? (createList(product), filterStyle(), e.target.classList.add("active")) : null;
        e.target.classList.contains("acc") ? (createList(product.filter(p => p.type == "acc")), filterStyle(), e.target.classList.add("active")) : null;
        e.target.classList.contains("sh") ? (createList(product.filter(p => p.type == "sh")), filterStyle(), e.target.classList.add("active")) : null;
        e.target.classList.contains("jb") ? (createList(product.filter(p => p.type == "jb")), filterStyle(), e.target.classList.add("active")) : null;
        e.target.classList.contains("vela") ? (createList(product.filter(p => p.type != "sh" && p.type != "jb" && p.type != "acc" && p.type != "kit")), filterStyle(), e.target.classList.add("active")) : null;
        e.target.classList.contains("kit") ? (createList(product.filter(p => p.type == "kit")), filterStyle(), e.target.classList.add("active")) : null;
        
    }
});

{/* <div class="card">
    <img class="card__img" src="./assets/acc__mango.jpg" alt="">
    <h2 class="card__title">Acondicionador de mango</h2>
    <h3 class="card__sub">Acondicionador sólido</h3>
    <button href="#" class="card__btn">
        <p>Comprar producto</p>
        <i class="fa-solid fa-bag-shopping"></i>
    </button>
</div> */}


// product = {title: x, sub: x, img: x}
const createCard = (product) => {
    const cont = document.createElement("div");
    cont.classList.add("card");
    const img = document.createElement("img");
    img.classList.add("card__img");
    img.setAttribute("src", product.img);
    const title = document.createElement("h2");
    title.classList.add("card__title");
    title.innerText = product.title;
    const sub = document.createElement("h3");
    sub.classList.add("card__sub");
    sub.innerText = product.sub;
    const button = document.createElement("button");
    button.setAttribute("href", "#");
    button.classList.add("card__btn");
    const p = document.createElement("p");
    p.innerText = "Comprar producto";
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-bag-shopping");
    button.appendChild(p);
    button.appendChild(icon);
    cont.append(img, title, sub, button);
    productList.appendChild(cont);
}

const createList = (products) => {
    productList.innerHTML = '';
    for(let p of products){
        createCard(p);
    }
}

const filterStyle = () => {
    for(let f of filters){
        if(f.classList.contains("active")){
            f.classList.remove("active");
        }
    }
}




