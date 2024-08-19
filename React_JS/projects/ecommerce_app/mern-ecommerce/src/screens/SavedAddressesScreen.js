import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listSavedAddresses,
  addNewAddress,
  deleteAddress,
} from "../redux/actions/addressActions";

const SavedAddressesScreen = () => {
  const dispatch = useDispatch();
  const { addresses, loading, error } = useSelector(
    (state) => state.addressList
  );
  const [newAddress, setNewAddress] = useState({
    houseNumber: "",
    name: "",
    phoneNumber: "",
    pinCode: "",
    landmark: "",
    city: "",
    state: "",
    type: "",
  });

  useEffect(() => {
    dispatch(listSavedAddresses());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddAddress = () => {
    dispatch(addNewAddress(newAddress));
    setNewAddress({
      houseNumber: "",
      name: "",
      phoneNumber: "",
      pinCode: "",
      landmark: "",
      city: "",
      state: "",
      type: "",
    });
  };

  const handleDeleteAddress = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Saved Addresses</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div>
          <ul>
            {addresses.map((address) => (
              <li key={address._id} className="mb-4 border-b pb-4">
                <div className="text-lg font-semibold">{address.name}</div>
                <div>
                  {address.houseNumber}, {address.landmark}, {address.city},{" "}
                  {address.state}, {address.pinCode}
                </div>
                <div>Phone: {address.phoneNumber}</div>
                <div>Type: {address.type}</div>
                <button
                  onClick={() => handleDeleteAddress(address._id)}
                  className="text-red-500 mt-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Add New Address</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newAddress.name}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="houseNumber"
              placeholder="House Number"
              value={newAddress.houseNumber}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={newAddress.phoneNumber}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="pinCode"
              placeholder="PIN Code"
              value={newAddress.pinCode}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              value={newAddress.landmark}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={newAddress.city}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={newAddress.state}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              name="type"
              placeholder="Address Type (Home, Work, etc.)"
              value={newAddress.type}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            />
            <button
              onClick={handleAddAddress}
              className="bg-indigo-600 text-white py-2 px-4 rounded"
            >
              Add Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedAddressesScreen;
