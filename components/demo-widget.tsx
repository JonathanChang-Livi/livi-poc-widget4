const DemoWidget = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between rounded-lg border border-slate-100 shadow-lg">
            <div className="rounded-t-lg bg-slate-200 flex flex-row justify-between items-center p-4">
                <p className="font-bold">Transactions</p>
                    <p className="font-bold text-blue-600">{'View All >'}</p>
            </div>
            <div className="p-4 h-full flex flex-col justify-between items-start">
                <div className="flex flex-col w-full">
                    <p className="font-bold text-blue-600">{'Upcoming payables in 7 days >'}</p>
                    <div className="my-1 flex flex-row justify-between w-full">
                        <p className="font-bold text-primary">{'USD 8,000'}</p>
                        <p>{'32 transactions'}</p>
                    </div>
                    <div className="my-1 flex flex-row justify-between w-full">
                        <p className="font-bold text-primary">{'HKD 493,000'}</p>
                        <p>{'32 transactions'}</p>
                    </div>
                    <div className="my-1 flex flex-row justify-between w-full">
                        <p className="font-bold text-primary">{'CNY 223,000'}</p>
                        <p>{'32 transactions'}</p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200 my-2"></div>
                <div className="flex flex-col w-full">
                    <p className="font-bold text-blue-600">{'Past payment in last 7 days >'}</p>
                    <div className="my-1 flex flex-row justify-between w-full">
                        <p className="font-bold text-primary">{'HKD 1,429,000 eqv.'}</p>
                        <p>{'152 transactions'}</p>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200 my-2"></div>
                <div className="flex flex-col w-full">
                    <p className="font-bold text-blue-600">{'Unsuccessful payments'}</p>
                    <div className="my-1 flex flex-row justify-between w-full">
                        <p className="font-bold text-primary">{'HKD 88,000 eqv.'}</p>
                        <p>{'15 transactions'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoWidget