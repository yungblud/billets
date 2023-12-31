import { type FastifyPluginCallback } from "fastify";
import { type GenerateTokenBody, type GenerateTokenReply } from "./types";
import { handleGenerateToken } from "./handlers";

const authRoutes: FastifyPluginCallback = (instance, opts, done) => {
  instance.route<{
    Body: GenerateTokenBody;
    Reply: GenerateTokenReply;
  }>({
    method: ["POST"],
    url: "/token",
    handler: handleGenerateToken,
    schema: {
      description: "create auth token (login)",
      tags: ["auth"],
      summary: "create auth token (login)",
      body: {
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      response: {
        201: {
          $ref: "AuthTokenWithRefreshToken",
          description: "Successful response",
        },
      },
    },
  });
  done();
};

export default authRoutes;
