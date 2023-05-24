import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabaseClient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fetchAllBlogs()
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((error) => {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
}

// Fetch all blogs from the "posts" table
async function fetchAllBlogs() {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
