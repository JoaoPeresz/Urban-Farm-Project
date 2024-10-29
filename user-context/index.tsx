  import React, {createContext, ReactNode, useState} from 'react';

type UserData = {
    email: string,
    password: string,
    confirmPassword: string,
};

type UserContextType = {
    userData: UserData;
    updateUser: (data: Partial<UserData>) => void;
};

type UserProviderProps = {
    children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
    userData: {
        email: '',
        password: '',
        confirmPassword: '',
    },
    updateUser: () => {
    },
});

const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [userData, setUserData] = useState<UserData>({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const updateUser = (data: Partial<UserData>) => {
        setUserData((prevData) => ({...prevData, ...data}));
    };

    return (
        <UserContext.Provider value={{userData, updateUser}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;