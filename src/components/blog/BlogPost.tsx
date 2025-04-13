import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageSquare, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BlogPost() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);
  const { toast } = useToast();

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    if (!isLiked) {
      toast({
        title: "Post liked!",
        description: "This post has been added to your liked posts.",
      });
    }
  };

  const handleShare = () => {
    toast({
      title: "Link copied!",
      description: "Post link has been copied to your clipboard.",
    });
  };

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarImage src="/avatars/author.png" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">Author Name</p>
          <p className="text-sm text-gray-500">Posted on March 15, 2024</p>
        </div>
      </div>

      <div className="prose max-w-none mb-8">
        {/* Blog content here */}
      </div>

      <div className="flex space-x-4">
        <Button
          variant={isLiked ? "default" : "outline"}
          size="sm"
          onClick={handleLike}
        >
          <ThumbsUp className="h-4 w-4 mr-2" />
          {likes} Likes
        </Button>
        
        <Button variant="outline" size="sm">
          <MessageSquare className="h-4 w-4 mr-2" />
          Comments
        </Button>
        
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </article>
  );
}
