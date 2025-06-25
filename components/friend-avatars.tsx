import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  rating: number;
}

interface FriendAvatarsProps {
  friends: Friend[];
  maxDisplay?: number;
}

// Remote headshots mapped by friend ID
const HEADSHOT_URLS: Record<string, string> = {
  "1": "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
  "2": "https://www.shutterstock.com/image-photo/closeup-headshot-face-portrait-beautiful-600nw-2491646077.jpg",
  "3": "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?cs=srgb&dl=pexels-olly-3777943.jpg&fm=jpg",
  "4": "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
  "5": "https://t3.ftcdn.net/jpg/03/17/51/34/360_F_317513493_jZccvnt4pDqSsQbESat201rgVKpSRUH0.jpg",
  "6": "https://media.istockphoto.com/id/1208414307/photo/happy-male-executive-in-office.jpg?s=612x612&w=0&k=20&c=3krD8gIdPmHFVwbcHGyQDXUGlcyzmcWQNyRMRp_93P8=",
};

export function FriendAvatars({ friends, maxDisplay = 5 }: FriendAvatarsProps) {
  const displayFriends = friends.slice(0, maxDisplay);
  const remaining = friends.length - maxDisplay;

  return (
    <div className="flex -space-x-2 overflow-hidden">
      <TooltipProvider>
        {displayFriends.map((friend) => (
          <Tooltip key={friend.id}>
            <TooltipTrigger asChild>
              <Link href={`/profile/${friend.id}`}>
                <Avatar className="h-6 w-6 border-2 border-white hover:z-10 transition-transform hover:scale-110">
                  <AvatarImage
                    src={
                      friend.avatar && friend.avatar !== "/placeholder-user.jpg"
                        ? friend.avatar
                        : HEADSHOT_URLS[friend.id] || "/placeholder-user.jpg"
                    }
                    alt={friend.name}
                  />
                  <AvatarFallback className="text-xs">
                    {friend.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p className="text-sm font-medium">{friend.name}</p>
              <p className="text-xs text-muted-foreground">
                Rated {friend.rating}/5
              </p>
            </TooltipContent>
          </Tooltip>
        ))}

        {remaining > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="h-6 w-6 border-2 border-white bg-gray-200 hover:z-10 transition-transform hover:scale-110">
                <AvatarFallback className="text-xs bg-gray-200 text-gray-600">
                  +{remaining}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p className="text-sm">{remaining} more friends tried this</p>
            </TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
}
