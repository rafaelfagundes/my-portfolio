"use client";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { Subtitle, Title } from "../typography";
import { Button } from "./button";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

function SectionHeader(props: SectionHeaderProps) {
  const router = useRouter();
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-col">
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </div>
      {props.buttonText && props.buttonLink && (
        <Button
          variant="secondary"
          className="text-sm"
          onClick={() => router.push(props.buttonLink!)}
        >
          {props.buttonText}
          <ArrowRight size={16} className="ml-1" />
        </Button>
      )}
    </div>
  );
}

export default SectionHeader;
