import {z, ZodType} from "zod";

export class PostValidation {
    static readonly CreatePost: ZodType = z.object({
        title: z.string().min(3).max(255),
        description: z.string().nullable(),
    });
}