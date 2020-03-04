interface User {
   name: string;
}

interface Product {
    id: string;
    price: string;
}

class Cart {
    protected user: User;
    private store: object;
    constructor(user: User) {
        this.user = user;
        this.store = {};
    }
    public put(id: string, project: Product){
        this.store[id] = project;
    }
    private get(id: string){
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        // this.user
    }
}

const cart1 = new Cart({ name: 'john'});

const cart2 = new Cart({ name: 'jay'});

const cart3 = new PromotionCart({name : 'kk'});

cart3.addPromotion();