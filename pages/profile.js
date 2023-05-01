import { useEffect, useState } from "react";
import toastr from "toastr";

function profile() {
    const [user, setUser] = useState(null);

    // Add pet state
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [petSize, setPetSize] = useState("");
    const [petAge, setPetAge] = useState("");

    // list of pets
    const [pets, setPets] = useState([]);

    // list of orders
    const [orders, setOrders] = useState([]);

    // show add pet form
    const [showAddPetForm, setShowAddPetForm] = useState(false);

    // add pet to database
    const addPet = async () => {
        // send post request to /api/pets
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                operation: "add",
                data: {
                    pet: {
                        name: petName,
                        type: petType,
                        breed: petBreed,
                        size: petSize,
                        age: petAge,
                        allergies: petAllergies,
                        diet: petDiet,
                        other_needs: petOtherNeeds,
                        user_id: user.id,
                    }
                },
            }),
        });

        // get response
        const data = await res.json();

        // if successful, show success message
        if (data.success) {
            toastr.success("Successfully added pet");
            setShowAddPetForm(false);
            getPets(user.id);
        }
        // if failed, show error message
        else {
            toastr.error("Failed to add pet");
        }
    };

    // get pets from database
    const getPets = async (user_id) => {
        // send get request to /api/pets
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                operation: "get",
                data: {
                    user_id: user_id,
                },
            }),
        });

        // get response
        const data = await res.json();

        // if successful, show success message
        if (data.success) {
            setPets(data.pets);
        }
        // if failed, show error message
        else {
            toastr.error("Failed to get pets");
        }
    };

    // delete pet from database
    const deletePet = async (pet_id) => {
        // send delete request to /api/pets
        const res = await fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                operation: "delete",
                data: {
                    pet_id: pet_id,
                },
            }),
        });

        // get response
        const data = await res.json();

        // if successful, show success message
        if (data.success) {
            toastr.success("Successfully deleted pet");
            getPets(user.id);
        }

        // if failed, show error message
        else {
            toastr.error("Failed to delete pet");
        }
    };

    // get orders from database
    const getOrders = async (user_id) => {
        // send get request to /api/orders
        const res = await fetch("/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                operation: "orders",
                user_id: user_id,
            }),
        });

        // get response
        const data = await res.json();

        // if successful, show success message
        if (data.success) {
            setOrders(data.orders);
        }
        // if failed, show error message
        else {
            toastr.error("Failed to get orders");
        }
    };

    // check if user is logged in, local storage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        // if user is logged in, show profile
        if (user) {
            setUser(user);

            // get pets
            getPets(user.id);

            // get orders
            getOrders(user.id);
        } else {
            // redirect to login page
            window.location.href = "/login";
        }
    }, []);

    // if user is logged in, show profile
    if (user) {
        return (
            <div style={{
                backgroundColor: "#adc178",
                minHeight: "100vh",
            }}>
                <div className='container'>
                    <div className='py-5 text-center text-light'>
                        <p className='display-4 font-weight-bold'>Welcome, {user.name}!</p>
                        <p className='lead'>
                            This is your profile page. You can view your information and update it here.
                        </p>
                        <a href="/wishlist" className='btn btn-light mt-3'>My Wishlist</a>
                    </div>
                    <div className="bg-light rounded-lg p-2 mt-5">
                        <h2 className=''>Order history</h2>
                        <div className='row'>
                            {/* if no orders */}
                            {orders.length === 0 && (
                                <div className='col-md-12 mx-auto'>
                                    <p className='lead'>You have no orders yet</p>
                                </div>
                            )}
                            {orders.map((order) => (
                                <div className='col-md-12' key={order._id}>
                                    <p>{new Date(order.date).toLocaleDateString()} - <a href="#">#{order._id}</a>&nbsp; - <span className="text-success">${order.totalPrice.toFixed(2)}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='py-5'></div>
                <div className='py-5'></div>
            </div>
        );
    }
}

export default profile;