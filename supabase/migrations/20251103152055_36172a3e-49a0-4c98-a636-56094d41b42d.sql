-- Crear tabla para comentarios
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_id TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT comment_text_length CHECK (char_length(comment_text) <= 1000),
  CONSTRAINT author_name_length CHECK (char_length(author_name) <= 100)
);

-- Crear índice para búsquedas eficientes por artículo
CREATE INDEX idx_comments_article_id ON public.comments(article_id);
CREATE INDEX idx_comments_created_at ON public.comments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Política para que cualquiera pueda leer comentarios
CREATE POLICY "Anyone can read comments" 
ON public.comments 
FOR SELECT 
USING (true);

-- Política para que cualquiera pueda crear comentarios (sin necesidad de estar autenticado)
CREATE POLICY "Anyone can create comments" 
ON public.comments 
FOR INSERT 
WITH CHECK (true);