"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.actions";
import { Input } from "../ui/input";
import Image from "next/image";

type CommentProps = {
  threadId: string;
  currentUserImage: string;
  currentUserId: string;
};

const Comment = ({
  threadId,
  currentUserImage,
  currentUserId,
}: CommentProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      comment: "",
      accountId: currentUserId,
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.comment,
      JSON.parse(currentUserId),
      pathname
    );
    form.reset();
  };

  return (
    <div>
      <h1>comment</h1>
      <Form {...form}>
        <form className="comment-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="flex flex-row gap-4 w-full items-center">
                <FormLabel>
                  <Image
                    src={currentUserImage}
                    alt="Profile image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </FormLabel>
                <FormControl className="border-none bg-transparent">
                  <Input
                    type="text"
                    placeholder="comment"
                    className="no-focus text-light-1 outline-none bg-slate-600 w-full p-3 rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="comment-form_btn whitespace-nowrap">
            Post comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Comment;
