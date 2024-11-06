"use client"
import { Card } from "flowbite-react";
import { useState } from "react";
import planData from '../../../utils/planData.jsx'; // Assuming the path is correct

function Page() {
  const [selectedPlan, setSelectedPlan] = useState(planData[0].id); // Default to Free plan

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
      {planData.map((plan) => (
        <Card
          key={plan.id}
          className={`max-w-sm ${selectedPlan === plan.id ? 'border-4 border-cyan-600' : ''}`} 
        >
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.name} plan</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">₹</span>
            <span className="text-5xl font-extrabold tracking-tight">{plan.cost}</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="my-7 space-y-5">
            {plan.offering.map((offer, index) => (
              <li key={index} className="flex space-x-3">
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{offer.value}</span>
              </li>
            ))}
          </ul>
          {plan.paymentLink ? (
            <a
              href={plan.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelectedPlan(plan.id)} // Set selected plan on click
              className={`inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900`}
            >
              Choose plan
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setSelectedPlan(plan.id)} // Set selected plan on click
              className={`inline-flex w-full justify-center rounded-lg bg-white border border-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-cyan-600 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900`}
            >
              Selected Plan
            </button>
          )}
        </Card>
      ))}
    </div>
  );
}

export default Page;
