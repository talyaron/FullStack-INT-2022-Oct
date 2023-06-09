

// --------------------------- User Classes ------
class Customer {
    uid: string;
    orders: Order[] = [];
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public address: string,
        public creditCard?: string,
    ) {
        this.uid = `100${uid()}`
    }
}

class Restaurant {
    uid: string;
    menu: Course[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public address: string,
        public type: string,
        public BankAccount?: string,
        public imageUrl?: string,
    ) {
        this.uid = `200${uid()}`
    }
}

class Courier {
    uid: string;
    orders: Order[] = [];
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public area: string,
        public vehicle?: string,
        public age?: number,
        public BankAccount?: string,

    ) {
        this.uid = `300${uid()}`

    }
}

// --------------------------- non User Classes ------
class Course {
    uid: string;
    constructor(
        public name: string,
        public price: number,
        public description: string,
        public imageUrl?: string,
    ) {
        this.uid = `101${uid()}`
        // this.date = new Date();  // date right now

    }
}

class Order {
    uid: string;
    courses: Course[];


    constructor(
        public name: string,
        public restaurantId: String,
        public customerId: string,
        public courier?: Courier,
        public destination?: string,
        public status?: string,

    ) {
        this.uid = `201${uid()}`
        this.courses = [];
    }
    public sum(): number | undefined {
        try {
            const sum = this.courses.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0,) ?? 0; //if lefthand is null/undefined return 0
            return sum;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    public instanceCounter(): {} | undefined {
        try {
            const countedCourses = this.courses.reduce((allCourses, course) => {
                const currCount = allCourses[course.name] ?? 0;
                return {
                    ...allCourses,
                    [course.name]: currCount + 1,
                };
            }, {});
                return countedCourses;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}

// --------------------------- Array ------

const customers = getCustomersFromStorage();
const restaurants = getRestaurantsFromStorage();
const couriers = getCouriersFromStorage();
const orderPool = getInfoFromStorage("orderPool") as Order[];


// --------------------------- LocalStorage ------

function saveInLocalStorage(array: Customer[] | Restaurant[] | Courier[] | Order[] | Course[], name: string) {
    try {
        if (!array) throw new Error(`the ${array} no Found`)
        localStorage.setItem(name, JSON.stringify(array))
    } catch (error) {
        console.error(error);
        return []
    }
}

function getInfoFromStorage(arrayName: string): Customer[] | Restaurant[] | Courier[] | Order[] | Course[] | [] {
    try {
        const dataJson = localStorage.getItem(arrayName);
        if (!dataJson) throw new Error(`the ${arrayName} not found in localStorage`);
        const data = JSON.parse(dataJson) as Customer[] | Restaurant[] | Courier[] | Course[];
        return data;

    } catch (error) {
        console.error(error)
        return []
    }
}

function getInfoFromStorageType(): string {
    try {
        const data = localStorage.getItem("TypeUser");
        if (!data) throw new Error("no found TypeUser in localstorage")
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return "";
    }
}


function loggedInUser(): Customer | Restaurant | Courier | undefined {
    try {
        const data = localStorage.getItem("userCur");

        if (!data) throw new Error("the userEmail data  was not found in local storage");
        const getEmailFromUser = JSON.parse(data);
        const user: Customer | Restaurant | Courier = getEmailFromUser;

        if (!user) {
            throw new Error("could not find logged in user");
        } else {
            return user;
        }
    } catch (error) {
        console.error(error);
        return undefined
    }
}

function loggedInRestaurant(): Restaurant | undefined {
    try {
        const user = loggedInUser();
        if (!user) throw new Error("no user found");
        const restaurant = restaurants.find(rest => rest.uid === user.uid);
        console.log(restaurant)

        if (!restaurant) throw new Error("no restaurant found");
        return restaurant;


    } catch (error) {
        console.error(error);
        return undefined
    }
}

function loggedInCustomer(): Customer | undefined {
    try {
        const user = loggedInUser();
        if (!user) throw new Error("no user found");
        
        const customer = customers.find(cust =>cust.uid === user.uid);

        if (!customer) throw new Error("no customer found");
        return customer;

    } catch (error) {
        console.error(error);
        return undefined
    }
}
function loggedInCourier(): Courier | undefined {
    try {
        const user = loggedInUser();
        if (!user) throw new Error("no user found");
        const courier = couriers.find(cour => cour.uid === user.uid);

        if (!courier) throw new Error("no courier found");
        return courier;

    } catch (error) {
        console.error(error);
        return undefined
    }
}


function saveMenu(restaurantUid: string, menu: Course[]) { //saves the menu of the given restaurant to local storage
    try {
        const restaurant = restaurants.find(rest => rest.uid === restaurantUid);
        if (!restaurant) throw new Error("restaurant not found");
        restaurant.menu = menu;
        saveInLocalStorage(restaurants, "restaurants");
    } catch (error) {
        console.error(error);
    }
}

function getCustomersFromStorage():Customer[] {
    try {
        const dataJson = localStorage.getItem("customers");
        if (!dataJson) throw new Error(`the customers not found in localStorage`);
        const data = JSON.parse(dataJson) as Customer[] | Restaurant[] | Courier[] | Course[];
        console.log("data", data);
        const customers = data.map((customer)=>{

            const _customer =  new Customer(customer.name, customer.password, customer.email, customer.address);
            _customer.uid = customer.uid;
            console.log(_customer);
            _customer.orders = customer.orders.map(order=> new Order(order.name, order.restaurantId, order.customerId, undefined ,order.destination))
            console.log(_customer)
            return _customer;
        })

        return customers;
    } catch (error) {
        console.error(error)
        return []
    }
}

function getRestaurantsFromStorage():Restaurant[] {
    try {
        const dataJson = localStorage.getItem("restaurants");
        if (!dataJson) throw new Error(`the restaurants not found in localStorage`);
        const data = JSON.parse(dataJson) as Customer[] | Restaurant[] | Courier[] | Course[];
        console.log("data", data);
        const restaurants = data.map((restaurant)=>{

            const _restaurant =  new Restaurant(restaurant.name, restaurant.password, restaurant.email, restaurant.address, restaurant.type, undefined, restaurant.imageUrl);
            _restaurant.uid = restaurant.uid;
            _restaurant.menu = restaurant.menu;

            _restaurant.orders = restaurant.orders.map((order) => {
               const _order =  new Order(order.name, order.restaurantId, order.customerId, undefined, order.destination, order.status);
               _order.courses = order.courses;

               return _order;
            })

            console.log("_restaurant" ,_restaurant);
            return _restaurant;
        })

        return restaurants;
    } catch (error) {
        console.error(error)
        return []
    }
}

function getCouriersFromStorage():Courier[] {
    try {
        const dataJson = localStorage.getItem("couriers");
        if (!dataJson) throw new Error(`the couriers not found in localStorage`);
        const data = JSON.parse(dataJson) as Customer[] | Restaurant[] | Courier[] | Course[];
        console.log("data", data);
        const couriers = data.map((courier)=>{

            const _courier =  new Courier(courier.name, courier.password, courier.email, courier.area);
            _courier.uid = courier.uid;
            

            _courier.orders = courier.orders.map((order) => {
               const _order =  new Order(order.name, order.restaurantId, order.customerId, undefined, order.destination, order.status);
               _order.courses = order.courses;

               return _order;
            })

            return _courier;
        })

        return couriers;
    } catch (error) {
        console.error(error)
        return []
    }
}


// --------------------------- Others ------


let currentNumber = 0;

const clicked = false
function count(): void {
    const intervalId = setInterval(() => {
        currentNumber++;
        if (clicked) {
            clearInterval(intervalId);
            console.log(currentNumber); // return the sec after clicked
            return currentNumber
        }
    }, 1000);
}










