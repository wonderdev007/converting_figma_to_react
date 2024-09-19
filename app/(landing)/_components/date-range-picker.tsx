import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
// import { useState } from "react";
// import { DateRange } from "react-day-picker";
import Image from "next/image";
import calendar from "@/app/static/calendar.svg";
import { Separator } from "@/components/ui/separator";
import { Title } from "./title";
import { Calendar } from "@/components/ui/calendar";

export function DateRangePicker({
    value = { depart: new Date(), return: addDays(new Date(), 1) },
    onChange,
}: {
    value: { depart: Date; return: Date };
    onChange: (value: { depart?: Date; return?: Date }) => void;
}) {

    return (
        <div className={cn("grid gap-2")}>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="cursor-pointer flex items-center">
                        {/* <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )} */}
                        <div className="flex items-center gap-2">
                            <Image src={calendar} alt="calendar" />
                            <div className="flex flex-col gap-2 ">
                                <Title title="Depart Date" />
                                <span className="font-[family-name:var(--font-lato-regular)] text-black text-base font-medium">
                                    <span className="font-[family-name:var(--font-lato-regular)] text-black text-[24px] font-medium">
                                        {
                                            value.depart?.getDate()
                                        }
                                    </span>{" "}
                                    {
                                        format(value.depart, 'MMM yy')
                                    }
                                </span>
                                <span className="font-[family-name:var(--font-lato-regular)] text-[#575756] text-[13px] font-semibold">
                                    {
                                        format(value.depart, 'EEEE')
                                    }
                                </span>
                            </div>
                        </div>

                        <Separator
                            orientation="vertical"
                            className="bg-black w-[0.3px] h-16 mx-9"
                        />

                        <div className="flex items-center gap-2">
                            <Image src={calendar} alt="calendar" />
                            <div className="flex flex-col gap-2 ">
                                <Title title="Depart Date" />
                                <span className="font-[family-name:var(--font-lato-regular)] text-black text-base font-medium">
                                    <span className="font-[family-name:var(--font-lato-regular)] text-black text-[24px] font-medium">
                                        {
                                            value.return?.getDate()
                                        }
                                    </span>{" "}
                                    {
                                        format(value.return, 'MMM yy')
                                    }
                                </span>
                                <span className="font-[family-name:var(--font-lato-regular)] text-[#575756] text-[13px] font-semibold">
                                    {
                                        format(value.return, 'EEEE')
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={value.depart}
                        selected={{ from: value.depart, to: value.return }}
                        onSelect={(value) => onChange({
                            depart: value?.from,
                            return: value?.to
                        })}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
