import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

// const navigation = [
//     { name: 'Dashboard', href: '/', current: true },
//     { name: 'Region API', href: 'region', current: false },
//     { name: 'Region API Formik', href: 'regionformik', current: false },
//     { name: 'Region Redux', href: 'regionredux', current: false },
// ]

const navigation = [
    // { name: 'Dashboard', href: '/', current: true },
    { name: 'Region', href: 'region', formik: 'regionformik', redux: 'regionredux', current: false },
    { name: 'Country', href: 'country', formik: 'countryformik', redux: 'countryredux', current: false },
    { name: 'Location', href: 'location', formik: '#', redux: '#', current: false },
    { name: 'Department', href: 'department', formik: '#', redux: '#', current: false },
    { name: 'Employee', href: 'employee', formik: '#', redux: '#', current: false },
    { name: 'Job', href: 'job', formik: '#', redux: '#', current: false },
    { name: 'Job History', href: 'jobhistory', formik: '#', redux: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
console.log(navigation.name);

export default function Dashboard() {
    return (
        <>
            {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                     <a href="/" className='text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
                                                        Dashboard
                                                    </a>
                                                {navigation.map((item) => (
                                                    <Menu as="div" className="relative inline-block" key={item.name}>
                                                        <div>
                                                        <Menu.Button className="inline-flex text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                                            {item.name} <ChevronDownIcon className="mt-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                        </Menu.Button>
                                                        </div>

                                                        <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                        >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    {item.name} API
                                                                </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                <a
                                                                    href={item.formik}
                                                                    className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    {item.name} API Formik
                                                                </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                <a
                                                                    href={item.redux}
                                                                    className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    {item.name} Redux-Saga
                                                                </a>
                                                                )}
                                                            </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">{navigation.name}</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <Outlet/>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}