import { EmailSender } from "../domain/email-sender";
import { UserRepository } from "../domain/user-repository";

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}
  async run(userId: string) {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new Error(`User ${userId} not found`);
    }
    await this.emailSender.send(user.email, "Welcome to our platform! :)");
  }
}
