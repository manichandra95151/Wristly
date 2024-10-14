import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelector } from '../../redux/reducer';

export const useUserForm = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(userSelector).userDetails;
  const [isEditing, setIsEditing] = useState(!userDetails.firstName); // Initial edit state based on userDetails

  useEffect(() => {
    setIsEditing(!userDetails.firstName);  // Set isEditing if userDetails is empty
  }, [userDetails]);

  const updateUserDetails = (formData) => {
    dispatch(userActions.updateUserDetails(formData));
  };

  return { isEditing, setIsEditing, updateUserDetails, userDetails };
};
