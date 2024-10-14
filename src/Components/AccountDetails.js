import React from 'react';
import { useValidationForm } from '../utils/validation/userValidation';
import { useUserForm } from '../utils/Hooks/userForm';

export default function UserDetailsForm() {
  const { isEditing, setIsEditing, updateUserDetails, userDetails } = useUserForm();

  const validate = (data) => {
    const newErrors = {};
    if (data.firstName.length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (data.lastName.length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Please enter a valid email address.";
    if (!/^\+?[1-9]\d{1,14}$/.test(data.phoneNumber)) newErrors.phoneNumber = "Please enter a valid phone number.";
    if (data.address.length < 5) newErrors.address = "Address must be at least 10 characters.";
    if (data.city.length < 2) newErrors.city = "City must be at least 2 characters.";
    if (data.country.length < 2) newErrors.country = "Country must be at least 2 characters.";
    if (data.postalCode.length < 3) newErrors.postalCode = "Postal code must be at least 3 characters.";
    return newErrors;
  };

  const { formData, errors, handleChange, validateForm } = useValidationForm(userDetails, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      updateUserDetails(formData); // Update user details through Redux action
      setIsEditing(false);         // Disable editing mode
      alert("User details updated successfully!");
    }
  };

  


  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className="block w-full border rounded px-2 py-1"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className="block w-full border rounded px-2 py-1"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="block w-full border rounded px-2 py-1"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={!isEditing}
            className="block w-full border rounded px-2 py-1"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>
        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
            className="block w-full border rounded px-2 py-1"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!isEditing}
              className="block w-full border rounded px-2 py-1"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div>
            <label>Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled={!isEditing}
              className="block w-full border rounded px-2 py-1"
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>
          <div>
            <label>Postal Code</label>
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              disabled={!isEditing}
              className="block w-full border rounded px-2 py-1"
            />
            {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          {!isEditing ? (
            <button type="button" onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
              Edit Details
            </button>
          ) : (
            <>
              <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-500 text-white rounded">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                Save Changes
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}












