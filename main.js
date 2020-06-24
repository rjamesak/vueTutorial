var app = new Vue({  //new Vue instance plugs into an element in the DOM
    el: "#app", //html div has id "app"
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        description: "they warm your feet",
        //image: './assets/vmSocks-green.jpg',
        selectedVariant: 0,
        link: 'http://www.goldtoe.com',
        //inventory: 10,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: './assets/vmSocks-green.jpg',
                inventory: 10
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: './assets/vmSocks-blue.jpg',
                inventory: 0
            }
        ],
        sizes: ["small", "medium", "large", "x-large"], 
        cart: 0
    }, 
    methods: {
        addToCart: function ()  {
            this.cart += 1;
            this.variants[this.selectedVariant].inventory--;
            this.toggleOnSale();
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            console.log(index);
            console.log(this.variants[this.selectedVariant].variantImage);
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
                this.variants[this.selectedVariant].inventory++;
                this.toggleOnSale();
            }
        },
        toggleOnSale() {
            if (this.variants[this.selectedVariant].inventory <= 2) {
                this.onSale = false;
            }
            else {this.onSale = true;}
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inventory() {
            return this.variants[this.selectedVariant].inventory;
        }
    }

})