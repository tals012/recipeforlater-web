"use client";

import { useState } from "react";

import { api } from "@/trpc/react";

export function CreatePost() {
  const [name, setName] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isPending}
      >
        {createPost.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export function LatestPost() {
  const { data: post } = api.post.getLatest.useQuery();

  return (
    <div className="bg-white/10 p-4 rounded-xl">
      <h3 className="text-xl font-bold">Latest Recipe</h3>
      {post ? (
        <p>{post.name}</p>
      ) : (
        <p>No recipes added yet</p>
      )}
    </div>
  );
}
