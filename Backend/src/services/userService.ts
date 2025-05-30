import { User } from '@pos/common';

export const getAllUsers = async (): Promise<User[]> => {
    return [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"}
    ]
}