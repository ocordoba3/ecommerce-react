import { createSlice } from '@reduxjs/toolkit';

export interface Product {
    name: string,
    category: string,
    price: number,
    currency: string,
    image: {
        src: string,
        alt: string
    },
    bestseller: boolean,
    featured: boolean,
    details: any
    id?: number,
    dimmentions?: any
}

export interface ProductsState {
    products: Array<Product>,
    featuredProduct: Product | null,
    paginatedItems: Array<Product>
}

const initialState: ProductsState = {
    products: [{
        "id": 1,
        "name": "Dubai",
        "category": "cities",
        "price": 39.59,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Dubai"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 2,
        "name": "Something awesome",
        "category": "premium",
        "price": 77.90,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1624721857723-36d46155d230?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Something awesome"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 3,
        "name": "Balloon",
        "category": "landmarks",
        "price": 93.89,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1497531551184-06b252e1bee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Balloon"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 4,
        "name": "Man with a mask",
        "category": "people",
        "price": 100,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1569014870202-ca0c5e24e77b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Man with a mask"
        },
        "bestseller": true,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 5,
        "name": "Salento",
        "category": "cities",
        "price": 56.5,
        "currency": "USD",
        "dimmentions": {
            "width": 1020,
            "height": 1020
        },
        "image": {
            "src": "https://images.unsplash.com/photo-1570197820006-3e46f5ee01bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Salento"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 6,
        "name": "Barcelona",
        "category": "cities",
        "price": 112.3,
        "currency": "USD",
        "dimmentions": {
            "width": 1020,
            "height": 1020
        },
        "image": {
            "src": "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Barcelona"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 7,
        "name": "King Lion",
        "category": "landmarks",
        "price": 101,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            "alt": "King Lion"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 8,
        "name": "Red Bench",
        "category": "landmarks",
        "price": 3.89,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1529088509035-13832ff58046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Red Bench"
        },
        "bestseller": true,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 9,
        "name": "Laugh",
        "category": "people",
        "price": 74.90,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1570840934347-4dc56c98b8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Laugh"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 10,
        "name": "Juicy",
        "category": "food",
        "price": 93.89,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1621054143165-33e0e77558d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Juicy"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 11,
        "name": "Colorful",
        "category": "landmarks",
        "price": 86.3,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "alt": "Colorful"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 12,
        "name": "Cheat meal",
        "category": "food",
        "price": 101,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1597564684117-4765e2c77af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
            "alt": "Cheat meal"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 13,
        "name": "Architecture",
        "category": "landmarks",
        "price": 101,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Architecture"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 14,
        "name": "Sweet morning",
        "category": "food",
        "price": 175,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1611134912064-18540bfe8635?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
            "alt": "Sweet morning"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 15,
        "name": "Pizza time",
        "category": "food",
        "price": 52,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1607018244619-dab6235709dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
            "alt": "Pizza time"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 16,
        "name": "Small Godzilla",
        "category": "pets",
        "price": 75,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1610629651605-0b181ad69aab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
            "alt": "Small Godzilla"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 17,
        "name": "True love",
        "category": "people",
        "price": 600,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1469989011449-f7b46079781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
            "alt": "True love"
        },
        "bestseller": true,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 820,
                "height": 1520
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 18,
        "name": "Kitty",
        "category": "pets",
        "price": 150,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1620196244884-ff187fd4bf99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Kitty"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 2000,
                "height": 1700
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 19,
        "name": "The gang",
        "category": "pets",
        "price": 245,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "The gang"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 2000,
                "height": 1700
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    {
        "id": 20,
        "name": "Good friends",
        "category": "people",
        "price": 360,
        "currency": "USD",
        "image": {
            "src": "https://images.unsplash.com/photo-1489942986787-cded4ecf962e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80",
            "alt": "Good friends"
        },
        "bestseller": false,
        "featured": false,
        "details": {
            "dimmentions": {
                "width": 2000,
                "height": 1700
            },
            "size": 615000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    }
    ],
    featuredProduct: {
        "id": 6,
        "name": "Barcelona",
        "category": "cities",
        "price": 112.3,
        "currency": "USD",
        "dimmentions": {
            "width": 1020,
            "height": 1020
        },
        "image": {
            "src": "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
            "alt": "Barcelona"
        },
        "bestseller": false,
        "featured": true,
        "details": {
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "size": 15000,
            "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely"
        }
    },
    paginatedItems: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsList: (state, data: any) => {
            state.products = [...data.payload]
        },
        setFeaturedProduct: (state, data: any) => {
            state.featuredProduct = data.payload
        },
        addPaginatedItems: (state, data: any) => {
            state.paginatedItems = [...data.payload]
        }
    },
})

export const { setProductsList, addPaginatedItems, setFeaturedProduct } = productsSlice.actions

export default productsSlice.reducer;