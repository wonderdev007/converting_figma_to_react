import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Title } from "./title";
import airport from "@/app/static/airport.png";

export function AirPortPicker({
    title,
    icon,
    value,
    onChange
}: {
    title: string;
    icon: string | StaticImport;
    value: string,
    onChange: (value: string) => void
}) {
    const options = [
        {
            label: "BOM Mumbai",
            description: "Mumbabi Intl Airport, India",
            value: "mumbai",
        },
        {
            label: "BOM Mumbai 1",
            description: "Mumbabi Intl Airport, India 1",
            value: "mumbai 1",
        },
        {
            label: "BOM Mumbai 2",
            description: "Mumbabi Intl Airport, India 1",
            value: "mumbai 2",
        },
        {
            label: "BOM Mumbai 3",
            description: "Mumbabi Intl Airport, India 3",
            value: "mumbai 3",
        },
    ]

    return (
        <div className="bg-white flex items-center gap-x-2 w-[270px]">
            <Image src={icon} alt="take-off" />
            <div className="flex flex-col">
                <Title title={title} />
                <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-[180px] border-none p-0 h-full shadow-none">
                        <div className="flex flex-col gap-0">
                            <p className="font-[family-name:var(--font-lato-regular)] text-black text-[16px] font-medium text-left">
                                {options.find(option => option.value === value)?.label}
                            </p>
                            <p className="font-[family-name:var(--font-lato-regular)] text-[#575756] text-[12px] font-semibold">
                                {options.find(option => option.value === value)?.description}
                            </p>
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                <div className="flex gap-2">
                                    <Image src={airport} width={28} height={28} alt="airport" />
                                    <div className="flex flex-col">
                                        <span className="font-[family-name:var(--font-lato-regular)] text-black text-[15px] font-semibold">
                                            {item.label}
                                        </span>
                                        <span className="font-[family-name:var(--font-lato-regular)] text-[#737373] text-[13px] font-semibold">
                                            {item.description}
                                        </span>
                                    </div>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
