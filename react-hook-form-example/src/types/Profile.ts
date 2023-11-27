interface Profile {
    username: string;
    about: string;
    image: any;
    coverImage: any;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    notifications: string[];
    pushNotifications: string;
}

export default Profile;