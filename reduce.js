
const shoppingCart=[
    {
        'course':"HTML",
        "price" :1000
    },
    {
        'course':"CSS",
        "price" :2000
    },
    {
        'course':"JS",
        "price" :3000
    },
    {
        'course':"REACT",
        "price" :5000
    }
]
const totalPrice=shoppingCart.reduce((acc,currentValue) =>{
    return acc+currentValue.price;

},0)

console.log(totalPrice);