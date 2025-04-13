import { ReactNode } from "react"
import { cva, VariantProps } from 'class-variance-authority'

type BadgeVariants = VariantProps<typeof badge>


type BadgeProps = {
    children: ReactNode
    className?: string
} & BadgeVariants

const badge = cva('px-3 py-0.5 text-sm', {
    variants: {
        color: {
            gray: 'bg-gray-100 text-gray-900',
            red: 'bg-red-100 text-red-900',
            yellow: 'bg-yellow-100 text-yellow-900',
            green: 'bg-green-100 text-green-900',
            blue: 'bg-blue-100 text-blue-900',
            indigo: 'bg-indigo-100 text-indigo-900',
            purple: 'bg-purple-100 text-purple-900',
            pink: 'bg-pink-100 text-pink-900'
        },
        shape: {
            square: 'rounded',
            pill: 'rounded-full'
        }
    },
    defaultVariants: {
        color: 'gray',
        shape: 'square'
    }
})

export default function Badge({children, color, className, shape}: BadgeProps) {
    return (
        <div className={badge({color, shape, className})}>
            {children}
        </div>
    )
}