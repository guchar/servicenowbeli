import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share2, Star } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

interface SocialFeedProps {
  posts: {
    id: string;
    user: {
      name: string;
      avatar: string;
      department: string;
    };
    time: string;
    content: string;
    foodItem: {
      id: string;
      name: string;
      location: string;
      rating: number;
    };
    image?: string | StaticImageData;
    likes: number;
    comments: number;
  }[];
}

export function SocialFeed({ posts }: SocialFeedProps) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-4 pt-6">
            <div className="flex items-start gap-3 mb-4">
              <Avatar>
                <AvatarImage
                  src={post.user.avatar || "/placeholder.svg"}
                  alt={post.user.name}
                />
                <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{post.user.name}</h3>
                  <span className="text-xs text-muted-foreground">
                    • {post.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {post.user.department}
                </p>
              </div>
            </div>

            <p className="mb-3">{post.content}</p>

            <Link href={`/food/${post.foodItem.id}`} className="block mb-4">
              <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{post.foodItem.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {post.foodItem.location}
                  </p>
                </div>
                <div className="flex items-center bg-[#81b5a1]/10 px-2 py-1 rounded-md">
                  <Star className="h-4 w-4 text-[#81b5a1] mr-1 fill-[#81b5a1]" />
                  <span className="text-sm font-medium">
                    {post.foodItem.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </Link>

            {post.image && (
              <div className="relative h-64 rounded-md overflow-hidden mb-3">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Food"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="p-2 border-t flex justify-between">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <ThumbsUp className="h-4 w-4 mr-1" />
              Like ({post.likes})
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <MessageSquare className="h-4 w-4 mr-1" />
              Comment ({post.comments})
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
