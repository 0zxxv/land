"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQItem[];
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
            className={`w-full rounded-2xl px-5 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 ${
              isActive
                ? "bg-black text-white"
                : "bg-[#F3F4F6] text-black"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">
                {index + 1}. {item.question}
              </span>
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl font-medium text-white sm:h-16 sm:w-16 sm:text-3xl ${
                  isActive ? "bg-gray-600" : "bg-black"
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
