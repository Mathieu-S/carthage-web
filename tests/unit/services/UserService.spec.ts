import { UserService } from "@/libs/services/UserService";
import { User } from "@/libs/models/User";

describe("UserService.ts", () => {
  let users: Array<User> = [
    { id: 1, name: "Bob", username: "Bobby", email: "bob@test.org" },
    { id: 2, name: "Ami", username: "Zoe", email: "ami@test.org" },
    { id: 3, name: "Marc", username: "Marker", email: "marc@test.org" },
    { id: 4, name: "Sam", username: "Sammy", email: "sam@test.org" }
  ];

  const newUser: User = { id: 5, name: "Rin", username: "Kiana", email: "rin@test.org" };

  it("getById", () => {
    // Act
    const result = UserService.getById(users, 1);

    // Assert
    expect(result).toEqual(users[0]);
  });

  it("getByName", () => {
    // Act
    const result = UserService.getByName(users, "Marc");

    // Assert
    expect(result).toEqual(users[2]);
  });

  it("getByEmail", () => {
    // Act
    const result = UserService.getByEmail(users, "ami@test.org");

    // Assert
    expect(result).toEqual(users[1]);
  });

  it("addUser", () => {
    // Act
    const result = UserService.addUser(users, newUser);

    // Assert
    expect(result).toHaveLength(5);
    expect(result).toContain(newUser);
  });

  it("removeUserById", () => {
    // Act
    const result = UserService.removeUserById(users, 5);

    // Assert
    expect(result).toHaveLength(4);
    expect(result).not.toContain(newUser);
  });

  // it("editUser", () => {
  //   // Arrange
  //   newUser.id = 1;
  //  
  //   // Act
  //   const result = UserService.editUser(users, 1, newUser);
  //
  //   // Assert
  //   expect(result).toEqual(users[0].name == newUser.name);
  // });
});
