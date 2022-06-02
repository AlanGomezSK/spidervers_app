const spiderman = require("../app/spiderman")

describe("unit test for spiderman class", () => {
    test('Case 1 Create an spiderman object', () => {
      
      const andrewGarfield = new spiderman ("Spiderman sony",31,"Andrew Garfield", 3,"Sony")
      
      /*Esto es lo que se quiere obtener */
      expect(andrewGarfield.name).toBe("Spiderman sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.nOfMovies).toBe(3);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })