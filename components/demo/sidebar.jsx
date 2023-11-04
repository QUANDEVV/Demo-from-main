"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompany } from '@/redux/demo-data/demoSlice';

export default function DashNav() {
    const jsonData = useSelector((state) => state.demo);
    const industries = [...new Set(jsonData.data.map(company => company.industry))];
    const [expandedIndustry, setExpandedIndustry] = useState('');
    const dispatch = useDispatch();

    const handleIndustryClick = (industry) => {
        setExpandedIndustry(prevIndustry => (prevIndustry === industry ? '' : industry));
    };

    const handleCompanyClick = (company) => {
        dispatch(selectCompany(company));
    };

    return (
        <aside
            data-testid="side-nav"
            className="p-6 flex flex-col shadow-2xl w-[37rem] rounded h-auto justify-between"
        >
            <div className="relative">
                <div className="mb-6 flex-col items-center gap-2">
                    <p className="font-semibold text-2xl text-[#2DABB1]">Proxima AI</p>
                    <p className="font-semibold text-2xl text-[#777a7a]">Playground</p>
                </div>

                <hr className="border-t border-gray-200 mb-4" />

                <div className="py-1 w-full">
                    {industries.map((industry, index) => (
                        <div key={index} className="mb-2">
                            <button
                                className={`block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100 ${
                                    expandedIndustry === industry ? 'bg-gray-100 text-gray-900' : ''
                                }`}
                                onClick={() => handleIndustryClick(industry)}
                            >
                                {industry}
                            </button>
                            {expandedIndustry === industry && (
                                <ul className="ml-4 mt-1">
                                    {jsonData.data
                                        .filter((company) => company.industry === industry)
                                        .map((company) => (
                                            <li
                                                key={index}
                                                className="cursor-pointer my-5 text-sm text-gray-600 hover:text-indigo-600"
                                                onClick={() => handleCompanyClick(company)}
                                            >
                                                {index + 1}. {company.name}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
