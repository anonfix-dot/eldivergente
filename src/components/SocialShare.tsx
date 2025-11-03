import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, MessageCircle } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

export const SocialShare = ({ title, url }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className="flex flex-col gap-4 py-6 border-y border-border">
      <h3 className="font-heading text-lg font-bold">Compartir este artículo</h3>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.twitter, "_blank", "noopener,noreferrer")}
          className="gap-2"
        >
          <Twitter size={18} />
          Twitter
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.facebook, "_blank", "noopener,noreferrer")}
          className="gap-2"
        >
          <Facebook size={18} />
          Facebook
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.linkedin, "_blank", "noopener,noreferrer")}
          className="gap-2"
        >
          <Linkedin size={18} />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.whatsapp, "_blank", "noopener,noreferrer")}
          className="gap-2"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};
