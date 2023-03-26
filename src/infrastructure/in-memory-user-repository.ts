import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

const users: User[] = [
  {
    id: "1",
    email: "julio.aguilar@gmail.com",
  },
  {
    id: "2",
    email: "test.@gmail.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getUserById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
