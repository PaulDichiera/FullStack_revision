export type User = {
    id: string;
    email: string;
    username: string;
    password: string;
};

export const SAVED_USERS: User[] = [
    { id: "1", email: "fuzzy01@gmail.com", username: "Freddy", password: "passfred01"},
    { id: "2", email: "fluffy02@gmail.com", username: "Kirby", password: "Kirdbypass22"},
];