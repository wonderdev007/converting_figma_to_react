import Image from 'next/image'
import phoneSvg from '@/app/static/phone.svg'
import whatsappSvg from '@/app/static/whatsapp.svg'

export function ContactInfo() {
    return (
        <div className="flex items-center">
            <Image alt="phone" src={phoneSvg} />
            <div className="w-2 h-2 rounded-full bg-[#03FB3A] mr-2" />

            <div>
                <div className="flex items-center justify-between h-0 mb-1">
                    <div>
                        <span className="font-[family-name:var(--font-manrope-semibold)] text-white text-[11px] leading-none ">
                            Call Our Expert
                        </span>
                    </div>

                    <div className="relative">
                        <span className="font-[family-name:var(--font-manrope-semibold)] text-white text-[11px] leading-none">
                            WhatsAPP
                        </span>
                        <Image
                            className="absolute -top-2 -right-4"
                            src={whatsappSvg}
                            alt="whatsapp"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="font-[family-name:var(--font-manrope-medium)] text-white text-xl text-shadow-custom">
                        0791-632-5248
                    </span>
                </div>
            </div>
        </div>
    );
}
