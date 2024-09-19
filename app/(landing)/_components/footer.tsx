import Image from "next/image";
import { ContactInfo } from "./contact-info";
import callUs from "@/app/static/call-us.svg";
import filledMarkder from "@/app/static/filled-marker.svg";
import greenWhatsapp from '@/app/static/green-whatsapp.svg'
import whatsapp from "@/app/static/blue-whatsapp.svg";
import clock from "@/app/static/clock.svg";
import facebook from "@/app/static/facebook.svg";
import mail from "@/app/static/mail.svg";
import iatastrip from "@/app/static/iatastrip.svg";
import paymentCards from "@/app/static/payment-cards.svg";
import x from "@/app/static/x.svg";
import ruperpay from "@/app/static/ruper-pay.svg";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <div className="h-[445px] bg-primary w-full flex flex-col items-center relative">
            <div className="w-[1248px] flex flex-col items-center">
                <div className="flex justify-end w-full pt-4">
                    <p className="text-base text-white font-[family-name:var(--font-manrope-medium)] mr-2 font-[600]">
                        Book Price Call us
                    </p>
                    <Image src={callUs} alt="call-us" />
                    <p className="text-lg ml-5 text-white font-[family-name:var(--font-manrope-medium)]">
                        +44(0)7916325248
                    </p>
                </div>

                <Separator className="bg-white h-[0.3px] w-full my-3" />

                <div className="flex justify-between w-full">
                    <div>
                        <p className="text-[20px] text-semibold text-white font-[family-name:var(--font-manrope-medium)] font-[600] mb-[28px]">
                            Stay Connected
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <Image alt="marker" src={filledMarkder} />
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    Sandal Avenue, LE4 5HZ Leicester UK
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Image alt="marker" src={clock} className="mt-[12px]" />
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    <span className="block">Ospanen 7 days a week</span>
                                    <span className="block">(08:00AM - 08:00PM)</span>
                                    <span className="block">
                                        Office Visit: Hours: By Appointment Only
                                    </span>
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Image alt="marker" src={mail} />
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    sales@nilkanthtravel.co.uk
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[20px] text-semibold text-white font-[family-name:var(--font-manrope-medium)] font-[600] mb-[28px]">
                            Company
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    Terms & Conditions
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    Cookies & Policy
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    Privacy - Policy
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-[14px] text-semibold text-white font-[family-name:var(--font-manrope-medium)]">
                                    About us
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[20px] text-semibold text-white font-[family-name:var(--font-manrope-medium)] font-[600] mb-[28px]">
                            Need any help?
                        </p>
                        <div>
                            <ContactInfo />
                        </div>
                    </div>

                    <div>
                        <p className="text-[20px] text-semibold text-white font-[family-name:var(--font-manrope-medium)] font-[600] mb-[28px]">
                            Our Technology Partners
                        </p>
                        <div className="flex flex-col gap-4">
                            <Image src={iatastrip} alt="partners" />
                            <Image src={paymentCards} alt="payment cards" className="-ml-6" />
                            <div className="flex items-center">
                                <Image src={ruperpay} alt="ruperpay" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-end w-full">
                    <div className="flex-1">
                        <p className="text-base text-bold text-white font-[family-name:var(--font-manrope-medium)] font-[600] mb-4">
                            Follow us
                        </p>
                        <div className="flex gap-3">
                            <Button className="bg-white p-0 size-9 rounded-full">
                                <Image src={x} alt="twitter" />
                            </Button>
                            <Button className="bg-white p-0 size-9 rounded-full">
                                <Image src={whatsapp} className="text-primary" alt="twitter" />
                            </Button>
                            <Button className="bg-white p-0 size-9 rounded-full">
                                <Image src={facebook} alt="twitter" />
                            </Button>
                        </div>
                    </div>
                    <div className="grow">
                        <p className="text-center text-[10px] text-bold text-white font-[family-name:var(--font-manrope-medium)] font-[500] mb-2">
                            Flydiu,co.uk is a leading travel brand under trading name of
                            NILKANTH TRAVE LTD ( Company Reg No.: 09775713, IATA Certified ).
                        </p>
                    </div>

                    <div className="flex-1" />
                </div>
                <p className="text-center text-[14px] text-bold text-white font-[family-name:var(--font-manrope-medium)] font-[500]">
                    © 2024 Travila Inc. All rights reserved.
                </p>
            </div>
            <Button variant={'ghost'} className="bg-[#03FB3A] fixed right-0 bottom-7 p-2 border rounded-tr-[15px] rounded-tl-[0px] rounded-br-[0px] rounded-bl-[20px] hover:bg-[#03FB3A]">
                <Image src={greenWhatsapp} alt="whatsapp" className="absolute -left-7 -top-7" />
                <p className="font-[family-name:var(--font-manrope-medium)] text-black font-[600]">
                    Chat With Us
                </p>
            </Button>
        </div>
    );
}
