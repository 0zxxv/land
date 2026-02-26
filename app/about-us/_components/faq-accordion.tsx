"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: readonly FAQItem[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
}

export function FAQAccordion({
  questions,
  activeIndex,
  onActiveChange,
}: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {questions.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            onClick={() => onActiveChange(index)}
            className={`flex min-h-[52px] w-full items-center rounded-xl px-4 py-3 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 sm:min-h-0 sm:rounded-2xl sm:px-5 sm:py-4 ${
              isActive
                ? "bg-black text-white dark:bg-[#F3F4F6] dark:text-black"
                : "bg-[#F3F4F6] text-black hover:bg-slate-200 hover:shadow-md dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <span className="text-sm font-medium sm:text-base">
                {index + 1}. {item.question}
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-medium text-white sm:h-14 sm:w-14 sm:rounded-xl sm:text-2xl md:h-16 md:w-16 md:text-3xl ${
                  isActive ? "bg-[#123146] dark:bg-[#123146] dark:text-white" : "bg-black dark:bg-[#F3F4F6] dark:text-black"
                }`}
              >
                {isActive ? "−" : "+"}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
