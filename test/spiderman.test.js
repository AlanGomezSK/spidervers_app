//Exportando la clasee
const spiderman = require("../app/spiderman")

describe("unit test for spiderman class", () => {
    test('use the method getinfo()', () => {
      
      const andrewGarfield = new spiderman ("Spiderman sony",31,"Andrew Garfield", 3,"Sony")
      const tomHolland = new spiderman("Spiderman Marvel", 25, "Tom Holland",5,"Disney")
      /*Esto es lo que se quiere obtener */
      expect(andrewGarfield.name).toBe("Spiderman sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.nOfMovies).toBe(3);
      expect(andrewGarfield.studio).toBe("Sony");

      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })