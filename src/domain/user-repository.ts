import { User } from "./user";

export interface UserRepository {
  getUserById(userId: string): Promise<User | null>;
}
