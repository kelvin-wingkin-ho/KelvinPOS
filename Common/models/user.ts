// no longer used
export interface User {
    id: number;
    username: string;
    email: string;
    password_hash: string;
    created_at: Date | null;
    is_active: boolean | null;
}
