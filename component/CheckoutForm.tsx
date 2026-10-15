"use client";

import { useState } from "react";

export default function CheckoutForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [dishId, setDishId] = useState("");
    const [quantity, setQuantity] = useState(1);


    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:3000/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    address,
                    dishId: Number(dishId),
                    quantity,
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(data?.message || "Failed to place order.");
            }

            setMessage("Order placed successfully!");

            setName("");
            setPhone("");
            setAddress("");
            setDishId("");
            setQuantity(1);

        } catch (error) {
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
                id="phone"
                type="tel"
                pattern="(09[0-9]{8}|\+251[0-9]{9})"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />

            <label htmlFor="address">Delivery Address</label>
            <textarea
                id="address"
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />

            <label htmlFor="dishId">Dish ID</label>
            <input
                id="dishId"
                value={dishId}
                onChange={(e) => setDishId(e.target.value)}
                required
            />

            <label htmlFor="quantity">Quantity</label>
            <input
                id="quantity"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
            />

            <button type="submit">Place Order</button>
            {message && (
                <p
                    role="status"
                    style={{
                        color: message.startsWith("Order placed successfully")
                            ? "green"
                            : "red",
                        marginTop: "12px",
                    }}
                >
                    {message}
                </p>
            )}
        </form>
    );
}