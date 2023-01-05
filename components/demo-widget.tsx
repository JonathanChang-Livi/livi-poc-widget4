import { Card, CardBody, Group, Stack, Title } from "livi-poc-core"


interface DropdownProps {
    text: string
    key: string
    options: DropdownChild[]
}

interface DropdownChild {
    text: string
    href?: string
}
const Dropdown = ({ text, key, options }: DropdownProps) => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="dropdown relative">
                    <button
                        className="
          dropdown-toggle
          px-6
          py-2.5
          bg-secondary
          text-primary
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-secondary-dark hover:shadow-lg
          focus:bg-secondary-dark focus:shadow-lg focus:outline-none focus:ring-0
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                        type="button"
                        id={key}
                        data-bs-toggle={`${key}-dropdown`}
                        aria-expanded="false"
                    >
                        {text}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            className="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                        </svg>
                    </button>
                    <ul
                        className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                        aria-labelledby={key}
                    >
                        {options.map((x) => {
                            return (
                                <li>
                                    <a href={`${x.href || '#'}`}
                                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-primary hover:bg-gray-100 ">
                                        {x.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const StatGraph = () => {
    return (
        <div className="max-w-lg mx-auto">

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

            <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
                <div className="px-4 py-3">
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </li>
                </ul>
            </div>

            <p className="mt-5">This dropdown element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.</p>
        </div>
    )
}

const DemoWidget = () => {
    const dropdownOption: DropdownChild[] = [
        { text: 'HKD' },
        { text: 'RMB' },
        { text: 'USD' },
        { text: 'JPY' },
    ]
    return (
        <Card>
            <CardBody>
                <Stack spacing="md">
                    <Group className="h-full justify-between">
                        <Title>Exchange Rate</Title>
                        <Group className="h-full" spacing="md">
                            <Dropdown text="From" key='from' options={dropdownOption} />
                            <Dropdown text="To" key='to' options={dropdownOption} />
                        </Group>
                    </Group>
                    <StatGraph />
                </Stack>
            </CardBody>
        </Card>
    )
}

export default DemoWidget