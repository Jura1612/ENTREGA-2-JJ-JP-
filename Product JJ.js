class Product {
    constructor(description, price, image, Sizes, Color, name) {
        this.description = description;
        this.price = price;
        this.image = image;
        this.Sizes = Sizes;
        this.Color = Color;
        this.name = name;
        this.isFavorited = false; 
    }

    toggleFavorite() {
        this.isFavorited = !this.isFavorited;
        return this.isFavorited;
    }

    htmlCard() {
        return `
            <div class="product">
                <img src="${this.image}" alt="Calzado">
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <p class="price">${this.price}</p>
                <button onclick="productSelected(${products.indexOf(this)})">Ver detalles</button>
                
                <!-- Icono de corazón -->
                <span class="favorite-icon" onclick="toggleFavorite(${products.indexOf(this)})" 
                      style="color: ${this.isFavorited ? 'orange' : 'gray'};">❤</span>
            </div>
        `;
    }
}
