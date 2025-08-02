import { ShareIcan } from "../Icon/Share"

interface cardType {
    title: string,
    link?: string,
    type?: "youtube" | "twitter"
}

export const Card = ({ title, link, type }: cardType) => {
    return <div>
        <div className="p-2 bg-white w-72 border rounded-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="pr-2">
                        <ShareIcan />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <ShareIcan />
                    <ShareIcan />
                </div>
            </div>
        </div>
    </div>
}