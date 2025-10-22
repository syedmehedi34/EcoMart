import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.facebook.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.twitter.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.github.com",
    icon: <Twitter className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_btn_dark_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
