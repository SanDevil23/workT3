import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  testing: publicProcedure.query((opts) => {
    return [{ value: "value1" }, { value: "value 2" }, { value: "value 3" }];
  }),
});
