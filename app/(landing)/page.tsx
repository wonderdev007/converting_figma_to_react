"use client";
import Image from "next/image";
import Link from "next/link";

import airPlane from "../static/air-plane.svg";
import ticket from "../static/ticket.svg";
import approval from "../static/approval.svg";
import qrCode from "../static/qr-code.svg";
import cibIata from "../static/cib-iata.svg";
import marker from "../static/marker.svg";
import arrowRight from "../static/arrow-right.svg";
import { addDays } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { FlightsTab } from "./_components/flight-tab";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "./_components/footer";
import { ContactInfo } from "./_components/contact-info";
import { filterSchema, FilterSchema } from "./_form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const form = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      date: {
        depart: new Date(),
        return: addDays(new Date(), 1),
      },
      flyingFrom: "mumbai",
      fyingTo: "mumbai 1",
      tripType: "oneway",
      class: "any",
      airline: "all-airlines",
      traveller: {
        audults: 1,
        childrens: 0,
        infrants: 0,
      },
    },
  });
  return (
    <FormProvider {...form}>
      <div className="bg-white h-full">
        <nav className="w-full bg-primary items-center flex justify-center h-[68px] relative">
          <div className="flex gap-7">
            <NavLink text="Flights" />
            <NavLink text="Hot Deals" />
            <NavLink text="About us" />
            <NavLink text="Contact us" />
          </div>

          <div className="absolute right-24 bottom-2 2xl:right-[20%] hidden smTablet:block">
            <ContactInfo />
          </div>
        </nav>

        <main className="smTablet:h-[520px] bg-[url('./static/beach.png')]  bg-pink-100 flex flex-col items-center bg-no-repeat bg-cover smTablet:justify-end pb-11 px-[30px] smTablet:px-0">
          <div>
            <div className="smTablet:mb-9 mb-4">
              <p className="font-[family-name:var(--font-waiting-for-sunrise)] text-black text-[32px] smTablet:text-[64px] mt-4">
                Find Best Flights with Us!
              </p>
              <p className="font-[family-name:var(--font-waiting-for-sunrise)] text-white text-[16px] smTablet:text-[32px] leading-[0]">
                Travel Around the World, BOOK NOW & SAVE!
              </p>
            </div>

            <Tabs
              defaultValue="flights"
              className="gap-0 flex flex-col items-center smTablet:items-start"
            >
              <TabsList className="w-[100%] smTablet:w-[576px] bg-[#F1F1F1] p-0 rounded-br-none rounded-bl-none">
                <Tab icon={airPlane} text="Flights" value="flights" />
                <Tab icon={airPlane} text="Hotels" value="hotel" />
                <Tab icon={ticket} text="My Trip" value="myTrip" />
              </TabsList>
              <TabsContent
                value="flights"
                className="w-[100%] mt-0 bg-white rounded-bl-md rounded-br-lg  smTablet:rounded-tr-lg rounded-tr-none h-auto"
              >
                <FlightsTab />
              </TabsContent>

              <TabsContent
                value="hotel"
                className="w-[100%] mt-0 bg-white rounded-bl-md rounded-br-lg  smTablet:rounded-tr-lg rounded-tr-none h-auto"
              >
                <FlightsTab />
              </TabsContent>

              <TabsContent
                value="myTrip"
                className="w-[100%] mt-0 bg-white rounded-bl-md rounded-br-lg  smTablet:rounded-tr-lg rounded-tr-none h-auto"
              >
                <FlightsTab />
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <div className="flex items-start flex-wrap justify-center gap-4 lg:gap-48 mt-[16px] smTablet:px-[104px]">
          <Badge
            title="Best Price Guarantee"
            icon={
              <Image
                src={approval}
                alt="icon"
                className="smTablet:w-auto w-[10px]"
              />
            }
          />
          <Badge
            title="Best Price Guarantee"
            description="Pay with QR code"
            icon={
              <Image
                src={qrCode}
                alt="icon"
                className="smTablet:w-auto w-[10px]"
              />
            }
          />
          <Badge
            title="Over 13 Years in Business"
            icon={
              <div className="border rounded border-primary px-0.5">
                <p className="font-[family-name:var(--font-manrope-medium)] text-primary text-[8px] smTablet:text-[14px]">
                  Est. 2010
                </p>
              </div>
            }
          />
          <Badge
            title="IATA Accredited Agency"
            icon={
              <Image
                src={cibIata}
                alt="icon"
                className="smTablet:w-auto w-[10px]"
              />
            }
          />
        </div>

        <div className=" px-0">
          <div className="bg-gradient-to-b from-white via-[#88D0E8] to-white h-auto smTablet:h-[255px]  w-full mt-[20px] flex flex-col items-center pb-7">
            <p className="text-black font-[family-name:var(--font-manrope-bold)] text-bold text-base smTablet:text-[20px] smTablet:mb-4">
              Top Searched Destinations
            </p>

            <Carousel className="w-full smTablet:max-w-[1248px]">
              <CarouselContent className="-ml-1">
                {[
                  {
                    title: "Mumbai",
                    price: 600,
                  },
                  {
                    title: "Raijkot",
                    price: 600,
                  },
                  {
                    title: "Ahemdabad",
                    price: 600,
                  },
                  {
                    title: "Goa",
                    price: 600,
                  },
                  {
                    title: "Delhi",
                    price: 600,
                  },
                  {
                    title: "Amritsar",
                    price: 600,
                  },
                  {
                    title: "Lisbon",
                    price: 600,
                  },
                  {
                    title: "Maputo",
                    price: 600,
                  },
                ].map((item) => (
                  <div key={item.title} className="p-2">
                    <TopDesctinations
                      key={item.title}
                      title={item.title}
                      price={item.price}
                    />
                  </div>
                ))}
              </CarouselContent>
              <CarouselNext className="border-primary hidden text-primary smTablet:flex items-center justify-center" />
              <CarouselPrevious className="border-primary hidden smTablet:flex text-primary items-center justify-center" />
            </Carousel>
          </div>
        </div>

        <Footer />
      </div>
    </FormProvider>
  );
}

