import { Globe2Icon } from "lucide-react";

export function BrandLogo() {
  return (
    <div className='flex items-center gap-2 font-semibold flex-shrink-0  text-lg'>
      <Globe2Icon className='size-8' />
      <span>DealShare</span>
    </div>
  );
}
