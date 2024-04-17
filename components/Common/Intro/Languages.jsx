import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [french, setFrench] = useState(0)
    const [english, setEnglish] = useState(0)
    const [spanish, setSpanish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (french < 100) {
                setFrench(prevCount => prevCount + 1);
            }
            if (english < 100) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (spanish < 100) {
                setSpanish(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [french, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="flex items-center justify-center gap-x-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={french} size={50} />
                        <span className='text-xs font-bold text-Snow'>French</span>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={50} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={spanish} size={50} />
                        <span className='text-xs font-bold text-Snow'>Spanish</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages