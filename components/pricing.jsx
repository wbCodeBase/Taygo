"use client"

import { pricingData } from "@/lib/pricingPlan";
import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const PricingTable = ({ currency }) => {

  const [billingPeriod, setBillingPeriod] = useState("yearly");

  const currencySymbols = {
    usd: "$",
    inr: "₹"
  };

  const cn = (...classes) => classes.filter(Boolean).join(" ");

  const Button = ({ children, className, size, ...props }) => (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );




  return (
    <div>
      <div className="md:px-20 py-10 sm:px-6 lg:px-8 bg-gray-50 relative flex justify-center">
        <div className="max-w-7xl mx-auto border p-4 bg-white md:rounded-xs md:shadow-xl">


          {/* Currency & Billing Period Toggle */}
          <div className="flex flex-wrap md:justifybetween justify-center md:gap-8 gap-4 mb-8">


            {/* <div className="bg-white rounded-xl p-1 shadow-lg flex">
              <button
                onClick={() => setCurrency("usd")}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all",
                  currency === "usd"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("inr")}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all",
                  currency === "inr"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                INR (₹)
              </button>
            </div> */}


            <div className="bg-white p-1 shadow-lg flex rounded-xs">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={cn(
                  "px-6 py-3 font-semibold cursor-pointer transition-all rounded-xs",
                  billingPeriod === "monthly"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Monthly
              </button>
              {/* <button
                onClick={() => setBillingPeriod("quarterly")}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all",
                  billingPeriod === "quarterly"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Quarterly
              </button> */}
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={cn(
                  "px-6 py-3 rounded-xs font-semibold cursor-pointer transition-all",
                  billingPeriod === "yearly"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Yearly
              </button>
            </div>


          </div>


          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:gridcols-3 md:gridcols-2 max-w-2xl gap-6">
            {pricingData.plans.map((plan, planIndex) => {
              const currentPricing = plan.pricing[billingPeriod];
              return (
                <div
                  key={planIndex}
                  className={`col-span-1 rounded-xs border px-4 ${plan.recommended && "bg-teal-100"}`}
                >
                  <div className="p-6 rounded-2xl">
                    <h3 className="text-3xl font-extrabold mb-2 text-gray-800">
                      {plan.name}
                    </h3>
                    <p className="mb-2">{plan.description}</p>


                    <div key={plan.planId} className="...your card container...">
                      {planIndex < 2 ? (
                        <>
                          {/* Pricing Block */}
                          <div className="space-y-1 my-10">
                            <p>Starting from</p>
                            <div className="flex items-baseline mb-1">
                              <span className="md:text-5xl text-3xl font-extrabold text-gray-900">
                                {currencySymbols[currency]}
                                {currentPricing[currency].toLocaleString("en-IN")}
                              </span>
                              <span className="ml-1 text-gray-600 text-lg">
                                {currentPricing.periodLabel}
                              </span>
                            </div>
                            <div className="text-gray-700 text-md">
                              <p>*per user</p>
                            </div>
                          </div>

                          {/* Subscribe Button */}

                            <Button
                              size="lg"
                              className="w-full cursor-pointer rounded-xs font-semibold group bg-btn-green hover:bg-btn-green-hover text-white"
                            >
                              Subscribe
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>

                        </>
                      ) : (
                        <>
                          {/* Custom Pricing Block */}
                          <div className="space-y-3 my-14">
                            <p className="text-4xl font-bold text-gray-800">Custom Pricing</p>
                            <p className="text-sm text-gray-600">
                              Contact us for tailored solutions and pricing details.
                            </p>
                          </div>

                          <Link href="/request-demo">
                            <Button
                              size="lg"
                              className="w-full font-semibold group bg-gray-700 hover:bg-gray-800 text-white"
                            >
                              Get Started
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>




                    {/* <div className="mt-4">
                      {plan.listDetail?.map((item, index) => {
                        const isAgentPlaceholder = item === "No Of Agents";
                        const displayText = isAgentPlaceholder
                          ? plan["No Of Agents"]?.[billingPeriod] || "Team inbox (1 agent default)"
                          : item;

                        return (
                          <div
                            key={index}
                            className="flex items-start gap-3 text-gray-600 w-full py-2"
                          >
                            <Check className="w-5 h-5 text-teal-500 mt-1" />
                            <span className="text-left">{displayText}</span>
                          </div>
                        );
                      })}
                    </div> */}






                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;







