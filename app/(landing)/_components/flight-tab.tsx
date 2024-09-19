import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

import takeoff from "@/app/static/take-off.svg";
import change from "@/app/static/change.svg";
import landing from "@/app/static/landing.svg";
import chevronDown from "@/app/static/chevron-down.svg";
import { DateRangePicker } from "./date-range-picker";
import { TravellersSelect } from "./travellers-select";

import { AirPortPicker } from "./airport-picker";
import { Button } from "@/components/ui/button";
import { Controller, useFormContext } from "react-hook-form";
import { FilterSchema } from "@/app/(landing)/_form";

export function FlightsTab() {
    const form = useFormContext<FilterSchema>();

    const swapAirport = () => {
        const flyingTo = form.getValues("fyingTo");
        const flyingFrom = form.getValues("flyingFrom");
        const config = {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        };

        form.setValue("flyingFrom", flyingTo, config);
        form.setValue("fyingTo", flyingFrom, config);
    };

    const { isDirty, isValid } = form.formState;

    const isDisabled = !isValid || !isDirty;

    const onSearch = form.handleSubmit((data) => {
        console.log("🚀 ~ onSearch ~ data:", data);
    });

    return (
        <div className="flex items-stretch overflow-hidden h-full pl-3">
            <div className="pr-9 flex flex-col">
                <div className="border-b border-b-black pb-2 flex items-center">
                    <Controller
                        control={form.control}
                        name="flyingFrom"
                        render={({ field: { value, onChange } }) => (
                            <AirPortPicker
                                title="Flying From"
                                icon={takeoff}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />

                    <div className="relative">
                        <Separator
                            orientation="vertical"
                            className="bg-black w-[0.3px] h-16 mr-9"
                        />
                        <Button
                            className="p-0 bg-white border border-primary rounded-full absolute size-8 top-[25%] -left-[50%] translate-x-[5%] hover:bg-primary"
                            onClick={swapAirport}
                        >
                            <Image src={change} alt="change-icon" />
                        </Button>
                    </div>

                    <Controller
                        control={form.control}
                        name="fyingTo"
                        render={({ field: { value, onChange } }) => (
                            <AirPortPicker
                                value={value}
                                onChange={onChange}
                                title="Fying To"
                                icon={landing}
                            />
                        )}
                    />

                    <Separator
                        orientation="vertical"
                        className="bg-black w-[0.3px] h-16 mr-9"
                    />

                    <Controller
                        control={form.control}
                        name="date"
                        render={({ field: { onChange, value } }) => (
                            <DateRangePicker onChange={onChange} value={value} />
                        )}
                    />

                    <Separator
                        orientation="vertical"
                        className="bg-black w-[0.3px] h-16 mx-9"
                    />

                    <Controller
                        control={form.control}
                        name="traveller"
                        render={({ field: { value, onChange } }) => (
                            <TravellersSelect value={value} onChange={onChange} />
                        )}
                    />
                </div>
                <div className="flex items-center">
                    <Controller
                        control={form.control}
                        name="tripType"
                        render={({ field: { onChange, value } }) => (
                            <Selector
                                value={value}
                                onChange={onChange}
                                options={[
                                    {
                                        label: "Oneway",
                                        value: "oneway",
                                    },
                                    {
                                        label: "Round Trip",
                                        value: "round-trip",
                                    },
                                    {
                                        label: "Multi - City",
                                        value: "multi-city",
                                    },
                                ]}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="airline"
                        render={({ field: { onChange, value } }) => (
                            <Selector
                                value={value}
                                onChange={onChange}
                                options={[
                                    {
                                        label: "All Airlines",
                                        value: "all-airlines",
                                    },
                                    {
                                        label: "Easy Jet",
                                        value: "easy-jet",
                                    },
                                    {
                                        label: "Air India",
                                        value: "air-india",
                                    },
                                    {
                                        label: "Virgin",
                                        value: "virgin",
                                    },
                                ]}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="class"
                        render={({ field: { value, onChange } }) => (
                            <Selector
                                value={value}
                                onChange={onChange}
                                options={[
                                    {
                                        label: "Economy",
                                        value: "economy",
                                    },
                                    {
                                        label: "Premium Economy",
                                        value: "premium-economy",
                                    },
                                    {
                                        label: "Business",
                                        value: "business",
                                    },
                                    {
                                        label: "First Class",
                                        value: "first-class",
                                    },
                                    {
                                        value: "any",
                                        label: "Any",
                                    },
                                ]}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="directFlight"
                        render={({ field: { onChange, value } }) => (
                            <div className="flex items-center space-x-2 ml-3 mr-8">
                                <Checkbox
                                    checked={value}
                                    onCheckedChange={onChange}
                                    id="direct-fligts"
                                />
                                <label
                                    htmlFor="direct-fligts"
                                    className="font-[family-name:var(--font-lato-regular)] text-primary font-semibold text-[13px]"
                                >
                                    Direct Flight
                                </label>
                            </div>
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="flex"
                        render={({ field: { onChange, value } }) => (
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    checked={value}
                                    onCheckedChange={onChange}
                                    id="flex"
                                />
                                <label
                                    htmlFor="flex"
                                    className="font-[family-name:var(--font-lato-regular)] text-[13px] text-primary font-semibold"
                                >
                                    Flex (+/-3 days)
                                </label>
                            </div>
                        )}
                    />
                </div>
            </div>
            {/* */}
            <Button
                className="bg-primary w-[140px] h-full rounded-md rounded-tl-none rounded-bl-none"
                disabled={isDisabled}
                onClick={() => onSearch()}
            >
                <p className="font-[family-name:var(--font-lato-regular)] text-[20px] text-white font-semibold">
                    Search
                </p>
            </Button>
        </div>
    );
}

function Selector({
    options,
    onChange,
    value,
}: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="border-none shadow-none max-w-40" asChild>
                <div className="flex items-center gap-4 justify-between  w-full">
                    <p className="text-primary font-[family-name:var(--font-laton-regular)] text-[13px]">
                        {options.find((item) => item.value === value)?.label}
                    </p>
                    <Image src={chevronDown} alt="chevron-down" />
                </div>
            </SelectTrigger>
            <SelectContent>
                {options.map((airline) => (
                    <SelectItem key={airline.value} value={airline.value}>
                        <div className="flex gap-2">
                            <p
                                className={`text-black font-[family-name:var(--font-laton-regular)] font-semibold text-[15px] ${value === airline.value ? "text-primary" : "text-black"
                                    }`}
                            >
                                {airline.label}
                            </p>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
