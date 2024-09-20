import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import airlineSeat from '@/app/static/airline-seat.svg'
import Image from 'next/image'
import plus from '@/app/static/plus.svg'
import { Title } from './title'
import { FilterSchema } from "@/app/(landing)/_form";

type OnChangeType = 'minus' | 'plus'

export function TravellersSelect({ value, onChange }: { value: FilterSchema['traveller'], onChange: (value: FilterSchema['traveller']) => void }) {
    const onChangeValue = (type: OnChangeType, key: keyof FilterSchema['traveller']) => {
        if (type === 'minus') {
            onChange({
                ...value,
                [key]: value[key] === 0 ? value[key] : value[key] - 1
            })
        } else {
            onChange({
                ...value,
                [key]: value[key] + 1
            })
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src={airlineSeat} alt="calendar" />
                    <div className="flex flex-col items-start">
                        <Title title="Passengers" />
                        <span className="font-[family-name:var(--font-lato-regular)] text-black text-[12px] smTablet:text-base font-medium">
                            <span className="font-[family-name:var(--font-lato-regular)] text-black text-[12px] smTablet:text-[16px] font-medium">
                                {value.audults + value.childrens + value.infrants}
                            </span>{" "}
                            Passengers
                        </span>
                        <span className="font-[family-name:var(--font-lato-regular)] text-[#575756] text-[14px] font-semibold">
                            Economy
                        </span>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <span className="font-[family-name:var(--font-lato-regular)] text-black text-base font-semibold">
                            Audults
                        </span>
                        <div className="flex items-center gap-5">
                            <button className="bg-[#E9E9E9] border border-primary w-[20px] h-[14px] rounded-[2px] flex justify-center items-center" onClick={() => onChangeValue('minus', 'audults')}>
                                <div className="w-[8.7px] h-[3px] rounded-[2px] bg-[#949899]" />
                            </button>
                            <span className="font-[family-name:var(--font-lato-regular)] text-black text-base font-[800]">
                                {value.audults}
                            </span>
                            <button className="bg-[#E9E9E9] border border-primary w-[20px] h-[14px] rounded-[2px] flex justify-center items-center" onClick={() => onChangeValue('plus', 'audults')}>
                                <Image src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-[family-name:var(--font-lato-regular)] text-black text-base font-semibold">
                                Childrens
                            </p>
                            <p className="font-[family-name:var(--font-lato-regular)] text-[11px] text-[#575756] font-semibold leading-[0]">
                                2-11
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <button className="bg-[#E9E9E9] border border-primary w-[20px] h-[14px] rounded-[2px] flex justify-center items-center" onClick={() => onChangeValue('minus', 'childrens')}>
                                <div className="w-[8.7px] h-[3px] rounded-[2px] bg-[#949899]" />
                            </button>
                            <span className="font-[family-name:var(--font-lato-regular)] text-black text-base font-[800]">
                                {value.childrens}
                            </span>
                            <button className="bg-[#E9E9E9] border border-primary w-[20px] h-[14px] rounded-[2px] flex justify-center items-center" onClick={() => onChangeValue('plus', 'childrens')}>
                                <Image src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-[family-name:var(--font-lato-regular)] text-black text-base font-semibold">
                                Infants
                            </p>
                            <p className="font-[family-name:var(--font-lato-regular)] text-[#575756] font-semibold  text-[11px] leading-[0]">
                                {`< 2 yrs`}
                            </p>
                        </div>

                        <div className="flex items-center gap-5">
                            <button className="bg-[#E9E9E9] border border-primary w-[20px] h-[14px] rounded-[2px] flex justify-center items-center" onClick={() => onChangeValue('minus', 'infrants')}>
                                <div className="w-[8.7px] h-[3px] rounded-[2px] bg-[#949899]" />
                            </button>
                            <span className="font-[family-name:var(--font-lato-regular)] text-black text-base font-[800]">
                                {value.infrants}
                            </span>
                            <button className="bg-[#E9E9E9] border border-primary w-[20px] h-[14px] rounded-[2px] flex justify-center items-center" onClick={() => onChangeValue('plus', 'infrants')}>
                                {/* <div className="w-[8.7px] h-[3px] rounded-[2px] bg-[#949899]" /> */}
                                <Image src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}