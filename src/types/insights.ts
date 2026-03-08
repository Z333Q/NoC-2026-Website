export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string | null;
  source_url: string;
  published_at: string;
  tags: string[];
  source?: string;
  read_time?: string;
  series_name?: string;
  series_order?: number;
  is_original?: boolean;
}
