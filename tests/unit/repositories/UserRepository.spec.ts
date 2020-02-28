import axios from "axios";
import { UserRepository } from "@/libs/repositories/UserRepository";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UserRepository.ts", () => {
  it("get all users", async () => {
    // Arange
    const users = [
      { id: 1, name: "Bob" },
      { id: 2, name: "Marley" }
    ];
    const resp = { data: users };
    mockedAxios.get.mockResolvedValue(resp);
    const userRepository = new UserRepository();

    // Act
    const result = await userRepository.getAll();

    // Assert
    expect(result).toEqual(users);
    expect(result.length).toEqual(2);
  });

  it("get one user", async () => {
    // Arange
    const user = { id: 1, name: "Bob" };
    const resp = { data: user };
    mockedAxios.get.mockResolvedValue(resp);
    const userRepository = new UserRepository();

    // Act
    const result = await userRepository.get(1);

    // Assert
    expect(result).toEqual(user);
  });
});
