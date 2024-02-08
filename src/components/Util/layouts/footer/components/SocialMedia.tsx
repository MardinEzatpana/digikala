import React from "react";
import InstagramIcon from "@/components/Util/ui/icons/InstagramIcon";
import TwitterIcon from "@/components/Util/ui/icons/TwitterIcon";
import LinkedinIcon from "@/components/Util/ui/icons/LinkedinIcon";
import YoutubeIcon from "@/components/Util/ui/icons/YoutubeIcon";
const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl">همراه ما باشید!</p>
      <div className="flex gap-6">
        <InstagramIcon classes="h-12 w-12 fill-dark_5 cursor-pointer" />
        <TwitterIcon classes="h-12 w-12 fill-dark_5 cursor-pointer" />
        <LinkedinIcon classes="h-12 w-12 fill-dark_5 cursor-pointer" />
        <YoutubeIcon classes="h-12 w-12 fill-dark_5 cursor-pointer" />
      </div>
    </div>
  );
};

export default SocialMedia;
