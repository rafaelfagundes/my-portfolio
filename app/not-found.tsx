import { Headline, Title } from "@/components/typography";
import Avatar from "@/components/ui/avatar";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center pt-2">
      <Avatar
        url="/img/what.png"
        size={120}
        alt="Not Found Page Image"
      ></Avatar>
      <Headline className="text-red-400">404</Headline>
      <Title>Page Not Found</Title>
    </div>
  );
}

export default NotFound;
