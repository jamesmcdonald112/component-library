import { cva, VariantProps } from "class-variance-authority"
import { CircleCheck, TriangleAlert, CircleX, Info } from 'lucide-react';
import { ReactNode } from "react";

const banner = cva("p-5 rounded-lg", {
    variants: {
        variant: {
            success: 'bg-green-100 text-green-500 ',
            warning: 'bg-yellow-100 text-yellow-500',
            error: 'bg-red-100 text-red-500',
            neutral: 'bg-blue-100 text-blue-500'
        },
    },
    defaultVariants: {
        variant: 'neutral'
    }
})

type BannerVariants = VariantProps<typeof banner>

type BannerProps = {
    title: string
    children?: ReactNode
} & BannerVariants


const bannerIcons = {
    success: CircleCheck,
    warning: TriangleAlert,
    error: CircleX,
    neutral: Info
}

const bannerIconColors = {
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    neutral: 'text-blue-500'
}

const bannerTitleColors = {
    success: 'text-green-900',
    warning: 'text-yellow-900',
    error: 'text-red-900',
    neutral: 'text-blue-900'
}

export default function Banner({title, children, variant}: BannerProps) {

    const Icon = bannerIcons[variant ?? 'neutral']

    return (
        <section 
            data-testid="banner" 
            className={`${banner({variant})} flex sm:flex-nowrap flex-wrap gap-2 justify-start items-start`}

        >
            <Icon 
                data-testid='banner-icon' 
                className={`w-5 h-5 mt-1 ${bannerIconColors[variant ?? 'neutral']}`} />
            <div className="flex flex-col items-start w-full gap-1">
                <h2 
                    className={`font-semibold text-lg leading-tight ${bannerTitleColors[variant ?? 'neutral']}`}
                    >{title}</h2>
                {children && (
                <p className={`w-full text-left leading-tight tracking-tight`}>
                        {children}
                </p>
                )}
            </div>
        </section>
        
    )
}