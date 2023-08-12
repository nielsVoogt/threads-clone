import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().min(3, { message: "MINIMUM 3 CHARACTERS" }).max(500),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  comment: z.string().min(3, { message: "MINIMUM 3 CHARACTERS" }).max(500),
  accountId: z.string(),
});
