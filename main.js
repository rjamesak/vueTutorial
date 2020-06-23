var app = new Vue({  //new Vue instance plugs into an element in the DOM
    el: "#app", //html div has id "app"
    data: {
        product: "Socks",
        description: "they warm your feet",
        image: './assets/vmSocks-green.jpg',
        link: 'http://www.adn.com',
        inventory: 10,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ],
        sizes: ["small", "medium", "large", "x-large"], 
        cart: 0
    }, 
    methods: {
        addToCart: function ()  {
            this.cart += 1;
            this.inventory--;
        },
        updateProduct: function (variantImage) {
            this.image = variantImage;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
                this.inventory++;
            }
        }
    }
})