import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tghtovqmkscbuoezwsqx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaHRvdnFta3NjYnVvZXp3c3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1NTExMTEsImV4cCI6MjAwMDEyNzExMX0.U25let1AYcQt21857zw2iSWxlAIQx_HfDY88tgx77XQ"
);
