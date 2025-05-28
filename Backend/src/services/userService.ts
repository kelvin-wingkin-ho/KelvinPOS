import { User } from '../models/user';

export const getAllUsers = async (): Promise<User[]> => {
    return [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"}
    ]
}