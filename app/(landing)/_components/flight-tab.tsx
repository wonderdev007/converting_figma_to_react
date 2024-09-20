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

    // const { isDirty, isValid } = form.formState;

    // const isDisabled = !isValid || !isDirty;

    const onSearch = form.handleSubmit(
        (data) => {
            console.log("🚀 ~ onSearch ~ data:", data);
        },
        (error) => {
            console.log("🚀 ~ onSearch ~ error:", error);
        }
    );

    return (
        <div className="flex items-stretch overflow-hidden smTablet:flex-row flex-col h-full px-3 smTablet:px-0 smTablet:pl-3 smTablet:h-[107px]">
            <div className="pr-9 flex flex-col">
                <div className="border-b flex-col smTablet:flex-row border-b-black pb-1.5 flex items-start smTablet:items-center pt-3 smTablet:pt-0">
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
                            className="bg-black w-[0.3px] mt-2 smTablet:mt-0 smTablet:h-16 mr-9 "
                        />
                        <Button
                            className="p-0 bg-white border border-primary rounded-full absolute size-8 smTablet:top-[25%] smTablet:-left-[50%] smTablet:translate-x-[5%] hover:bg-primary flex -right-52 -top-2"
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
                        className="h-2 smTablet:bg-black w-[0.3px] smTablet:h-16 mx-4 smTablet:block"
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
                        className="bg-black w-[0.3px]  mx-9 h-0 tablet:h-16"
                    />

                    <Controller
                        control={form.control}
                        name="traveller"
                        render={({ field: { value, onChange } }) => (
                            <TravellersSelect value={value} onChange={onChange} />
                        )}
                    />
                </div>
                <div className="flex items-start smTablet:h-3 smTablet:my-0 my-2 flex-wrap gap-2 smTablet:gap-0">
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
                            <div className="flex items-center space-x-2 ml-3 mr-8 h-[12px] pt-2.5">
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
                            <div className="flex items-center space-x-2 h-[12px] pt-2.5">
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
            <Button
                className="bg-primary smTablet:w-[100px] rounded-md smTablet:rounded-tl-none smTablet:rounded-bl-none smTablet:h-auto  w-full my-3 smTablet:my-0"
                // disabled={isDisabled}
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
            <SelectTrigger className="border-none shadow-none w-auto py-0 h-[12px] pt-2.5">
                <div className="flex items-center gap-4">
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
