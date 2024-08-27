import { cn } from "@/lib/utils";
import { ArrowUpDownIcon } from "lucide-react";

function OperationMenu () {
    const OperationOption = ({ children } : { children: React.ReactNode }) => {
        return (
            <div className={cn(
                "text-primary-custom hover:text-secondary-custom",
                "select-none cursor-pointer"
            )}>
                {children}
            </div>
        )
    }

    return (
        <div className={cn(
            "w-full",
            "flex flex-row",
            "space-x-4",
            "pb-3"
        )}>
            <OperationOption>Swap</OperationOption>
            <OperationOption>Cross-Chain</OperationOption>
        </div>
    )
}

function SwapValue () {
    return (
        <div className={cn(
            "w-full h-full",
            "bg-blue-300/[0.3]",
            "rounded-md",
            "p-3",
            "space-y-3",
            "shadow-md"
        )}>
            <div className="">
                Sell
            </div>
            <div className="text-2xl font-medium text-gray-600">
                0.0
            </div>
            <div>
                $ 0.00
            </div>
        </div>
    )
}

function InvertValues () {
    return (
        <div className={cn(
            "w-10 h-10 p-2 top-[102px] text-xl rounded-lg absolute",
            "bg-primary-custom text-white",
            "flex flex-row items-center justify-center",
            "cursor-pointer shadow-none transition-all",
            "hover:shadow-custom hover:text-secondary-custom",
            // "before:bg-black before:rounded-lg before:transition-all before:content-[''] before:opacity-0",
            // "before:block before:absolute hover:before:ml-3 hover:before:mt-3 hover:before:opacity-100"
        )}>
            <ArrowUpDownIcon className="w-max h-max" />
        </div>
    )
}

export default function SwapPage() {
    return (
        <div className={cn(
            "w-1/4 relative",
            "min-h-1 h-auto",
        )}>
            <OperationMenu />
            <div className={cn(
                "w-full relative",
                "min-h-1 h-auto",
                "flex flex-col items-center justify-center",
                "space-y-3"
            )}>
                <SwapValue />
                <SwapValue />
                <InvertValues />
                <div className={cn(
                    "bg-primary-custom w-full text-center p-3 rounded-lg",
                    "transition-all cursor-pointer select-none",
                    "text-white hover:text-secondary-custom hover:shadow-custom"
                )}>SWAP</div>
            </div>
        </div>
    )
}