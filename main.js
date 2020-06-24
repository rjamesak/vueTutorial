Vue.component('product', {
    template: `
        <div class="product">

            <div class="product-image">
                <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1>{{title}}</h1>
                <p>{{description}}</p>
                <p v-show="inventory > 0">In Stock</p>
                <p v-show="inventory == 0">Out of Stock</p>
                <p :class="{struckThrough: !onSale}">On Sale!</p>
                <p>Available: {{variants[selectedVariant].inventory}}</p>

                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>

                <h4>Colors:</h4>
                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index), toggleOnSale()">
                </div>

                <h4>Available sizes:</h4>
                <ul>
                    <li v-for="size in sizes" :key="size">{{size}}</li>
                </ul>

                <button v-on:click="addToCart" 
                        :disabled="!inventory"
                        :class="{disabledButton: !inventory}">Add to Cart</button>
                <button @click="removeFromCart">Remove from Cart</button>

                <div class="cart">
                    <p>Cart({{variants[selectedVariant].inCart}})</p>
                </div>

            </div>

            <a :href="link">External link</a>

            
        </div> 
    `,
   data() {
       return {
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
                inventory: 10,
                inCart: 0
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: './assets/vmSocks-blue.jpg',
                inventory: 4,
                inCart: 0
            }
        ],
        sizes: ["small", "medium", "large", "x-large"], 
        cart: 0
    }
   }, //end data
    methods: {
        addToCart: function ()  {
            this.variants[this.selectedVariant].inCart += 1;
            this.variants[this.selectedVariant].inventory--;
            this.toggleOnSale();
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            console.log(index);
            console.log(this.variants[this.selectedVariant].variantImage);
        },
        removeFromCart() {
            if (this.variants[this.selectedVariant].inCart > 0) {
                this.variants[this.selectedVariant].inCart -= 1;
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

var app = new Vue({  //new Vue instance plugs into an element in the DOM
    el: "#app", //html div has id "app"

})