function TopDesctinations({ title, price }: { title: string; price: number }) {
  return (
    <div className="bg-white rounded-[16px] p-4 flex flex-col w-[288px]">
      <div className="flex items-center gap-2">
        <div className="size-20 rounded-full bg-[#D9D9D9]" />
        <div className="flex items-start gap-1.5">
          <Image src={marker} alt="marker" className="mt-1" />
          <div className="flex flex-col items-start">
            <p className="font-[family-name:var(--font-manrope-medium)] text-[18px] text-bold text-black text-left">
              {title}
            </p>
            <span className="font-[family-name:var(--font-manrope-medium)] text-bold text-[10px] text-black">
              from{" "}
              <span className="text-primary text-[14px] font-[family-name:var(--font-manrope-bold)] text-bold">
                £{price}
              </span>{" "}
              pp
            </span>
          </div>
        </div>
      </div>
      <Button className="w-[108px] h-[28px] gap-2 rounded-[8px] px-2 self-end">
        <span>Search Now</span>
        <Image src={arrowRight} alt="arrow-right" />
      </Button>
    </div>
  );
}

function Badge({
  title,
  icon,
}: // description,
  {
    title: string;
    icon: ReactNode;
    description?: string;
  }) {
  return (
    <div className="flex flex-col items-center gap-2 smTablet:gap-[8px]">
      <div className="flex flex-col items-center">
        <p className="font-[family-name:var(--font-lato-regular)] text-[8px] smTablet:text-[14px] text-primary font-medium">
          {title}
        </p>
        {/* <p className="font-[family-name:var(--font-lato-regular)] text-[6px] smTablet:text-[10px] leading-[12px] text-primary">
          {description}
        </p> */}
      </div>
      {icon}
    </div>
  );
}

function Tab({
  value,
  icon,
  text,
}: {
  value: string;
  icon: string | StaticImport;
  text: string;
}) {
  return (
    <TabsTrigger
      value={value}
      className=" data-[state=active]:shadow-none h-full w-full smTablet:w-48  data-[state=active]:bg-white"
    >
      <div className="flex items-center gap-1">
        <Image src={icon} alt="air-plane" />
        <span className="font-[family-name:var(--font-lato-regular)] text-[#575756] font-semibold">
          {text}
        </span>
      </div>
    </TabsTrigger>
  );
}

function NavLink({ text }: { text: string }) {
  return (
    <Link href="#">
      <span className="font-medium font-[family-name:var(--font-lato-regular)] text-sm smTablet:text-[18px] text-white">
        {text}
      </span>
    </Link>
  );
}
