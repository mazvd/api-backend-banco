const supertest = require("supertest");
const app = require("../app"); 
const request = supertest(app);

let id = null;

describe("API de Musicas", () => {
  test('Deve retornar 201 e um JSON no POST /musicas', async () => {
    const response = await request.post('/musicas').send({
      titulo: "eternal sunshine",
      album: "eternal sunshine",
      artista: "ariana grande"
    });
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    console.log(response.body);
  });

  test("Deve retornar 422 e um JSON no POST /musicas", async () => {
    const response = await request.post("/musicas").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um array no GET /musicas", async () => {
    const response = await request.get("/musicas");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });

  test("Deve retornar 200 e um JSON no GET /musicas/:id", async () => {
    const response = await request.get(`/musicas/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no GET /musicas/:id", async () => {
    const response = await request.get("/musicas/xx");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON no PUT /musicas/:id", async () => {
    const response = await request.put(`/musicas/${id}`).send({
      titulo: "Musica Atualizada",
      album: "Album Atualizado",
      artista: "Artista Atualizado"
    });
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no PUT /musicas/:id", async () => {
    const response = await request.put("/musicas/xx").send({
      titulo: "Musica Atualizada",
      album: "Album Atualizado",
      artista: "Artista Atualizado"
    });
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON no PUT /musicas/:id", async () => {
    const response = await request.put(`/musicas/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 204 e sem corpo no DELETE /musicas/:id", async () => {
    const response = await request.delete(`/musicas/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
  });

  test("Deve retornar 404 e um JSON no DELETE /musicas/:id", async () => {
    const response = await request.delete(`/musicas/${id}`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });
});
