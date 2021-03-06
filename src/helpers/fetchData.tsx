import axios from 'axios';
import { setProductsList, setTotalProducts } from '../reducers/products/productsSlice';

const data = [{
            "id": 1,
            "name": "Camiseta blanca",
            "color": "white",
            "size": "L",
            "price": 86000,
            "createdAt": "2021/01/22",
            "image": {
                "src": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0JTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Camiseta blanca"
            },
            "isOffer": false
        },
        {
            "id": 2,
            "name": "Camiseta negra",
            "color": "black",
            "size": "M",
            "price": 75000,
            "createdAt": "2021/05/05",
            "image": {
                "src": "https://images.unsplash.com/photo-1606115757624-6b9bfe9fa5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0JTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Camiseta negra"
            },
            "isOffer": true
        },
        {
            "id": 3,
            "name": "Camiseta roja",
            "color": "red",
            "size": "XL",
            "price": 45000,
            "createdAt": "2021/02/15",
            "image": {
                "src": "https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Camiseta roja"
            },
            "isOffer": true
        },
        {
            "id": 4,
            "name": "Camiseta verde",
            "color": "green",
            "size": "M",
            "price": 26000,
            "createdAt": "2021/06/26",
            "image": {
                "src": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Camiseta verde"
            },
            "isOffer": false
        },
        {
            "id": 5,
            "name": "Camiseta morada",
            "color": "purple",
            "size": "M",
            "price": 55000,
            "createdAt": "2021/09/20",
            "image": {
                "src": "https://images.unsplash.com/photo-1629483371146-63aa7e437b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Camiseta morada"
            },
            "isOffer": false
        },
        {
            "id": 6,
            "name": "Su??ter amarillo",
            "color": "yellow",
            "size": "XS",
            "price": 76000,
            "createdAt": "2021/07/22",
            "image": {
                "src": "https://images.unsplash.com/photo-1589728125279-527c67c9e829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Su??ter amarillo"
            },
            "isOffer": true
        },
        {
            "id": 7,
            "name": "Su??ter rojo",
            "color": "red",
            "size": "L",
            "price": 80000,
            "createdAt": "2021/07/12",
            "image": {
                "src": "https://images.unsplash.com/photo-1608355023471-c13d29ac8fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Su??ter rojo"
            },
            "isOffer": false
        },
        {
            "id": 8,
            "name": "Su??ter negro",
            "color": "black",
            "size": "S",
            "price": 85000,
            "createdAt": "2021/05/02",
            "image": {
                "src": "https://images.unsplash.com/photo-1516114679580-9b087a6012df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Su??ter negro"
            },
            "isOffer": false
        },
        {
            "id": 9,
            "name": "Su??ter verde",
            "color": "green",
            "size": "S",
            "price": 65000,
            "createdAt": "2021/02/22",
            "image": {
                "src": "https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Su??ter verde"
            },
            "isOffer": true
        },
        {
            "id": 10,
            "name": "Su??ter azul",
            "color": "blue",
            "size": "L",
            "price": 70000,
            "createdAt": "2021/10/03",
            "image": {
                "src": "https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Su??ter azul"
            },
            "isOffer": true
        },
        {
            "id": 11,
            "name": "Sudadera blanca",
            "color": "white",
            "size": "S",
            "price": 55000,
            "createdAt": "2021/10/10",
            "image": {
                "src": "https://images.unsplash.com/photo-1525818918160-9ceba31508da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Sudadera blanca"
            },
            "isOffer": false
        },
        {
            "id": 12,
            "name": "Sudadera negra",
            "color": "black",
            "size": "M",
            "price": 155000,
            "createdAt": "2021/10/17",
            "image": {
                "src": "https://images.unsplash.com/photo-1594587002961-1a75dfaf34b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Sudadera negra"
            },
            "isOffer": true
        },
        {
            "id": 13,
            "name": "Sudadera rosada",
            "color": "pink",
            "size": "M",
            "price": 259000,
            "createdAt": "2020/03/22",
            "image": {
                "src": "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Sudadera rosada"
            },
            "isOffer": true
        },
        {
            "id": 14,
            "name": "Sudadera gris",
            "color": "grey",
            "size": "S",
            "price": 69000,
            "createdAt": "2020/04/05",
            "image": {
                "src": "https://images.unsplash.com/photo-1594656375376-64d56e2f3ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Sudadera gris"
            },
            "isOffer": false
        },
        {
            "id": 15,
            "name": "Sudadera roja",
            "color": "red",
            "size": "L",
            "price": 361000,
            "createdAt": "2020/03/11",
            "image": {
                "src": "https://images.unsplash.com/photo-1625024573124-57a3efa69d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Sudadera roja"
            },
            "isOffer": true
        },
        {
            "id": 16,
            "name": "Jean azul",
            "color": "blue",
            "size": "M",
            "price": 100000,
            "createdAt": "2020/08/22",
            "image": {
                "src": "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Jean azul"
            },
            "isOffer": false
        },
        {
            "id": 17,
            "name": "Jean negro",
            "color": "black",
            "size": "L",
            "price": 99000,
            "createdAt": "2020/06/14",
            "image": {
                "src": "https://images.unsplash.com/photo-1517553844237-d51624c8dca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Jean negro"
            },
            "isOffer": true
        },
        {
            "id": 18,
            "name": "Chaqueta de jean",
            "color": "blue",
            "size": "S",
            "price": 85000,
            "createdAt": "2020/09/11",
            "image": {
                "src": "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Chaqueta de jean"
            },
            "isOffer": false
        },
        {
            "id": 19,
            "name": "Chaqueta verde",
            "color": "green",
            "size": "L",
            "price": 85000,
            "createdAt": "2020/12/24",
            "image": {
                "src": "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Chaqueta verde"
            },
            "isOffer": false
        },
        {
            "id": 20,
            "name": "Chaqueta negra",
            "color": "black",
            "size": "L",
            "price": 150000,
            "createdAt": "2020/11/22",
            "image": {
                "src": "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
                "alt": "Chaqueta negra"
            },
            "isOffer": true
        }
    ]


export const getData = (page: number, colors: string[], sizes: string[]) => (dispatch: Function) => {
    dispatch(setProductsList(data));
    dispatch(setTotalProducts(20));
    // const url =`http://localhost:3001/data?${colors.length > 0 ? `color=${colors.join('&color=')}&` : ''}${sizes.length > 0 ? `size=${sizes.join('&size=')}&` : ''}_page=${page}&_limit=6`;
    // axios.get(url)
    //     .then((response) => {
    //         dispatch(setProductsList(response.data));
    //         dispatch(setTotalProducts(Number(response.headers["x-total-count"])));
    //     })
    //     .catch((error) => console.error(error));
}